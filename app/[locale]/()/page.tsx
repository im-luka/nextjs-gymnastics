import axios from "axios";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { applicationsQuery } from "@/domain/queries/applications-query";
import { getQueryClient } from "@/domain/queries/server-query-client";
import { getAxiosData } from "@/domain/remote/response/data";
import { Wrapper } from "@/app/_components/applications/wrapper";

// TODO: Prefetch real data

export default async function HomePage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: applicationsQuery.key,
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(getAxiosData),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Wrapper />
    </HydrationBoundary>
  );
}
