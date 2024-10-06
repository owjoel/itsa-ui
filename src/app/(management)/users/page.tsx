import { Space, Title } from "@mantine/core";
import { TableSort } from "./Table";

export default function Management() {
  return (
    <div className="p-10">
      <Title order={3}>User Management</Title>
      <Space h="md" />
      <TableSort />
    </div>
  );
}
