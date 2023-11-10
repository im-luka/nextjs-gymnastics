import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { applicationsQuery } from "@/domain/queries/applications-query";
import { getQueryClient } from "@/domain/queries/server-query-client";
import { Wrapper } from "@/app/_components/applications/wrapper";
import { Application } from "@/types/application";
import db from "@/db.json";

type Props = {
  params: {
    locale: string;
  };
  searchParams: {
    [key: string]: string | undefined;
  };
};

// TODO: Prefetch real data
export default async function HomePage(props: Props) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: applicationsQuery.key,
    queryFn: () => db as Application[],
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Wrapper />
    </HydrationBoundary>
  );
}
