import { FC, ChangeEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Button, Group, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { usePathname, useRouter } from "@/navigation";
import { SEARCH_FILTER } from "@/types/filters";
import { Filter } from "./filter";
import { useTranslations } from "next-intl";
import { debounce } from "lodash";

type Props = {
  clearQuery: VoidFunction;
};

export const SearchFilters: FC<Props> = (props) => {
  const { t, clearQuery, handleSearch, defaultValue } = useSearchFilters(props);

  return (
    <Group justify="space-between">
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
      <Button variant="subtle" size="compact-sm" onClick={clearQuery}>
        {t("delete")}
      </Button>
    </Group>
  );
};

function useSearchFilters({ clearQuery }: Props) {
  const t = useTranslations("home.applications.filter");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = debounce((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(SEARCH_FILTER, value);
    } else {
      params.delete(SEARCH_FILTER);
    }
    replace(`${pathname}?${params.toString()}`);
  }, 200);

  const defaultValue = searchParams.get(SEARCH_FILTER)?.toString();

  return { t, clearQuery, handleSearch, defaultValue };
}
