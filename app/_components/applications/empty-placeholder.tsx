import { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button, Stack, Text, Title } from "@mantine/core";
import ghostIcon from "@/public/images/ghost.svg";

export const EmptyPlaceholder: FC = () => {
  const { t } = useApplicationsEmptyPlaceholder();

  return (
    <Stack h="100%" justify="center" align="center" gap={20}>
      <Image src={ghostIcon} width={80} height={80} alt={t("imgAlt")} />
      <Stack gap={10} align="center">
        <Title order={3}>{t("title")}</Title>
        <Text c="textSecondary.7">{t("description")}</Text>
      </Stack>
      <Button size="sm" bg="primaryVariantJudge.5">
        {t("applyAction")}
      </Button>
    </Stack>
  );
};

function useApplicationsEmptyPlaceholder() {
  const t = useTranslations("home.applications.emptyPlaceholder");

  return { t };
}
