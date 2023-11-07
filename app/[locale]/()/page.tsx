import { Box } from "@mantine/core";
import { ApplicationsHeader } from "@/app/_components/applications-header";
import { CONTAINER_MAX_WIDTH } from "@/util/constants";

export default function HomePage() {
  return (
    <Box maw={CONTAINER_MAX_WIDTH} mx="auto">
      <ApplicationsHeader />
    </Box>
  );
}
