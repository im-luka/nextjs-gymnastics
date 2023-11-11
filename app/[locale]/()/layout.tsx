import { ReactNode } from "react";
import { Box, Stack } from "@mantine/core";
import { Header } from "@/app/_components/header";

type Props = {
  children: ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return (
    <Stack h="100%">
      <Header />
      <main className="home-layout">
        <Box h="100%" className="flex-1">
          {children}
        </Box>
      </main>
    </Stack>
  );
}
