import { FC } from "react";
import { Button, Group, Indicator, Title } from "@mantine/core";
import { useTranslations } from "next-intl";

export const ApplicationsHeader: FC = () => {
  const { t } = useApplicationHeader();

  return (
    <Group
      pos="relative"
      p={40}
      justify="space-between"
      className="application-header"
    >
      <Title>{t("title")}</Title>
      <Group>
        <Button>{t("action.newApplication")}</Button>
        <Button
          c="black"
          bg="var(--mantine-color-bg-disabled)"
          leftSection={<Indicator color="green" />}
        >
          {t("action.open")}
        </Button>
      </Group>
    </Group>
  );
};

function useApplicationHeader() {
  const t = useTranslations("home.applicationHeader");

  return { t };
}
