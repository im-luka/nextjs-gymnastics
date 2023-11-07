import { useTranslations } from "next-intl";
import { Box } from "@mantine/core";
import { CONTENT_MAX_WIDTH } from "@/util/constants";

export default function HomePage() {
  const t = useTranslations();

  return (
    <Box maw={CONTENT_MAX_WIDTH} mx="auto">
      ovo je page
    </Box>
  );
}
