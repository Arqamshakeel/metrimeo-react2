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
import { withRouter } from "react-router-dom";

const Result = (props) => {
  return (
    <div>
      <div
        style={{
          fontFamily: "'Montserrat',sans-serif",
          fontSize: "2.0rem",
          fontWeight: "800",
          color: "#5d7280",
          backgroundColor: "#ffff",
          // margin: "30px",
        }}
        onClick={() => {
          props.history.push(props.goto);
        }}
      >
        {props.name}
      </div>
      <div style={{ color: "#5d7280", margin: "10px 0px 10px 0px" }}>
        {props.desc}
        <div style={{ margin: "10px 0px 10px 0px" }}>
          <a
            onClick={() => {
              props.history.push(props.goto);
            }}
            style={{ color: "orange", cursor: "pointer" }}
          >
            Read more >>
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default withRouter(Result);
