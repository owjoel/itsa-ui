import {
  Group,
  Paper,
  SimpleGrid,
  Space,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { IconArrowDownRight, IconArrowUpRight } from "@tabler/icons-react";
import classes from "./Stats.module.css";
import { Stats } from "./Stats";
import { DashboardTable } from "./Table";

export default function AdminDashboard() {
  return (
    <div className="p-10">
      <Title order={1}>Dashboard</Title>
      <Space h="xl" />
      <Stats />
      <Space h="xl" />
      <DashboardTable />
    </div>
  );
}
