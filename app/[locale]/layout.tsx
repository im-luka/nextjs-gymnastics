import { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslator } from "next-intl/server";
import { LOCALES } from "@/util/constants";

type Params = { locale: string };
type Props = { children: ReactNode; params: Params };

export async function generateMetadata({
  params: { locale },
}: {
  params: Params;
}): Promise<Metadata> {
  const t = await getTranslator(locale, "metadata");
  return {
    title: {
      template: t("template"),
      default: t("title"),
    },
    description: t("description"),
  };
}

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
