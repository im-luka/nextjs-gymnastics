import { FC, ReactNode } from "react";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { ThemeProvider } from "./theme";
import { QueryClientProvider } from "./query-client";
import { getCurrentTimezone } from "@/util/date";

type Props = {
  locale: string;
  children: ReactNode;
};

export const Providers: FC<Props> = ({ locale, children }) => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone={getCurrentTimezone()}
    >
      <ThemeProvider>
        <QueryClientProvider>{children}</QueryClientProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
};
