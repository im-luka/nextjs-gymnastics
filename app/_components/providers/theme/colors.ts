import { MantineTheme, MantineColorsTuple } from "@mantine/core";

type ColorsType = { colors: Record<string, MantineColorsTuple> } & Pick<
  MantineTheme,
  "primaryColor" | "primaryShade" | "white" | "black"
>;

export const colors: ColorsType = {
  colors: {
    primary: [
      "#ffe7ed",
      "#ffced7",
      "#ff9bad",
      "#ff6380",
      "#ff365a",
      "#ff2b51",
      "#ff0234",
      "#e50028",
      "#cc0022",
      "#cd082b",
    ],
    primaryVariantJudge: [
      "#fff1e1",
      "#ffe2cb",
      "#ffc49a",
      "#ffa563",
      "#ff8a36",
      "#ff842b",
      "#ff7006",
      "#e45e00",
      "#cb5300",
      "#b14500",
    ],
    secondary: [
      "#f3f3fe",
      "#e6e5eb",
      "#d6d5dc",
      "#adabb8",
      "#9491a1",
      "#848194",
      "#7c798e",
      "#6a677c",
      "#5e5c70",
      "#514e65",
    ],
    tertiary: [
      "#f3f3fe",
      "#e6e5eb",
      "#cac9d1",
      "#adabb7",
      "#9492a1",
      "#848293",
      "#7c7a8d",
      "#6c6a7d",
      "#5e5c6f",
      "#504f64",
    ],
    bgPrimary: [
      "#f5f5f5",
      "#e7e7e7",
      "#cdcdcd",
      "#b2b2b2",
      "#9a9a9a",
      "#8b8b8b",
      "#848484",
      "#717171",
      "#656565",
      "#080a0f",
    ],
    bgSecondary: [
      "#f4f4fa",
      "#ebebed",
      "#cbcbcd",
      "#aeaeb2",
      "#95959b",
      "#c6c5cf",
      "#7e7e88",
      "#6c6c75",
      "#5f5f6a",
      "#222534",
    ],
    textPrimary: [
      "#f2f3f8",
      "#e2e4ea",
      "#c2c7d4",
      "#9ea8c0",
      "#818daf",
      "#6e7ca5",
      "#6474a1",
      "#54638d",
      "#38354d",
      "#080a0f",
    ],
    textSecondary: [
      "#eaf8f8",
      "#e4e7eb",
      "#cbcccf",
      "#afb0b4",
      "#97989b",
      "#b2b2b8",
      "#7f8188",
      "#72747b",
      "#72747e",
      "#505561",
    ],
  },
  primaryColor: "primary",
  primaryShade: 5,
  white: "#ffffff",
  black: "#000000",
};
