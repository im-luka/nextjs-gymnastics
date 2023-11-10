"use client";

import { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { Application } from "@/types/application";
import { applicationsQuery } from "@/domain/queries/applications-query";
import { EmptyPlaceholder } from "./empty-placeholder";
import { Stack } from "@mantine/core";
import { SearchFilters } from "./search-filters";
import { Table } from "./table";
import db from "@/db.json";
import { useSearchParams } from "next/navigation";
import { filterWithParams } from "@/util/applications";

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
  const searchParams = useSearchParams();
  const filters = Object.fromEntries(searchParams.entries());

  // TODO: Fetch real API
  const { data: applications } = useQuery<Application[]>({
    queryKey: applicationsQuery.key,
    queryFn: () => db as Application[],
    select: filterWithParams(filters),
  });

  return { applications };
}
