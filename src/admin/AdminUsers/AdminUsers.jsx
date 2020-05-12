import React from "react";
import { PathDiv, AdminWrapper } from "../components";

const AdminUser = ({ match: { path } }) => {
  return (
    <AdminWrapper>
      <PathDiv path={path} />
    </AdminWrapper>
  );
};

export default AdminUser;
