"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import { Button, Group, Indicator, Stack } from "@mantine/core";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { applicationsQuery } from "@/domain/queries/applications-query";
import { Application } from "@/types/application";
import db from "@/db.json";
import { ApplicationModal } from "../modals/application-modal";
import { useDisclosure } from "@mantine/hooks";

export const Actions: FC = () => {
  const { t, isModalOpen, openModal, closeModal, handleRefetch, handleClear } =
    useQueryActions();

  return (
    <Stack align="flex-end">
      <Group>
        <Button onClick={openModal}>{t("newApplication")}</Button>
        <Button
          c="black"
          bg="var(--mantine-color-bg-disabled)"
          leftSection={<Indicator color="green" />}
        >
          {t("open")}
        </Button>
      </Group>
      <Group gap={0}>
        <Button variant="subtle" size="compact-sm" onClick={handleRefetch}>
          {t("refetch")}
        </Button>
        <Button variant="subtle" size="compact-sm" onClick={handleClear}>
          {t("clear")}
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
  const qc = useQueryClient();
  const [isModalOpen, { open: openModal, close: closeModal }] =
    useDisclosure(false);

  const { refetch } = useQuery({
    queryKey: applicationsQuery.key,
    queryFn: () => db as Application[],
  });

  const handleRefetch = () => refetch();

  const handleClear = () => qc.setQueryData(applicationsQuery.key, () => []);

  return { t, isModalOpen, openModal, closeModal, handleRefetch, handleClear };
}
