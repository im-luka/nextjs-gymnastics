import { MantineThemeComponents, Text, Title } from "@mantine/core";

export const components: MantineThemeComponents = {
  Text: Text.extend({
    defaultProps: {
      c: "textPrimary.9",
    },
  }),
  Title: Title.extend({
    defaultProps: {
      c: "textPrimary.9",
    },
  }),
};
