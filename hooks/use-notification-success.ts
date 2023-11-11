import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { createElement } from "react";

export const useNotificationSuccess = (key: string) => {
  const t = useTranslations("notification.success");

  return () =>
    notifications.show({
      message: t(key),
      color: "green",
      icon: createElement(IconCheck),
      withBorder: true,
    });
};
