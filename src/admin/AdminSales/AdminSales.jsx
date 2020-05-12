import React from "react";
import { PathDiv, AdminWrapper } from "../components";

const AdminSales = ({ match: { path } }) => {
  return (
    <AdminWrapper>
      <PathDiv path={path} />
    </AdminWrapper>
  );
};

export default AdminSales;
