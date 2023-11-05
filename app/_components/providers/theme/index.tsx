import "@mantine/core/styles.css";
import { FC, ReactNode } from "react";
import { MantineProvider, createTheme } from "@mantine/core";

type Props = {
  children: ReactNode;
};

export const ThemeProvider: FC<Props> = ({ children }) => {
  return (
    <MantineProvider defaultColorScheme="light">{children}</MantineProvider>
  );
};
