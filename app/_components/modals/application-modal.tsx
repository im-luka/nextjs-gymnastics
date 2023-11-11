import { FC, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
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
import { IconChevronDown, IconX } from "@tabler/icons-react";
import { FormTextInput } from "../base/text-input";
import { Country } from "@/types/country";
import { FormAutocomplete } from "../base/autocomplete";
import { FormDateInput } from "../base/date-input";
import { useQuery } from "@tanstack/react-query";
import { countriesQuery } from "@/domain/queries/countries-query";
import { Application } from "@/types/application";
import { applicationsQuery } from "@/domain/queries/applications-query";
import { flatMap, map } from "lodash";
import { extractProgramsAndCategories } from "@/util/applications";
import { getCountryCode, getCountryPhoneCode } from "@/util/countries";

type AutocompleteOption = {
  label: string;
  value: string;
};

type Props = {
  opened: boolean;
  onClose: VoidFunction;
  onSubmit: SubmitHandler<ApplicationFormValues>;
};

export const ApplicationModal: FC<Props> = (props) => {
  const {
    t,
    opened,
    applicationForm,
    isSubmitting,
    phonePlaceholder,
    programAndCategoryOptions,
    countryOptions,
    handleCountryChange,
    onClose,
    onSubmit,
  } = useApplicationModal(props);

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
            <Grid gutter="sm" columns={16}>
              <GridCol span={6} mt="sm">
                <FormTextInput
                  name="firstName"
                  label={t("firstNameLabel")}
                  placeholder={t("firstNamePlaceholder")}
                />
              </GridCol>
              <GridCol span={6} mt="sm">
                <FormTextInput
                  name="lastName"
                  label={t("lastNameLabel")}
                  placeholder={t("lastNamePlaceholder")}
                />
              </GridCol>
              <GridCol span={4} mt="sm">
                <Controller
                  name="country"
                  render={({ field }) => (
                    <FormAutocomplete
                      name="country"
                      label={t("countryLabel")}
                      placeholder={t("countryLabel")}
                      data={countryOptions}
                      rightSection={<IconChevronDown size={16} />}
                      onChange={(label) => {
                        field.onChange(label);
                        handleCountryChange(label);
                      }}
                    />
                  )}
                />
              </GridCol>
              <GridCol span={11} mt="sm">
                <FormAutocomplete
                  name="programAndCategoryName"
                  label={t("programAndCategoryLabel")}
                  placeholder={t("programAndCategoryLabel")}
                  data={programAndCategoryOptions}
                  rightSection={<IconChevronDown size={16} />}
                />
              </GridCol>
              <GridCol span={5} mt="sm">
                <FormDateInput
                  name="dateOfBirth"
                  label={t("dateOfBirthLabel")}
                  placeholder={t("dateOfBirthPlaceholder")}
                />
              </GridCol>
              <GridCol span={8} mt="sm">
                <FormTextInput
                  name="club"
                  label={t("clubLabel")}
                  placeholder={t("clubPlaceholder")}
                />
              </GridCol>
              <GridCol span={8} mt="sm">
                <FormTextInput
                  name="teamName"
                  label={t("teamLabel")}
                  placeholder={t("teamPlaceholder")}
                />
              </GridCol>
              <GridCol span={6} mt="sm">
                <FormTextInput
                  name="phone"
                  label={t("phoneLabel")}
                  placeholder={t("phonePlaceholder")}
                  leftSection={<Text size="xs">{phonePlaceholder}</Text>}
                  styles={{
                    input: {
                      paddingLeft: phonePlaceholder ? rem(40) : rem(12),
                    },
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
  const [phonePlaceholder, setPhonePlaceholder] = useState("");

  const { data: applications } = useQuery<Application[]>({
    queryKey: applicationsQuery.key,
  });
  const { data: countries } = useQuery<Country[]>({
    queryKey: countriesQuery.key,
  });

  const tValidation = useTranslations("validation");
  const applicationForm = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema(tValidation("required"))),
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
      programAndCategoryName: "",
      dateOfBirth: undefined,
      club: "",
      teamName: "",
      phone: "",
    },
  });
  const {
    handleSubmit: formHandleSubmit,
    clearErrors,
    formState: { isSubmitting },
  } = applicationForm;

  const programAndCategoryOptions: AutocompleteOption[] = (() => {
    const [programs, categories] = extractProgramsAndCategories(
      applications ?? []
    );
    return flatMap(programs, (program) =>
      map(categories, (category) => ({
        label: `${program} - ${category}`,
        value: `${program} - ${category}`,
      }))
    );
  })();

  const countryOptions: AutocompleteOption[] =
    countries?.map(({ code, flag, name }) => ({
      value: code,
      label: `${flag} ${name}`,
    })) ?? [];

  const handleCountryChange = (label: string) => {
    setPhonePlaceholder(
      label
        ? t("phoneLeftSection", {
            phone: getCountryPhoneCode(countries, label),
          })
        : ""
    );
  };

  const handleClose = () => {
    onClose();
    clearErrors();
  };

  const handleSubmit = async ({
    country,
    ...values
  }: ApplicationFormValues) => {
    await onSubmit({ ...values, country: getCountryCode(countries, country) });
  };

  return {
    t,
    opened,
    applicationForm,
    isSubmitting,
    phonePlaceholder,
    programAndCategoryOptions,
    countryOptions,
    handleCountryChange,
    onClose: handleClose,
    onSubmit: formHandleSubmit(handleSubmit),
  };
}

export type ApplicationFormValues = z.infer<
  ReturnType<typeof applicationSchema>
>;
const applicationSchema = (requiredMsg: string) =>
  z.object({
    firstName: z.string().min(1, requiredMsg),
    lastName: z.string().min(1, requiredMsg),
    country: z.string().min(1, requiredMsg),
    programAndCategoryName: z.string().min(1, requiredMsg),
    dateOfBirth: z.date(),
    club: z.string(),
    teamName: z.string(),
    phone: z.string(),
  });
