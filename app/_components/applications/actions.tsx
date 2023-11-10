"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import { Button, Group, Indicator, Stack } from "@mantine/core";
import { ApplicationModal } from "../modals/application-modal";
import { useDisclosure } from "@mantine/hooks";

export const Actions: FC = () => {
  const { t, isModalOpen, openModal, closeModal } = useQueryActions();

  return (
    <Stack align="flex-end">
      <Group>
        <Button onClick={openModal}>
          {isModalOpen ? t("applyNew") : t("newApplication")}
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
        opened={isModalOpen}
        onClose={closeModal}
        onSubmit={() => console.log("subbed")}
      />
    </Stack>
  );
};

function useQueryActions() {
  const t = useTranslations("home.applications.header.action");
  const [isModalOpen, { open: openModal, close: closeModal }] =
    useDisclosure(false);

  return { t, isModalOpen, openModal, closeModal };
}
