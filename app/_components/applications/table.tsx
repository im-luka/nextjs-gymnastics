import { FC } from "react";
import { Table as MantineTable, Stack, TableTbody, Title } from "@mantine/core";
import { Application } from "@/types/application";
import { TableHead } from "./table-head";
import { TableRow } from "./table-row";
import { useTranslations } from "next-intl";

type Props = {
  applications: Application[];
};

export const Table: FC<Props> = (props) => {
  const { applications, countMessage } = useTable(props);

  const renderRow = (application: Application) => (
    <TableRow key={application.id} application={application} />
  );

  return (
    <Stack gap={12}>
      <Title order={3}>{countMessage}</Title>
      <MantineTable>
        <TableHead />
        <TableTbody>{applications.map(renderRow)}</TableTbody>
      </MantineTable>
    </Stack>
  );
};

function useTable({ applications }: Props) {
  const t = useTranslations("home.applications.table");
  const countMessage = t("requestsCount", { count: applications.length });

  return { applications, countMessage };
}
