import React, { useEffect } from "react";
import { Wrapper } from ".";
import { useSelector } from "react-redux";

const AdminDashboard = (props) => {
  const { products } = useSelector((state) => state.products);
  const { admin } = useSelector((state) => state.admin);
  useEffect(() => {
    if (!admin._id) {
      props.history.push("/admin/login");
    }
  }, [admin]);
  return (
    <Wrapper>
      <h1>Dashboard</h1>
      <div className="page-container dash-container">
        <div className="q-container">
          <div className="dash-item-container">
            <h2>Total Items</h2>
            <div className="item-quantity">{products.length}</div>
          </div>
          <div className="dash-item-container">
            <h2>Total Users</h2>
            <div className="item-quantity">{4000}</div>
          </div>
          <div className="dash-item-container">
            <h2>Total Sales</h2>
            <div className="item-quantity">{230}</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AdminDashboard;
