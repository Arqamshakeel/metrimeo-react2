import React from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
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
const MobileMenu2 = (props) => {
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
                props.history.push("login");
                props.navrem();
              }}
            >
              Login
            </NavLink>
          </NavItem>
          <NavItem className="nav-item-m">
            <NavLink
              style={{ cursor: "pointer" }}
              onClick={() => {
                props.history.push("register");
                props.navrem();
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

export default withRouter(MobileMenu2);
