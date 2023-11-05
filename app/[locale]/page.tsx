import { useTranslations } from "next-intl";
import { Title } from "@mantine/core";

export default function HomePage() {
  const t = useTranslations();

  return (
    <Title order={2} c="red">
      {t("appName")}
    </Title>
  );
}
