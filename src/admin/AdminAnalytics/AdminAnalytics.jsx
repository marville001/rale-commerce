import React from "react";
import { PathDiv, AdminWrapper } from "../components";

const AdminAnalytics = ({ match: { path } }) => {
  return (
    <AdminWrapper>
      <PathDiv path={path} />
    </AdminWrapper>
  );
};

export default AdminAnalytics;
