import { FC } from "react";
import { useTranslations } from "next-intl";
import { Group, Title } from "@mantine/core";
import { Actions } from "./actions";

export const Header: FC = () => {
  const { t } = useApplicationHeader();

  return (
    <Group
      pos="relative"
      pb={40}
      justify="space-between"
      align="flex-start"
      className="application-header"
    >
      <Title>{t("title")}</Title>
      <Actions />
    </Group>
  );
};

function useApplicationHeader() {
  const t = useTranslations("home.applications.header");

  return { t };
}
