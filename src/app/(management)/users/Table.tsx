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
  Checkbox,
  Button,
  Flex,
  Box,
} from "@mantine/core";
import {
  IconSelector,
  IconChevronDown,
  IconChevronUp,
  IconSearch,
  IconSquarePlus,
} from "@tabler/icons-react";
import classes from "./Table.module.css";
import Link from "next/link";
import { ActionButton } from "./ActionButton";

interface RowData {
  userID: string;
  name: string;
  email: string;
  company: string;
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
    userID: "3342756",
    name: "Athena Weissnat",
    company: "Little - Rippin",
    email: "Elouise.Prohaska@yahoo.com",
  },
  {
    userID: "9003235",
    name: "Deangelo Runolfsson",
    company: "Greenfelder - Krajcik",
    email: "Kadin_Trantow87@yahoo.com",
  },
  {
    userID: "3562756",
    name: "Danny Carter",
    company: "Kohler and Sons",
    email: "Marina3@hotmail.com",
  },
  {
    userID: "3847584",
    name: "Trace Tremblay PhD",
    company: "Crona, Aufderhar and Senger",
    email: "Antonina.Pouros@yahoo.com",
  },
  {
    userID: "4059382",
    name: "Derek Dibbert",
    company: "Gottlieb LLC",
    email: "Abagail29@hotmail.com",
  },
  {
    userID: "2837463",
    name: "Viola Bernhard",
    company: "Funk, Rohan and Kreiger",
    email: "Jamie23@hotmail.com",
  },
  {
    userID: "8924674",
    name: "Austin Jacobi",
    company: "Botsford - Corwin",
    email: "Genesis42@yahoo.com",
  },
];

export function TableSort() {
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
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

  // const toggleRow = (id: string) =>
  //   setSelectedRows((current) =>
  //     current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
  //   );
  const toggleAll = () =>
    setSelectedRows((current) => (current.length === data.length ? [] : data.map((item) => item.userID)));

  const rows = sortedData.map((row) => (
    <Table.Tr key={row.name}>
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(row.userID)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, row.userID]
                : selectedRows.filter((position) => position !== row.userID)
            )
          }
        />
      </Table.Td>
      <Table.Td><Link className="text-blue-600 hover:underline" href="/admin/management/row.userID">{row.userID}</Link></Table.Td>
      <Table.Td>{row.name}</Table.Td>
      <Table.Td><Text size="sm" truncate="end">{row.email}</Text></Table.Td>
      <Table.Td>{row.company}</Table.Td>
      <Table.Td><ActionButton /></Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea>
      <Flex>
        <Box style={{ flexGrow: 1 }} >
          <TextInput
            placeholder="Search by any field"
            mb="md"
            style={{ width: rem(256) }}
            leftSection={
              <IconSearch
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            value={search}
            onChange={handleSearchChange}
          />
        </Box>
        <Button leftSection={<IconSquarePlus />}>Add User</Button>
      </Flex>
      <Table
        horizontalSpacing="md"
        verticalSpacing="xs"
        miw={700}
        highlightOnHover
        layout="fixed"
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ width: rem(48) }}>
              <Checkbox
                  onChange={toggleAll}
                  checked={selectedRows.length === data.length}
                  indeterminate={selectedRows.length > 0 && selectedRows.length !== data.length}
                />
            </Table.Th>
            <Th
              sorted={sortBy === "name"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("name")}
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
              sorted={sortBy === "email"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("email")}
            >
              Email
            </Th>
            <Th
              sorted={sortBy === "company"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("company")}
            >
              Company
            </Th>
            <Table.Th style={{ width: rem(64) }} />
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
