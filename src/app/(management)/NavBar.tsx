"use client";

import { useState } from "react";
import { Group, Code } from "@mantine/core";
import {
  IconDashboard,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconTimeline,
  IconSwitchHorizontal,
  IconLogout,
  IconUser
} from "@tabler/icons-react";
import classes from "./Navbar.module.css";
import Link from "next/link";

const data = [
  { link: "/dashboard", label: "Dashboard", icon: IconDashboard },
  { link: "/users", label: "Users", icon: IconUser },
  { link: "/clients", label: "Clients", icon: IconTimeline },
  { link: "/settings", label: "Settings", icon: IconSettings },
];

export function Navbar() {
  const pathname = new URL(window.location.href).pathname;
  const route = pathname.split('/')[1]
  const selected = route.charAt(0).toUpperCase() + route.slice(1)
  const [active, setActive] = useState(selected);

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      // onClick={(event) => {
      //   event.preventDefault();
      //   setActive(item.label);
      // }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Code fw={700} className={classes.version}>
            v3.1.2
          </Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        {/* <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a> */}

        <Link
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </Link>
      </div>
    </nav>
  );
}
