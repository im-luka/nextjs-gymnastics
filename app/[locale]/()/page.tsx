import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { applicationsQuery } from "@/domain/queries/applications-query";
import { getQueryClient } from "@/domain/queries/server-query-client";
import { Wrapper } from "@/app/_components/applications/wrapper";
import { countriesQuery } from "@/domain/queries/countries-query";
import { Header } from "@/app/_components/applications/header";
import { Stack } from "@mantine/core";

type Props = {
  params: {
    locale: string;
  };
  searchParams: {
    [key: string]: string | undefined;
  };
};

export default async function HomePage(props: Props) {
  const queryClient = getQueryClient();
  await Promise.all([
    queryClient.prefetchQuery({ queryKey: applicationsQuery.key }),
    queryClient.prefetchQuery({ queryKey: countriesQuery.key }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Stack h="100%" gap={40} justify="center">
        <Header />
        <Wrapper />
      </Stack>
    </HydrationBoundary>
  );
}
