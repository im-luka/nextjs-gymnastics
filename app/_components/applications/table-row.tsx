import { FC } from "react";
import {
  DefaultMantineColor,
  Stack,
  TableTd,
  TableTr,
  Text,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { Application } from "@/types/application";
import { formatDate } from "@/util/date";
import { StatusBadge } from "./status-badge";

type StatusColors = {
  color: DefaultMantineColor;
  backgroundColor?: DefaultMantineColor;
};

type Props = {
  application: Application;
};

export const TableRow: FC<Props> = ({ application }) => {
  return (
    <TableTr>
      <TableTd>
        <Stack gap={2}>
          <Text size="sm">
            {application.firstName} {application.lastName}
          </Text>
          <Text size="xs" c="textSecondary.8">
            🇭🇷 {application.club}
          </Text>
        </Stack>
      </TableTd>
      <TableTd>
        <Text size="sm" c="textPrimary.8">
          {application.discipline}
        </Text>
      </TableTd>
      <TableTd>
        <Text size="sm" c="textPrimary.8">
          {application.programName}
        </Text>
      </TableTd>
      <TableTd>
        <Text size="sm" c="textPrimary.8">
          {application.categoryName}
        </Text>
      </TableTd>
      <TableTd>
        <Text size="sm" c="textPrimary.8">
          {application.teamName}
        </Text>
      </TableTd>
      <TableTd>
        <StatusBadge status={application.status} />
      </TableTd>
      <TableTd>
        <Text size="xs" c="textPrimary.8">
          {formatDate(application.date, "withDateAndTime")}
        </Text>
      </TableTd>
      <TableTd>
        <IconChevronDown size={16} />
      </TableTd>
    </TableTr>
  );
};
