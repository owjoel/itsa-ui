"use client";

import { useState } from "react";
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  rem,
  keys,
  Badge,
} from "@mantine/core";
import {
  IconSelector,
  IconChevronDown,
  IconChevronUp,
  IconSearch,
} from "@tabler/icons-react";
import classes from "./DashboardTable.module.css";

interface RowData {
  date: string;
  caseID: string;
  userID: string;
  action: string;
  status: string;
}

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const Icon = sorted
    ? reversed
      ? IconChevronUp
      : IconChevronDown
    : IconSelector;
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
  );
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}

const data = [
  {
    date: "01-01-2023 12:30",
    caseID: "C123456",
    userID: "A1B2C3",
    action: "Created a Client Account",
    status: "Success",
  },
  {
    date: "02-01-2023 14:45",
    caseID: "X789012",
    userID: "D4E5F6",
    action: "Updated Client Details",
    status: "Pending",
  },
  {
    date: "03-01-2023 09:15",
    caseID: "Z345678",
    userID: "G7H8I9",
    action: "Deleted Account",
    status: "Failed",
  },
  {
    date: "04-01-2023 16:20",
    caseID: "Q234567",
    userID: "J1K2L3",
    action: "Retrieved Client Details",
    status: "Active",
  },
  {
    date: "05-01-2023 10:10",
    caseID: "L987654",
    userID: "M4N5O6",
    action: "Created a Client Account",
    status: "Success",
  },
  {
    date: "06-01-2023 11:50",
    caseID: "H321890",
    userID: "P7Q8R9",
    action: "Updated Client Details",
    status: "Pending",
  },
  {
    date: "07-01-2023 15:30",
    caseID: "Y456123",
    userID: "S1T2U3",
    action: "Deleted Account",
    status: "Failed",
  },
  {
    date: "08-01-2023 13:25",
    caseID: "J789456",
    userID: "V4W5X6",
    action: "Retrieved Client Details",
    status: "Active",
  },
  {
    date: "09-01-2023 17:05",
    caseID: "F321654",
    userID: "Y7Z8A1",
    action: "Created a Client Account",
    status: "Success",
  },
  {
    date: "10-01-2023 08:40",
    caseID: "R654321",
    userID: "B2C3D4",
    action: "Updated Client Details",
    status: "Pending",
  },
  {
    date: "11-01-2023 09:55",
    caseID: "A123890",
    userID: "E5F6G7",
    action: "Deleted Account",
    status: "Failed",
  },
  {
    date: "12-01-2023 14:15",
    caseID: "M456123",
    userID: "H8I9J1",
    action: "Retrieved Client Details",
    status: "Active",
  },
  {
    date: "13-01-2023 11:30",
    caseID: "N789654",
    userID: "K2L3M4",
    action: "Created a Client Account",
    status: "Success",
  },
  {
    date: "14-01-2023 10:00",
    caseID: "O987123",
    userID: "N5O6P7",
    action: "Updated Client Details",
    status: "Pending",
  },
  {
    date: "15-01-2023 12:45",
    caseID: "B654321",
    userID: "Q8R9S1",
    action: "Deleted Account",
    status: "Failed",
  },
  {
    date: "16-01-2023 13:10",
    caseID: "T321456",
    userID: "T2U3V4",
    action: "Retrieved Client Details",
    status: "Active",
  },
  {
    date: "17-01-2023 14:35",
    caseID: "U987654",
    userID: "W5X6Y7",
    action: "Created a Client Account",
    status: "Success",
  },
  {
    date: "18-01-2023 15:50",
    caseID: "I123456",
    userID: "Z8A1B2",
    action: "Updated Client Details",
    status: "Pending",
  },
  {
    date: "19-01-2023 09:20",
    caseID: "D456789",
    userID: "C3D4E5",
    action: "Deleted Account",
    status: "Failed",
  },
  {
    date: "20-01-2023 16:55",
    caseID: "E789012",
    userID: "F6G7H8",
    action: "Retrieved Client Details",
    status: "Active",
  },
];

export function DashboardTable() {
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
    );
  };

  const getBadgeColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "success":
        return "green";
      case "pending":
        return "blue";
      case "failed":
        return "red";
      case "active":
        return "yellow"
      default:
        return 'white';
    }
  };

  const rows = sortedData.map((row) => (
    <Table.Tr key={row.caseID}>
      <Table.Td>{row.date}</Table.Td>
      <Table.Td>{row.caseID}</Table.Td>
      <Table.Td>{row.userID}</Table.Td>
      <Table.Td>{row.action}</Table.Td>
      <Table.Td>
        <Badge color={getBadgeColor(row.status)}>{row.status}</Badge>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        leftSection={
          <IconSearch
            style={{ width: rem(16), height: rem(16) }}
            stroke={1.5}
          />
        }
        value={search}
        onChange={handleSearchChange}
      />
      <Table
        highlightOnHover
        horizontalSpacing="md"
        verticalSpacing="xs"
        miw={700}
        layout="fixed"
      >
        <Table.Thead>
          <Table.Tr>
            <Th
              sorted={sortBy === "date"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("date")}
            >
              Date
            </Th>
            <Th
              sorted={sortBy === "caseID"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("caseID")}
            >
              Case ID
            </Th>
            <Th
              sorted={sortBy === "userID"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("userID")}
            >
              Agent ID
            </Th>
            <Th
              sorted={sortBy === "action"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("action")}
            >
              Action
            </Th>
            <Th
              sorted={sortBy === "status"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("status")}
            >
              Status
            </Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={Object.keys(data[0]).length}>
                <Text fw={500} ta="center">
                  Nothing found
                </Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
