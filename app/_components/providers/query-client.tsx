"use client";

import { FC, ReactNode, useState } from "react";
import {
  QueryClient,
  QueryClientProvider as QCProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useTranslations } from "next-intl";
import { isAxiosError } from "axios";
import { notifications } from "@mantine/notifications";
import { IconX } from "@tabler/icons-react";
import { api } from "@/domain/remote";
import { getAxiosData } from "@/domain/remote/response/data";

type Props = {
  children: ReactNode;
};

export const QueryClientProvider: FC<Props> = ({ children }) => {
  const { queryClient } = useQueryClientProvider();

  return (
    <QCProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QCProvider>
  );
};

function useQueryClientProvider() {
  const t = useTranslations("notification");

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            queryFn: async ({ queryKey }) => {
              const [path, params] = queryKey as [string, unknown];
              return getAxiosData(await api.get(path, { params }));
            },
          },
          mutations: {
            onError: (error) => {
              let message;
              if (isAxiosError(error)) {
                message = error.response?.data.message ?? error.message;
              } else if (error instanceof Error) {
                message = error.message;
              } else {
                message = t("error.somethingWentWrong");
              }
              notifications.show({
                message,
                color: "red",
                icon: <IconX />,
                withBorder: true,
              });
            },
          },
        },
      })
  );

  return { queryClient };
}
