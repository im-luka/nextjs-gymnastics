import { FC } from "react";
import { useTranslations } from "next-intl";
import { TableTh, TableThead, TableTr } from "@mantine/core";

export const TableHead: FC = () => {
  const { t } = useTableHead();

  return (
    <TableThead>
      <TableTr>
        <TableTh>{t("name")}</TableTh>
        <TableTh>{t("discipline")}</TableTh>
        <TableTh>{t("program")}</TableTh>
        <TableTh>{t("category")}</TableTh>
        <TableTh>{t("team")}</TableTh>
        <TableTh>{t("statusLabel")}</TableTh>
        <TableTh>{t("date")}</TableTh>
        <TableTh></TableTh>
      </TableTr>
    </TableThead>
  );
};

function useTableHead() {
  const t = useTranslations("home.applications.table");

  return { t };
}
