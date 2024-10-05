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
  Flex,
} from "@mantine/core";
import {
  IconSelector,
  IconChevronDown,
  IconChevronUp,
  IconSearch,
} from "@tabler/icons-react";
import classes from "./ClientTable.module.css";

interface RowData {
  clientID: string;
  name: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  phoneNumber: number;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  active: boolean;
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
    keys(data[0]).some((key) => { 
      return ("" + item[key]).toLowerCase().includes(query)
    })
    
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
        return ("" + b[sortBy]).localeCompare(("" + a[sortBy]));
      }

      return ("" + a[sortBy]).localeCompare(("" + b[sortBy]));
    }),
    payload.search
  );
}

export function ClientTable() {
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
        return "yellow";
      default:
        return "white";
    }
  };

  const rows = sortedData.map((row) => (
    <Table.Tr key={row.clientID}>
      <Table.Td>{row.clientID}</Table.Td>
      <Table.Td>{row.name}</Table.Td>
      <Table.Td>{row.dateOfBirth}</Table.Td>
      <Table.Td>{row.gender}</Table.Td>
      <Table.Td>{row.email}</Table.Td>
      <Table.Td>{row.phoneNumber}</Table.Td>
      <Table.Td>{row.address}</Table.Td>
      <Table.Td>{row.city}</Table.Td>
      <Table.Td>{row.state}</Table.Td>
      <Table.Td>{row.country}</Table.Td>
      <Table.Td>{row.postalCode}</Table.Td>
      <Table.Td>{row.active}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      {/* <TextInput
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
      /> */}
      <Table.ScrollContainer minWidth={5}>
        <Table highlightOnHover horizontalSpacing="md" verticalSpacing="xs">
          <Table.Thead>
            <Table.Tr>
              <Th
                sorted={sortBy === "clientID"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("clientID")}
              >
                ID
              </Th>
              <Th
                sorted={sortBy === "name"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("name")}
              >
                Name
              </Th>
              <Th
                sorted={sortBy === "dateOfBirth"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("dateOfBirth")}
              >
                DOB
              </Th>
              <Th
                sorted={sortBy === "gender"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("gender")}
              >
                Gender
              </Th>
              <Th
                sorted={sortBy === "email"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("email")}
              >
                Email
              </Th>
              <Th
                sorted={sortBy === "phoneNumber"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("phoneNumber")}
              >
                Phone
              </Th>
              <Th
                sorted={sortBy === "address"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("address")}
              >
                Address
              </Th>
              <Th
                sorted={sortBy === "city"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("city")}
              >
                City
              </Th>
              <Th
                sorted={sortBy === "state"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("state")}
              >
                State
              </Th>
              <Th
                sorted={sortBy === "state"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("state")}
              >
                Country
              </Th>
              <Th
                sorted={sortBy === "postalCode"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("postalCode")}
              >
                Postal Code
              </Th>
              <Th
                sorted={sortBy === "active"}
                reversed={reverseSortDirection}
                onSort={() => setSorting("active")}
              >
                Active
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
      </Table.ScrollContainer>
    </div>
  );
}

const data = [
  {
    clientID: "a8f3d7t1",
    name: "John Doe",
    dateOfBirth: "1990-05-14",
    gender: "Male",
    email: "john.doe@example.com",
    phoneNumber: 1234567890,
    address: "123 Main St",
    city: "New York",
    state: "NY",
    country: "USA",
    postalCode: "10001",
    active: true,
  },
  {
    clientID: "h6k2p8v3",
    name: "Jane Smith",
    dateOfBirth: "1985-12-25",
    gender: "Female",
    email: "jane.smith@example.com",
    phoneNumber: 9876543210,
    address: "456 Elm St",
    city: "Los Angeles",
    state: "CA",
    country: "USA",
    postalCode: "90001",
    active: true,
  },
  {
    clientID: "t9b5x2c7",
    name: "Alice Johnson",
    dateOfBirth: "1995-08-30",
    gender: "Female",
    email: "alice.johnson@example.com",
    phoneNumber: 1029384756,
    address: "789 Oak St",
    city: "Chicago",
    state: "IL",
    country: "USA",
    postalCode: "60601",
    active: false,
  },
  {
    clientID: "v3l8r1f9",
    name: "Michael Brown",
    dateOfBirth: "1978-03-15",
    gender: "Male",
    email: "michael.brown@example.com",
    phoneNumber: 5647382910,
    address: "101 Pine St",
    city: "Houston",
    state: "TX",
    country: "USA",
    postalCode: "77001",
    active: true,
  },
  {
    clientID: "q5m7n6k4",
    name: "Emily Davis",
    dateOfBirth: "1993-07-18",
    gender: "Female",
    email: "emily.davis@example.com",
    phoneNumber: 6789101112,
    address: "202 Birch St",
    city: "Phoenix",
    state: "AZ",
    country: "USA",
    postalCode: "85001",
    active: false,
  },
  {
    clientID: "x1b7g3t2",
    name: "David Wilson",
    dateOfBirth: "1980-11-22",
    gender: "Male",
    email: "david.wilson@example.com",
    phoneNumber: 9182736450,
    address: "303 Maple St",
    city: "Philadelphia",
    state: "PA",
    country: "USA",
    postalCode: "19101",
    active: true,
  },
  {
    clientID: "y9p3v6d8",
    name: "Sarah Lee",
    dateOfBirth: "1992-04-10",
    gender: "Female",
    email: "sarah.lee@example.com",
    phoneNumber: 1827364549,
    address: "404 Cedar St",
    city: "San Antonio",
    state: "TX",
    country: "USA",
    postalCode: "78201",
    active: true,
  },
  {
    clientID: "r4t8n1j7",
    name: "Paul Martinez",
    dateOfBirth: "1989-09-17",
    gender: "Male",
    email: "paul.martinez@example.com",
    phoneNumber: 5647382910,
    address: "505 Ash St",
    city: "Dallas",
    state: "TX",
    country: "USA",
    postalCode: "75201",
    active: false,
  },
  {
    clientID: "b2f6x9c4",
    name: "Laura Rodriguez",
    dateOfBirth: "1983-02-05",
    gender: "Female",
    email: "laura.rodriguez@example.com",
    phoneNumber: 8172635449,
    address: "606 Willow St",
    city: "San Diego",
    state: "CA",
    country: "USA",
    postalCode: "92101",
    active: true,
  },
  {
    clientID: "m5h3v8p1",
    name: "Robert Taylor",
    dateOfBirth: "1975-06-29",
    gender: "Male",
    email: "robert.taylor@example.com",
    phoneNumber: 2736458192,
    address: "707 Spruce St",
    city: "San Jose",
    state: "CA",
    country: "USA",
    postalCode: "95101",
    active: true,
  },
];
