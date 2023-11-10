import { FC } from "react";
import { useTranslations } from "next-intl";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ActionIcon,
  Button,
  Grid,
  GridCol,
  Group,
  Modal,
  Stack,
  Text,
  Title,
  rem,
} from "@mantine/core";
import { z } from "zod";
import { IconX } from "@tabler/icons-react";
import { FormTextInput } from "../base/text-input";

type Props = {
  opened: boolean;
  onClose: VoidFunction;
  onSubmit: SubmitHandler<ApplicationFormValues>;
};

export const ApplicationModal: FC<Props> = (props) => {
  const { t, opened, applicationForm, isSubmitting, onClose, onSubmit } =
    useApplicationModal(props);

  return (
    <Modal opened={opened} onClose={onClose} centered>
      <FormProvider {...applicationForm}>
        <form onSubmit={onSubmit}>
          <Stack gap={40}>
            <Group justify="space-between">
              <Title order={2} c="textPrimary.8">
                {t("title")}
              </Title>
              <ActionIcon variant="white" onClick={onClose} c="black">
                <IconX />
              </ActionIcon>
            </Group>
            <Grid gutter="sm">
              <GridCol span={5} mt="sm">
                <FormTextInput
                  name="firstName"
                  label={t("firstNameLabel")}
                  placeholder={t("firstNamePlaceholder")}
                />
              </GridCol>
              <GridCol span={5} mt="sm">
                <FormTextInput
                  name="lastName"
                  label={t("lastNameLabel")}
                  placeholder={t("lastNamePlaceholder")}
                />
              </GridCol>
              <GridCol span={2} mt="sm">
                <FormTextInput
                  name="country"
                  label={t("countryLabel")}
                  placeholder={t("countryLabel")}
                />
              </GridCol>
              <GridCol span={9} mt="sm">
                <FormTextInput
                  name="programAndCategoryName"
                  label={t("programAndCategoryLabel")}
                  placeholder={t("programAndCategoryLabel")}
                />
              </GridCol>
              <GridCol span={3} mt="sm">
                <FormTextInput
                  name="dateOfBirth"
                  label={t("dateOfBirthLabel")}
                  placeholder={t("dateOfBirthPlaceholder")}
                />
              </GridCol>
              <GridCol span={6} mt="sm">
                <FormTextInput
                  name="club"
                  label={t("clubLabel")}
                  placeholder={t("clubPlaceholder")}
                />
              </GridCol>
              <GridCol span={6} mt="sm">
                <FormTextInput
                  name="team"
                  label={t("teamLabel")}
                  placeholder={t("teamPlaceholder")}
                />
              </GridCol>
              <GridCol span={4} mt="sm">
                <FormTextInput
                  name="phone"
                  label={t("phoneLabel")}
                  placeholder={t("phonePlaceholder")}
                  leftSection={<Text size="xs">{t("phoneLeftSection")}</Text>}
                  styles={{
                    input: { paddingLeft: rem(36) },
                  }}
                />
              </GridCol>
            </Grid>
            <Group
              justify="flex-end"
              pt="md"
              className="application-modal__actions-block"
            >
              <Group gap="lg">
                <Text className="underline cursor-pointer" onClick={onClose}>
                  {t("cancelAction")}
                </Text>
                <Button type="submit" loading={isSubmitting}>
                  {t("saveAction")}
                </Button>
              </Group>
            </Group>
          </Stack>
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
      programAndCategoryName: "",
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
    isSubmitting,
    onClose: handleClose,
    onSubmit: handleSubmit(onSubmit),
  };
}

export type ApplicationFormValues = z.infer<typeof applicationSchema>;
const applicationSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  country: z.string().min(1),
  programAndCategoryName: z.string().min(1),
  dateOfBirth: z.string().min(1),
  club: z.string().optional(),
  teamName: z.string().optional(),
  phone: z.string().optional(),
});
