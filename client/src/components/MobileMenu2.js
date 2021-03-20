import React from "react";
import { useDispatch } from "react-redux";
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
import { falseLogin, switchLogin } from "../Redux/actions/LoginAction";
import userService from "../services/UserService";
const MobileMenu2 = () => {
  const dispatch = useDispatch();
  return (
    <div>
      {userService.getloggedinuser() ? (
        <NavItem className="nav-item-m">
          <NavLink
            style={{ cursor: "pointer" }}
            onClick={() => {
              userService.logout();
              dispatch(switchLogin());
            }}
          >
            Logout
          </NavLink>
        </NavItem>
      ) : (
        <>
          <NavItem className="nav-item-m">
            <NavLink
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.props.props.history.push("login");
                this.props.hideNav();
              }}
            >
              Login
            </NavLink>
          </NavItem>
          <NavItem className="nav-item-m">
            <NavLink
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.props.props.history.push("register");
                this.props.hideNav();
              }}
            >
              Sign up
            </NavLink>
          </NavItem>
        </>
      )}
    </div>
  );
};

export default MobileMenu2;
