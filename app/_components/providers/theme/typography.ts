import { Inter } from "next/font/google";
import { MantineTheme, rem } from "@mantine/core";

const baseFont = Inter({ subsets: ["latin"] });

const baseFontSize = 16;

const baseHeadingFontWeight = "700";

type TypographyProps = Pick<
  MantineTheme,
  "fontFamily" | "fontSizes" | "lineHeights" | "headings"
>;

export const typography: TypographyProps = {
  fontFamily: baseFont.style.fontFamily,
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(baseFontSize),
    lg: rem(18),
    xl: rem(18),
  },
  lineHeights: {
    xs: rem(16),
    sm: rem(16),
    md: rem(22),
    lg: rem(28),
    xl: rem(28),
  },
  headings: {
    fontFamily: baseFont.style.fontFamily,
    fontWeight: baseHeadingFontWeight,
    sizes: {
      h1: {
        fontSize: rem(32),
        lineHeight: rem(34),
      },
      h2: {
        fontSize: rem(22),
        lineHeight: rem(28),
      },
      h3: {
        fontSize: rem(18),
        lineHeight: rem(28),
      },
      h4: {
        fontSize: rem(16),
        lineHeight: rem(20),
        fontWeight: "600",
      },
      h5: {
        fontSize: rem(16),
        lineHeight: rem(20),
        fontWeight: "600",
      },
      h6: {
        fontSize: rem(16),
        lineHeight: rem(20),
        fontWeight: "600",
      },
    },
  },
};
