"use client";

import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { Application } from "@/types/application";
import { applicationsQuery } from "@/domain/queries/applications-query";
import axios from "axios";
import { getAxiosData } from "@/domain/remote/response/data";
import { EmptyPlaceholder } from "./empty-placeholder";
import { Stack } from "@mantine/core";
import { SearchFilters } from "./search-filters";
import { Table } from "./table";
import db from "@/db.json";

export const Wrapper: FC = () => {
  const { applications } = useApplicationsWrapper();

  if (!applications?.length) {
    return <EmptyPlaceholder />;
  }

  return (
    <Stack h="100%" gap="lg">
      <SearchFilters />
      <Table applications={applications} />
    </Stack>
  );
};

function useApplicationsWrapper() {
  // TODO: Fetch real API
  const { data, isLoading } = useQuery<Application[]>({
    queryKey: applicationsQuery.key,
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(getAxiosData),
  });

  const applications = db as Application[];

  return { applications };
}
