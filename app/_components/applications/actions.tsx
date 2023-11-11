"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import { Button, Group, Indicator, Stack } from "@mantine/core";
import {
  ApplicationFormValues,
  ApplicationModal,
} from "../modals/application-modal";
import { useDisclosure } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import { countriesQuery } from "@/domain/queries/countries-query";
import { Country } from "@/types/country";

export const Actions: FC = () => {
  const { t, isModalOpen, countries, openModal, closeModal, handleSubmit } =
    useQueryActions();

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
        onSubmit={handleSubmit}
        countries={countries ?? []}
      />
    </Stack>
  );
};

function useQueryActions() {
  const t = useTranslations("home.applications.header.action");
  const [isModalOpen, { open: openModal, close: closeModal }] =
    useDisclosure(false);

  const { data: countries } = useQuery<Country[]>({
    queryKey: countriesQuery.key,
  });

  const handleSubmit = async (values: ApplicationFormValues) => {
    await console.log(values);
  };

  return { t, isModalOpen, countries, openModal, closeModal, handleSubmit };
}
