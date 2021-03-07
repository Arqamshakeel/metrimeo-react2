import React from "react";
import CheckAdmin from "../../auth/CheckAdmin";
import MaterialTableUsers from "./MaterialTableUsers";
import MaterialTableResume from "./MaterialTableResume";
const AdminPanel = () => {
  return (
    <CheckAdmin>
      <MaterialTableUsers />
      <hr />
      <MaterialTableResume />
    </CheckAdmin>
  );
};

export default AdminPanel;
