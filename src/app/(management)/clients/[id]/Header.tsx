import { Box, Button, Group, Paper, rem, Text } from "@mantine/core";
import { IconAt, IconEdit, IconPhoneCall } from "@tabler/icons-react";
import classes from "./ClientProfile.module.css";

export function Header() {
  return (
    <Paper p="md" withBorder radius="md">
      <Group flex="row" wrap="nowrap">
        {/* <Avatar
            src="https://cposkitt.github.io/images/chris_new.jpg"
            size={94}
            radius="md"
          /> */}
        <Box style={{ flexGrow: 1 }}>
          {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
              Software engineer
            </Text> */}

          <Text fz="lg" fw={500} className={classes.name}>
            Chris Poskitt
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              c.poskitt@mufintech.com
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs" c="dimmed">
              +65 8432 5746
            </Text>
          </Group>
        </Box>
        <Box>
          <Button
            leftSection={
              <IconEdit style={{ width: rem(16), height: rem(16) }} />
            }
          >
            Edit
          </Button>
        </Box>
      </Group>
    </Paper>
  );
}
