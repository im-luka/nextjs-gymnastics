import {
  Button,
  MantineThemeComponents,
  Table,
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
  Table: Table.extend({
    defaultProps: {
      withRowBorders: false,
      verticalSpacing: "sm",
      horizontalSpacing: "lg",
    },
    styles: {
      th: {
        paddingBlock: "var(--mantine-spacing-md)",
        color: "var(--mantine-color-textPrimary-8)",
        backgroundColor: "var(--mantine-color-table-header)",
      },
    },
  }),
};
