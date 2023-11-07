import { FC } from "react";
import Image from "next/image";
import { Breadcrumbs, Group, Text } from "@mantine/core";
import { CONTAINER_MAX_WIDTH } from "@/util/constants";
import logo from "@/public/logo.svg";
import { Link } from "../base/link";
import { paths } from "@/navigation/paths";
import { useTranslations } from "next-intl";
import { formatDate } from "@/util/date";
import { UserMenu } from "./user-menu";

export const Header: FC = () => {
  const { t, currentDate } = useHeader();

  return (
    <header className="header">
      <Group maw={CONTAINER_MAX_WIDTH} mx="auto" justify="space-between">
        <Group gap={40}>
          <Link href={paths.home()}>
            <Image src={logo} alt={t("header.logoAlt")} priority />
          </Link>
          <Breadcrumbs separator={t("symbol.separator")}>
            <Text size="lg" fw={700}>
              {t("header.competitionName")}
            </Text>
            <Text size="lg" c="textSecondary.7">
              {currentDate}
            </Text>
          </Breadcrumbs>
        </Group>
        <UserMenu />
      </Group>
    </header>
  );
};

function useHeader() {
  const t = useTranslations();
  const currentDate = formatDate(new Date(), "withLongMonth");

  return { t, currentDate };
}
