import { Group, Paper, TextInput } from "@mantine/core";
import classes from "./Edit.module.css";

const data = {
  firstName: "Thana",
  lastName: "Jaibun",
  dateOfBirth: "24-7-2002",
  gender: "Female",
  email: "thana.jaibun@gmail.com",
  phoneNumber: "8675 9485",
  address: "524B Tampines Central 7 #12-280",
  city: "Phuket",
  state: "Phuket",
  country: "Thailand",
  postalCode: "685784"
}

export function Edit() {
  return (
    <Paper p="md" withBorder radius="md" style={{flexGrow: 1}}>
      <Group style={{ width: "100%" }}>
        <TextInput
          label="First Name"
          placeholder="15329 Huston 21st"
          classNames={classes}
          value={data.firstName}
        />
        <TextInput
          label="Last Name"
          placeholder="15329 Huston 21st"
          classNames={classes}
          value={data.lastName}
        />
        <TextInput
          label="Date Of Birth"
          placeholder="15329 Huston 21st"
          classNames={classes}
          value={data.dateOfBirth}
        />
        <TextInput
          label="Gender"
          placeholder="15329 Huston 21st"
          classNames={classes}
          value={data.gender}
        />
        <TextInput
          label="Email"
          placeholder="15329 Huston 21st"
          classNames={classes}
          value={data.email}
        />
        <TextInput
          label="Phone Number"
          placeholder="15329 Huston 21st"
          classNames={classes}
          value={data.phoneNumber}
        />
        <TextInput
          label="Address"
          placeholder="15329 Huston 21st"
          classNames={classes}
          value={data.address}
        />
        <TextInput
          label="City"
          placeholder="15329 Huston 21st"
          classNames={classes}
          value={data.city}
        />
        <TextInput
          label="State"
          placeholder="15329 Huston 21st"
          classNames={classes}
          value={data.state}
        />
        <TextInput
          label="Country"
          placeholder="15329 Huston 21st"
          classNames={classes}
          value={data.country}
        />
        <TextInput
          label="Postal Code"
          placeholder="15329 Huston 21st"
          classNames={classes}
          value={data.postalCode}
        />
      </Group>
    </Paper>
  );
}
