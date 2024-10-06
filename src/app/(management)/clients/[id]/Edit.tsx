import { Paper, Stack, TextInput } from "@mantine/core";
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
      <Paper p="md" withBorder radius="md" style={{ height:'100%' , width:'50%'}}>
      <Stack style={{ width: "100%",paddingTop:'10px'}}>
        <TextInput
          label="First Name"
          placeholder="John"
          classNames={classes}
          defaultValue={data.firstName}
        />
        <TextInput
          label="Last Name"
          placeholder="Smitthy"
          classNames={classes}
          defaultValue={data.lastName}
        />
        <TextInput
          label="Date Of Birth"
          placeholder="15329 Huston 21st"
          classNames={classes}
          defaultValue={data.dateOfBirth}
        />
        <TextInput
          label="Gender"
          placeholder="15329 Huston 21st"
          classNames={classes}
          defaultValue={data.gender}
        />
        <TextInput
          label="Email"
          placeholder="15329 Huston 21st"
          classNames={classes}
          defaultValue={data.email}
        />
        <TextInput
          label="Phone Number"
          placeholder="15329 Huston 21st"
          classNames={classes}
          defaultValue={data.phoneNumber}
        />
        <TextInput
          label="Address"
          placeholder="81 Stamford Rd"
          classNames={classes}
          defaultValue={data.address}
        />
        <TextInput
          label="City"
          placeholder="Singapore"
          classNames={classes}
          defaultValue={data.city}
        />
        <TextInput
          label="State"
          placeholder="Singapore"
          classNames={classes}
          defaultValue={data.state}
        />
        <TextInput
          label="Country"
          placeholder="Singapore"
          classNames={classes}
          defaultValue={data.country}
        />
        <TextInput
          label="Postal Code"
          placeholder="694181"
          classNames={classes}
          defaultValue={data.postalCode}
        />
      </Stack>
    </Paper>
  );
}
