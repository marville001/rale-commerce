import React from "react";
import { Route } from "react-router-dom";
import { AdminLogin, AddProduct, AdminDashboard } from "./pages";

import "./main.css";

const Admin = (props) => {
  return (
    <div>
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin/products/add" component={AddProduct} />
    </div>
  );
};

export default Admin;
