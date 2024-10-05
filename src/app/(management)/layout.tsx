import { ReactNode } from "react";
import { Navbar } from "./NavBar";
import { Flex } from "@mantine/core";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <main className="h-full">
      <Flex>
        <Navbar />
        {children}
      </Flex>
    </main>
  );
}
