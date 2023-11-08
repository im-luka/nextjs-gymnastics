"use client";

import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { Application } from "@/types/application";
import { applicationsQuery } from "@/domain/queries/applications-query";
import axios from "axios";
import { getAxiosData } from "@/domain/remote/response/data";
import { EmptyPlaceholder } from "./empty-placeholder";
import { Stack, Title } from "@mantine/core";

export const Wrapper: FC = () => {
  const { applications } = useApplicationsWrapper();

  if (!applications?.length) {
    return <EmptyPlaceholder />;
  }

  return (
    <Stack h="100%" style={{ border: "2px solid yellow" }}>
      <Title>VELIKI TITLE</Title>
    </Stack>
  );
};

function useApplicationsWrapper() {
  // TODO: Fetch real API
  const { data: applications, isLoading } = useQuery<Application[]>({
    queryKey: applicationsQuery.key,
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(getAxiosData),
  });
  console.log(applications);
  console.log(isLoading);

  return { applications: [] };
}
