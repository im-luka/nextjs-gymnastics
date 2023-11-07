import { FC } from "react";
import {
  Group,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Text,
  UnstyledButton,
} from "@mantine/core";
import avatar from "@/public/images/user-avatar.gif";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  TablerIconsProps,
  IconSettings,
  IconUser,
  IconLogout,
} from "@tabler/icons-react";

type MenuAction = {
  icon: (props: TablerIconsProps) => JSX.Element;
  label: string;
};

export const UserMenu: FC = () => {
  const { t, menuActions } = useUserMenu();

  const renderMenuAction = (
    { icon: Icon, label }: MenuAction,
    index: number
  ) => (
    <MenuItem key={index} leftSection={<Icon size={24} />}>
      {label}
    </MenuItem>
  );

  return (
    <Menu position="bottom-end">
      <MenuTarget>
        <UnstyledButton className="user-menu">
          <Group>
            <Image
              src={avatar}
              width={48}
              height={48}
              alt={t("header.menu.userAlt")}
              className="user-menu__avatar"
            />
            <Text size="sm">{t("header.menu.user")}</Text>
          </Group>
        </UnstyledButton>
      </MenuTarget>
      <MenuDropdown p="xs">{menuActions.map(renderMenuAction)}</MenuDropdown>
    </Menu>
  );
};

function useUserMenu() {
  const t = useTranslations();

  const menuActions: MenuAction[] = [
    { icon: IconUser, label: t("header.menu.profile") },
    { icon: IconSettings, label: t("header.menu.settings") },
    { icon: IconLogout, label: t("header.menu.logout") },
  ];

  return { t, menuActions };
}
