import { Header } from "@/app/_components/header";
import { Stack } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return (
    <Stack h="100%">
      <Header />
      <main className="flex-1">{children}</main>
    </Stack>
  );
}
