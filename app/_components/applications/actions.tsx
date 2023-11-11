"use client";

import { FC, useRef } from "react";
import { useTranslations } from "next-intl";
import { Button, Group, Indicator, Stack } from "@mantine/core";
import {
  ApplicationFormValues,
  ApplicationModal,
  ApplicationModalRef,
} from "../modals/application-modal";
import { useDisclosure } from "@mantine/hooks";
import { useMutation } from "@tanstack/react-query";
import { applicationMutation } from "@/domain/mutations/application-mutation";
import { ApplicationData } from "@/domain/types/application-data";
import { Status } from "@/types/application";
import { useNotificationSuccess } from "@/hooks/use-notification-success";

export const Actions: FC = () => {
  const {
    t,
    applicationModalRef,
    isModalOpen,
    openModal,
    closeModal,
    handleSubmit,
  } = useQueryActions();

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
        ref={applicationModalRef}
        opened={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
    </Stack>
  );
};

function useQueryActions() {
  const t = useTranslations("home.applications.header.action");
  const applicationModalRef = useRef<ApplicationModalRef>(null);
  const onSuccess = useNotificationSuccess("added");
  const [isModalOpen, { open: openModal, close: closeModal }] =
    useDisclosure(false);

  const { mutateAsync: addApplication } = useMutation({
    mutationFn: applicationMutation.fnc,
    onSuccess: () => {
      onSuccess();
      closeModal();
      applicationModalRef.current?.resetForm();
    },
  });

  const handleSubmit = async ({
    dateOfBirth,
    programAndCategoryName,
    ...restValues
  }: ApplicationFormValues) => {
    const [programName, categoryName] = programAndCategoryName.split(" - ");
    const data: ApplicationData = {
      ...restValues,
      programName,
      categoryName,
      dateOfBirth: dateOfBirth.toString(),
      date: new Date().toString(),
      status: Status.AwaitingResponse,
      discipline: "",
    };
    await addApplication(data);
  };

  return {
    t,
    applicationModalRef,
    isModalOpen,
    openModal,
    closeModal,
    handleSubmit,
  };
}
