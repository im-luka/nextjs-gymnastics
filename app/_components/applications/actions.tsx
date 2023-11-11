"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import { Button, Group, Indicator, Stack } from "@mantine/core";
import { ApplicationModal } from "../modals/application-modal";
import { useApplicationModal } from "@/hooks/use-application-modal";

export const Actions: FC = () => {
  const { t, modalRef, isOpen, open, close, handleSubmit } = useQueryActions();

  return (
    <Stack align="flex-end">
      <Group>
        <Button onClick={open}>
          {isOpen ? t("applyNew") : t("newApplication")}
        </Button>
        <Button
          c="black"
          bg="var(--mantine-color-bg-disabled)"
          leftSection={<Indicator color="green" />}
        >
          {t("open")}
        </Button>
      </Group>
      <ApplicationModal
        ref={modalRef}
        opened={isOpen}
        onClose={close}
        onSubmit={handleSubmit}
      />
    </Stack>
  );
};

function useQueryActions() {
  const t = useTranslations("home.applications.header.action");
  const { modalRef, isOpen, open, close, handleSubmit } = useApplicationModal();

  return { t, modalRef, isOpen, open, close, handleSubmit };
}
