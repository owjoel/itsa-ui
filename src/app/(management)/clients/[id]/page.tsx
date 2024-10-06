import {
  Flex,
  Space,
  Title,
} from "@mantine/core";
import {Header} from "./Header";
import {Timeline} from "./Timeline";
import { Edit } from "./Edit";

export default function ClientProfile({ params }: { params: { id: string } }) {
  console.log(params.id);
  return (
    <div className="p-10">
      <Title order={2}>Profile</Title>
      <Space h="md" />
      <Header />
      <Space h="md" />

      <Flex style={{ height: '800px' }}>
        <Edit/>
        <Timeline />
      </Flex>
    </div>
  );
}
