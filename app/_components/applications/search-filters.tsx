import { ChangeEvent, FC } from "react";
import { Group, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { Filter } from "./filter";

export const SearchFilters: FC = () => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <Group>
      <TextInput
        placeholder="Search gymnasts"
        miw={225}
        leftSection={<IconSearch size={20} />}
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
