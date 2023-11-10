import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { applicationsQuery } from "@/domain/queries/applications-query";
import { getQueryClient } from "@/domain/queries/server-query-client";
import { Wrapper } from "@/app/_components/applications/wrapper";

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
  await queryClient.prefetchQuery({ queryKey: applicationsQuery.key });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Wrapper />
    </HydrationBoundary>
  );
}
