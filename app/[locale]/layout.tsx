import { LOCALES } from "@/util/constants";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

type Params = { locale: string };
type Props = { children: ReactNode; params: Params };

export const metadata: Metadata = {
  title: "Title",
  description: "Description",
};

export default function RootLayout({ children, params: { locale } }: Props) {
  if (!LOCALES.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
