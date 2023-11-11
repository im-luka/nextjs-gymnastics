import { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button, Stack, Text, Title } from "@mantine/core";
import ghostIcon from "@/public/images/ghost.svg";
import { useApplicationModal } from "@/hooks/use-application-modal";
import { ApplicationModal } from "../modals/application-modal";

type Props = {
  refetchQuery: VoidFunction;
};

export const EmptyPlaceholder: FC<Props> = (props) => {
  const { t, refetchQuery, modalRef, isOpen, open, close, handleSubmit } =
    useApplicationsEmptyPlaceholder(props);

  return (
    <Stack h="100%" pos="relative" justify="center" align="center" gap={20}>
      <Button
        variant="subtle"
        size="compact-sm"
        pos="absolute"
        right={0}
        top={0}
        onClick={refetchQuery}
      >
        {t("refetchAction")}
      </Button>
      <Image src={ghostIcon} width={80} height={80} alt={t("imgAlt")} />
      <Stack gap={10} align="center">
        <Title order={3}>{t("title")}</Title>
        <Text c="textSecondary.7">{t("description")}</Text>
      </Stack>
      <Button size="sm" bg="primaryVariantJudge.5" onClick={open}>
        {t("applyAction")}
      </Button>
      <ApplicationModal
        ref={modalRef}
        opened={isOpen}
        onClose={close}
        onSubmit={handleSubmit}
      />
    </Stack>
  );
};

function useApplicationsEmptyPlaceholder({ refetchQuery }: Props) {
  const t = useTranslations("home.applications.emptyPlaceholder");
  const { modalRef, isOpen, open, close, handleSubmit } = useApplicationModal();

  return { t, refetchQuery, modalRef, isOpen, open, close, handleSubmit };
}
