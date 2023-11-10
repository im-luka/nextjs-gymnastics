"use client";

import { FC } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Application } from "@/types/application";
import { applicationsQuery } from "@/domain/queries/applications-query";
import { EmptyPlaceholder } from "./empty-placeholder";
import { Stack } from "@mantine/core";
import { SearchFilters } from "./search-filters";
import { Table } from "./table";
import { useSearchParams } from "next/navigation";
import { filterWithParams } from "@/util/applications";
import { isEmpty } from "lodash";
import { Filters } from "@/types/filters";

export const Wrapper: FC = () => {
  const { applications, handleRefetch, showEmptyPlaceholder } =
    useApplicationsWrapper();

  if (showEmptyPlaceholder) {
    return <EmptyPlaceholder refetchQuery={handleRefetch} />;
  }

  return (
    <Stack h="100%" gap="lg">
      <SearchFilters />
      <Table applications={applications ?? []} />
    </Stack>
  );
};

function useApplicationsWrapper() {
  const qc = useQueryClient();
  const searchParams = useSearchParams();
  const paramsFilters: Partial<Record<Filters, string>> = Object.fromEntries(
    searchParams.entries()
  );

  const { data: applications, refetch } = useQuery<Application[]>({
    queryKey: applicationsQuery.key,
    select: filterWithParams(paramsFilters),
  });

  const handleRefetch = () => {
    refetch();
  };

  const showEmptyPlaceholder = !applications?.length && isEmpty(paramsFilters);

  return { applications, handleRefetch, showEmptyPlaceholder };
}
