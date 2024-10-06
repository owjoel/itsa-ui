"use client"

import {
    Paper,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
  } from "@mantine/core";
  import classes from "./Auth.module.css";
  
  export function AuthenticationImage() {
    return (
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Sign in to CRM
          </Title>
  
          <TextInput
            label="Email address"
            placeholder="hello@smu.edu.sg"
            size="md"
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            size="md"
          />
          <Checkbox label="Keep me logged in" mt="xl" size="md" />
          <Button fullWidth mt="xl" size="md">
            Login
          </Button>
  
          {/* <Text ta="center" mt="md">
            Don&apos;t have an account?{" "}
            <Anchor<"a">
              href="#"
              fw={700}
              onClick={(event) => event.preventDefault()}
            >
              Register
            </Anchor>
          </Text> */}
        </Paper>
      </div>
    );
  }