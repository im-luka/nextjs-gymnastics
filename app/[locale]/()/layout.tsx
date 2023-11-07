import { Header } from "@/app/_components/header";
import { CONTAINER_MAX_WIDTH } from "@/util/constants";
import { Box, Stack } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return (
    <Stack h="100%">
      <Header />
      <Box
        component="main"
        w="100%"
        maw={CONTAINER_MAX_WIDTH}
        mx="auto"
        className="flex-1"
      >
        {children}
      </Box>
    </Stack>
  );
}
