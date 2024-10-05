import { ActionIcon, Menu, rem, useMantineTheme } from "@mantine/core";
import {
  IconChevronDown,
  IconDotsVertical,
  IconPencil,
  IconTrash,
} from "@tabler/icons-react";

export function ActionButton() {
  const theme = useMantineTheme()
  
  return (
    <Menu
      transitionProps={{ transition: "pop" }}
      position="bottom-end"
      withinPortal
    >
      <Menu.Target>
        <ActionIcon variant="subtle" size={36}>
          <IconDotsVertical
            style={{ width: rem(16), height: rem(16) }}
            stroke={1.5}
          />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          leftSection={
            <IconPencil
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
              color={theme.colors.blue[5]}
            />
          }
        >
          Edit
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconTrash
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
              color={theme.colors.blue[5]}
            />
          }
        >
          Delete
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
