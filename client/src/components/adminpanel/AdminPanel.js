import React from "react";
import CheckAdmin from "../../auth/CheckAdmin";
import MaterialTableUsers from "./MaterialTableUsers";
import MaterialTableResume from "./MaterialTableResume";
import MaterialTableContactUs from "./MaterialTableContactUs";
const AdminPanel = () => {
  return (
    <CheckAdmin>
      <MaterialTableUsers />
      <hr />
      <MaterialTableResume />
      <hr />
      <MaterialTableContactUs />
    </CheckAdmin>
  );
};

export default AdminPanel;
