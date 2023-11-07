import { FC, ReactNode } from "react";
import { ThemeProvider } from "./theme";

type Props = {
  children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
