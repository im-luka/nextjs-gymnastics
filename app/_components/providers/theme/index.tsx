"use client";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@/styles/index.css";
import { FC, ReactNode } from "react";
import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { colors } from "./colors";
import { typography } from "./typography";
import { spacing } from "./spacing";
import { components } from "./components";
import { other, resolver } from "./other";

type Props = {
  children: ReactNode;
};

const theme = createTheme({
  ...colors,
  ...typography,
  spacing,
  components,
  other,
});

export const ThemeProvider: FC<Props> = ({ children }) => {
  return (
    <MantineProvider
      theme={theme}
      cssVariablesResolver={resolver}
      defaultColorScheme="light"
    >
      <Notifications
        position="top-right"
        limit={3}
        containerWidth={250}
        transitionDuration={500}
      />
      {children}
    </MantineProvider>
  );
};
