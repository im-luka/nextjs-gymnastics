import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { FC, ReactNode } from "react";
import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

type Props = {
  children: ReactNode;
};

export const ThemeProvider: FC<Props> = ({ children }) => {
  return (
    <MantineProvider defaultColorScheme="light">
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
