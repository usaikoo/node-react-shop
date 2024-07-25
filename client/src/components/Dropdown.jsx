"use client";

import { Dropdown } from "flowbite-react";
import {Link} from "react-router-dom"
export function UserDropdown({ logoutHandler }) {
  return (
    <Dropdown label="User" dismissOnClick={false}>
      <Link to="/order-history">
        <Dropdown.Item>Order History</Dropdown.Item>
      </Link>
      <Dropdown.Item onClick={logoutHandler}>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
