import { CSSVariablesResolver, MantineThemeOther } from "@mantine/core";

export const other: MantineThemeOther = {
  colorAlert: "#ea1a40",
  colorSuccess: "#27c200",
  colorWarning: "#ffb800",
  colorOnline: "#41de1a",
  colorUserAvatar: "#8ddef0",
  colorBgMe: "#13151d",
  colorBgWidgets: "#13151d",
  colorBgError: "#ffebef",
  colorBgUpload: "#d0f7c6",
  colorBgSuccess: "#eefdea",
  colorDividerDark: "#38354d",
  colorDividerMedium: "#d6d5dc",
};

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    "--mantine-color-alert": theme.other.colorAlert,
    "--mantine-color-success": theme.other.colorSuccess,
    "--mantine-color-warning": theme.other.colorWarning,
    "--mantine-color-online": theme.other.colorOnline,
    "--mantine-color-user-avatar": theme.other.colorUserAvatar,
    "--mantine-color-bg-me": theme.other.colorBgMe,
    "--mantine-color-bg-widgets": theme.other.colorBgWidgets,
    "--mantine-color-bg-error": theme.other.colorBgError,
    "--mantine-color-bg-upload": theme.other.colorBgUpload,
    "--mantine-color-bg-success": theme.other.colorBgSuccess,
    "--mantine-color-divider-dark": theme.other.colorDividerDark,
    "--mantine-color-divider-medium": theme.other.colorDividerMedium,
  },
  dark: {},
  light: {},
});
