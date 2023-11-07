import { useTranslations } from "next-intl";
import { Box, TextInput, Title } from "@mantine/core";

export default function HomePage() {
  const t = useTranslations();

  return (
    <div>
      <Title order={2}>{t("appName")}</Title>
      <Box style={{ margin: "0 auto", width: "400px" }}>
        <TextInput placeholder="Enter name" label="Email" />
      </Box>
    </div>
  );
}
