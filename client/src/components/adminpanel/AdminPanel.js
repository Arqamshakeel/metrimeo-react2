import React from "react";
import CheckAdmin from "../../auth/CheckAdmin";
import MaterialTableUsers from "./MaterialTableUsers";
import MaterialTableResume from "./MaterialTableResume";
import MaterialTableContactUs from "./MaterialTableContactUs";
const AdminPanel = () => {
  return (
    <CheckAdmin>
      <div style={{ zIndex: "-1" }}>
        <MaterialTableUsers />
        <hr />
        <MaterialTableResume />
        <hr />
        <MaterialTableContactUs />
      </div>
    </CheckAdmin>
  );
};

export default AdminPanel;
