import { useRef } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  ApplicationFormValues,
  ApplicationModalRef,
} from "@/app/_components/modals/application-modal";
import { useNotificationSuccess } from "./use-notification-success";
import { useMutation } from "@tanstack/react-query";
import { applicationMutation } from "@/domain/mutations/application-mutation";
import { ApplicationData } from "@/domain/types/application-data";
import { Status } from "@/types/application";

export const useApplicationModal = () => {
  const modalRef = useRef<ApplicationModalRef>(null);
  const [isOpen, { open, close }] = useDisclosure(false);
  const onSuccess = useNotificationSuccess("added");

  const { mutateAsync: addApplication } = useMutation({
    mutationFn: applicationMutation.fnc,
    onSuccess: () => {
      onSuccess();
      close();
      modalRef.current?.resetForm();
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
    await addApplication(data).catch(() => null);
  };

  return { modalRef, isOpen, open, close, handleSubmit };
};
