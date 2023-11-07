import {
  Button,
  MantineThemeComponents,
  Text,
  TextInput,
  Title,
  rem,
} from "@mantine/core";

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
  TextInput: TextInput.extend({
    classNames: {
      input: "text-input",
    },
  }),
  Button: Button.extend({
    defaultProps: {
      radius: rem(6),
      size: "md",
    },
    styles: {
      inner: {
        gap: rem(6),
      },
    },
  }),
};
