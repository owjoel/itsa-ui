import {
  Space,
  Title,
} from "@mantine/core";
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