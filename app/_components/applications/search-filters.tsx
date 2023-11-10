import { FC, ChangeEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Group, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { usePathname, useRouter } from "@/navigation";
import { SEARCH_FILTER } from "@/types/filters";
import { Filter } from "./filter";
import { useTranslations } from "next-intl";

export const SearchFilters: FC = () => {
  const { t, handleSearch, defaultValue } = useSearchFilters();

  return (
    <Group>
      <TextInput
        placeholder={t("searchPlaceholder")}
        miw={225}
        leftSection={<IconSearch size={20} />}
        defaultValue={defaultValue}
        onChange={handleSearch}
      />
      <Group>
        <Filter type="discipline" />
        <Filter type="programName" />
        <Filter type="categoryName" />
        <Filter type="status" />
      </Group>
    </Group>
  );
};

function useSearchFilters() {
  const t = useTranslations("home.applications.filter");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(SEARCH_FILTER, value);
    } else {
      params.delete(SEARCH_FILTER);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const defaultValue = searchParams.get(SEARCH_FILTER)?.toString();

  return { t, handleSearch, defaultValue };
}
