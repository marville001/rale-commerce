import React from "react";
import { PathDiv, AdminWrapper } from "../components";

const AdminProducts = ({ match: { path } }) => {
  return (
    <AdminWrapper>
      <PathDiv path={path} />
    </AdminWrapper>
  );
};

export default AdminProducts;
