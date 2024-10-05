import { ReactNode } from "react";
import { Navbar } from "./NavBar";
import { Flex } from "@mantine/core";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <main className="h-full">
      <Flex>
        <Navbar />
        <div style={{ width: '100%', overflowX: 'auto' }}>
          {children}
        </div>
      </Flex>

    </main>
  );
}
