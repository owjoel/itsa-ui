import { Space, Title } from "@mantine/core";
import { ClientTable } from "./ClientTable";

export default function Clients() {
  return (
    <div className="p-10">
      <Title order={1}>Clients</Title>
      <Space h="xl" />
      <ClientTable />
      <Space h="xl" />
    </div>
  );
}
