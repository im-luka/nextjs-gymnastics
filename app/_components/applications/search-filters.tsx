import { Group, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { FC } from "react";

export const SearchFilters: FC = () => {
  return (
    <Group>
      <TextInput placeholder="Search gymnasts" leftSection={<IconSearch />} />
      <Group></Group>
    </Group>
  );
};
