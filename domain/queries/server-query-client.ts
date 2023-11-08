import { cache } from "react";
import { QueryClient } from "@tanstack/react-query";
import { getAxiosData } from "../remote/response/data";
import { api } from "../remote";

export const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          queryFn: async ({ queryKey }) => {
            const [path, params] = queryKey as [string, unknown];
            return getAxiosData(await api.get(path, { params }));
          },
        },
      },
    })
);
