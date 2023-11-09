"use client";

import { FC } from "react";
import { Stack, Text, Title } from "@mantine/core";
import { DataTable, DataTableColumn } from "mantine-datatable";
import { Application } from "@/types/application";
import { useTranslations } from "next-intl";
import { StatusBadge } from "./status-badge";
import { formatDate } from "@/util/date";
import { IconChevronDown } from "@tabler/icons-react";

type Props = {
  applications: Application[];
};

export const Table: FC<Props> = (props) => {
  const { applications, countMessage, columns } = useTable(props);

  return (
    <Stack gap={12}>
      <Title order={3}>{countMessage}</Title>
      <DataTable
        striped
        stripedColor="var(--mantine-color-table-row)"
        withTableBorder
        borderRadius="lg"
        highlightOnHover
        records={applications}
        columns={columns}
        // execute this callback when a row is clicked
        // onRowClick={({ record: { name, party, bornIn } }) =>
        //   showNotification({
        //     title: `Clicked on ${name}`,
        //     message: `You clicked on ${name}, a ${party.toLowerCase()} president born in ${bornIn}`,
        //     withBorder: true,
        //   })
        // }
      />
    </Stack>
  );
};

function useTable({ applications }: Props) {
  const t = useTranslations("home.applications.table");

  const countMessage = t("requestsCount", { count: applications.length });

  const columns: DataTableColumn<Application>[] = [
    {
      accessor: "name",
      title: t("name"),
      render: ({ firstName, lastName, club }) => (
        <Stack gap={2}>
          <Text size="sm">
            {firstName} {lastName}
          </Text>
          <Text size="xs" c="textSecondary.8">
            🇭🇷 {club}
          </Text>
        </Stack>
      ),
    },
    {
      accessor: "discipline",
      title: t("discipline"),
      render: ({ discipline }) => (
        <Text size="sm" c="textPrimary.8">
          {discipline}
        </Text>
      ),
    },
    {
      accessor: "programName",
      title: t("program"),
      render: ({ programName }) => (
        <Text size="sm" c="textPrimary.8">
          {programName}
        </Text>
      ),
    },
    {
      accessor: "categoryName",
      title: t("category"),
      render: ({ categoryName }) => (
        <Text size="sm" c="textPrimary.8">
          {categoryName}
        </Text>
      ),
    },
    {
      accessor: "teamName",
      title: t("team"),
      render: ({ teamName }) => (
        <Text size="sm" c="textPrimary.8">
          {teamName}
        </Text>
      ),
    },
    {
      accessor: "status",
      title: t("statusLabel"),
      render: ({ status }) => <StatusBadge status={status} />,
    },
    {
      accessor: "date",
      title: t("date"),
      render: ({ date }) => (
        <Text size="xs" c="textPrimary.8">
          {formatDate(date, "withDateAndTime")}
        </Text>
      ),
    },
    {
      accessor: "",
      render: () => <IconChevronDown size={16} />,
    },
  ];

  return { applications, countMessage, columns };
}
