import React from "react";
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
const NavLoginSignUpButtons = () => {
  React.useEffect(() => {}, []);

  return (
    <>
      <NavItem className="nav-item-n-white intro-button2">
        <NavLink href="#">Login</NavLink>
      </NavItem>
      <NavItem className="nav-item-n-white intro-button3">
        <NavLink href="#">Sign up</NavLink>
      </NavItem>
    </>
  );
};

export default NavLoginSignUpButtons;
