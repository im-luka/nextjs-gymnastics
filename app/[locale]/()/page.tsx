import Image from "next/image";
import { Button, Stack, Text, Title } from "@mantine/core";
import { ApplicationsHeader } from "@/app/_components/applications-header";
import { CONTAINER_MAX_WIDTH } from "@/util/constants";
import ghostIcon from "@/public/images/ghost.svg";

export default function HomePage() {
  return (
    <Stack h="100%" maw={CONTAINER_MAX_WIDTH} mx="auto">
      <ApplicationsHeader />
      <Stack h="100%" justify="center" align="center" gap={20}>
        <Image
          src={ghostIcon}
          width={80}
          height={80}
          alt="no applications placeholder"
        />
        <Stack gap={10} align="center">
          <Title order={3}>No applications yet</Title>
          <Text c="textSecondary.7">
            List of your requests will appear here when you add gymnasts.
          </Text>
        </Stack>
        <Button size="sm" bg="primaryVariantJudge.5">
          Apply gymnasts
        </Button>
      </Stack>
    </Stack>
  );
}
