import { FC, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  Box,
  Combobox,
  ComboboxDropdown,
  ComboboxOption,
  ComboboxOptions,
  ComboboxTarget,
  Group,
  Text,
  useCombobox,
} from "@mantine/core";
import { Application } from "@/types/application";
import { IconChevronDown } from "@tabler/icons-react";
import { uniq } from "lodash";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "@/navigation";
import { useTranslations } from "next-intl";
import { applicationsQuery } from "@/domain/queries/applications-query";

type Props = {
  type: keyof Pick<
    Application,
    "discipline" | "programName" | "categoryName" | "status"
  >;
};

export const Filter: FC<Props> = (props) => {
  const { t, type, selected, combobox, filterValues, handleOptionSubmit } =
    useFilter(props);

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={handleOptionSubmit}
      position="bottom-start"
    >
      <ComboboxTarget>
        <Box
          className="filter-target"
          onClick={() => combobox.toggleDropdown()}
        >
          <Text size="xs">{t(`value.${type}`)}</Text>
          <Group gap={4}>
            <Text size="xs">{selected || t("emptyPlaceholder")}</Text>
            <IconChevronDown size={16} />
          </Group>
        </Box>
      </ComboboxTarget>
      <ComboboxDropdown miw={225}>
        <ComboboxOptions>
          {filterValues.map((value) => (
            <ComboboxOption key={value} value={value}>
              {value}
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </ComboboxDropdown>
    </Combobox>
  );
};

function useFilter({ type }: Props) {
  const t = useTranslations("home.applications.filter");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [selected, setSelected] = useState(
    searchParams.get(type)?.toString() ?? ""
  );

  const combobox = useCombobox();

  const qc = useQueryClient();
  const applications = qc.getQueryData<Application[]>(applicationsQuery.key);

  const filterValues = uniq(
    applications?.map((application) => application[type])
  );

  const handleOptionSubmit = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (selected !== value) {
      params.set(type, value);
      setSelected(value);
    } else {
      params.delete(type);
      setSelected("");
    }
    replace(`${pathname}?${params.toString()}`);
    combobox.closeDropdown();
  };

  return { t, type, selected, combobox, filterValues, handleOptionSubmit };
}
