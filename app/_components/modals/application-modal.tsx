import { FC } from "react";
import { useTranslations } from "next-intl";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal, Title } from "@mantine/core";
import { z } from "zod";

type Props = {
  opened: boolean;
  onClose: VoidFunction;
  onSubmit: SubmitHandler<ApplicationFormValues>;
};

export const ApplicationModal: FC<Props> = (props) => {
  const { t, opened, applicationForm, onClose, onSubmit } =
    useApplicationModal(props);

  return (
    <Modal opened={opened} onClose={onClose} centered>
      <FormProvider {...applicationForm}>
        <form onSubmit={onSubmit}>
          <Title>{t("title")}</Title>
        </form>
      </FormProvider>
    </Modal>
  );
};

function useApplicationModal({ opened, onClose, onSubmit }: Props) {
  const t = useTranslations("modal.application");

  const applicationForm = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
      programName: "",
      categoryName: "",
      dateOfBirth: "",
      club: undefined,
      teamName: undefined,
      phone: undefined,
    },
  });
  const {
    handleSubmit,
    clearErrors,
    formState: { isSubmitting },
  } = applicationForm;

  const handleClose = () => {
    onClose();
    clearErrors();
  };

  return {
    t,
    opened,
    applicationForm,
    onClose: handleClose,
    onSubmit: handleSubmit(onSubmit),
  };
}

export type ApplicationFormValues = z.infer<typeof applicationSchema>;
const applicationSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  country: z.string().min(1),
  programName: z.string().min(1),
  categoryName: z.string().min(1),
  dateOfBirth: z.string().datetime().min(1),
  club: z.string(),
  teamName: z.string(),
  phone: z.string(),
});
