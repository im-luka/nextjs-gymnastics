"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import { Stack, Text, Title } from "@mantine/core";
import { DataTable, DataTableColumn } from "mantine-datatable";
import { IconChevronDown, IconMoodEmpty } from "@tabler/icons-react";
import { Application } from "@/types/application";
import { formatDate } from "@/util/date";
import { StatusBadge } from "./status-badge";

type Props = {
  applications: Application[];
};

export const Table: FC<Props> = (props) => {
  const { t, applications, countMessage, columns } = useTable(props);

  return (
    <Stack gap={12}>
      <Title order={3}>{countMessage}</Title>
      <DataTable
        striped
        stripedColor="var(--mantine-color-table-row)"
        withTableBorder
        borderRadius="lg"
        records={applications}
        columns={columns}
        minHeight={!applications.length ? 250 : "auto"}
        emptyState={
          <Stack gap="sm" align="center">
            <IconMoodEmpty size={48} />
            <Text size="lg">{t("emptyPlaceholder")}</Text>
          </Stack>
        }
        rowExpansion={{
          allowMultiple: true,
          content: ({ record: { dateOfBirth, phone } }) => (
            <Stack w="100%" p="lg" align="center">
              <Stack gap={4}>
                <Text size="xs" c="textPrimary.8">
                  {t.rich("dateOfBirth", {
                    s: (chunk) => (
                      <Text span fw={700}>
                        {chunk}
                      </Text>
                    ),
                    value: formatDate(dateOfBirth, "withDateAndTime"),
                  })}
                </Text>
                <Text size="xs" c="textPrimary.8">
                  {t.rich("phoneNumber", {
                    s: (chunk) => (
                      <Text span fw={700}>
                        {chunk}
                      </Text>
                    ),
                    value: phone,
                  })}
                </Text>
              </Stack>
            </Stack>
          ),
        }}
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

  return { t, applications, countMessage, columns };
}
