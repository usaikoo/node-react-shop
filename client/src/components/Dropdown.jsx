"use client";

import { Dropdown } from "flowbite-react";

export function UserDropdown({ logoutHandler }) {
  return (
    <Dropdown label="User" dismissOnClick={false}>
      <Dropdown.Item>Profile</Dropdown.Item>
      <Dropdown.Item onClick={logoutHandler}>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
