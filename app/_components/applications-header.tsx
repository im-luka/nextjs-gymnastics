"use client";

import { FC } from "react";
import { Button, Group, Indicator, Title } from "@mantine/core";
import { useTranslations } from "next-intl";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/domain/remote";

export const ApplicationsHeader: FC = () => {
  const { t } = useApplicationHeader();

  const { mutateAsync } = useMutation({
    mutationFn: () =>
      api.post("https://jsonplaceholder.typicode.com/postssss").then(() => {
        throw new Error("error");
      }),
  });

  return (
    <Group
      pos="relative"
      p={40}
      justify="space-between"
      className="application-header"
    >
      <Title>{t("title")}</Title>
      <Group>
        <Button>{t("action.newApplication")}</Button>
        <Button
          c="black"
          bg="var(--mantine-color-bg-disabled)"
          leftSection={<Indicator color="green" />}
          onClick={async () => {
            const data = await mutateAsync();
            console.log(data);
          }}
        >
          {t("action.open")}
        </Button>
      </Group>
    </Group>
  );
};

function useApplicationHeader() {
  const t = useTranslations("home.applicationHeader");

  return { t };
}
