import { FC } from "react";
import { useTranslations } from "next-intl";
import { Badge, DefaultMantineColor } from "@mantine/core";
import { Status } from "@/types/application";
import { trimStatusValue } from "@/util/string";

type Props = {
  status: Status;
};

export const StatusBadge: FC<Props> = (props) => {
  const { statusLabel, statusColor, statusBackground } = useStatusBadge(props);

  return (
    <Badge px={6} fz={9} bg={statusBackground} c={statusColor} radius={2}>
      {statusLabel}
    </Badge>
  );
};

function useStatusBadge({ status }: Props) {
  const t = useTranslations("home.applications.table.status");

  const statusLabel = t(trimStatusValue(status));
  const statusColor: DefaultMantineColor =
    status === Status.Canceled ? "tertiary.7" : "white";
  const statusBackground: DefaultMantineColor = (() => {
    switch (status) {
      case Status.Applied:
        return "var(--mantine-color-success)";
      case Status.Declined:
        return "var(--mantine-color-alert)";
      case Status.AwaitingResponse:
        return "var(--mantine-color-warning)";
      default:
        return "var(--mantine-color-bg-secondary-ios)";
    }
  })();

  return { statusLabel, statusColor, statusBackground };
}
