import React from "react";
import {
  SingleLowItem,
  PathDiv,
  SingleSaleItem,
  AdminWrapper,
  TotalsCard
} from "../components";

import { Paper, Typography, List, ListItem } from "@material-ui/core";

import styles from "./AdminDash.module.css";

const AdminDash = ({ match: { path } }) => {
  const lowItems = 2;
  const highestSales = 5;
  return (
    <AdminWrapper>
      <PathDiv path={path} />
      <div className={styles.cardsContainer}>
        <TotalsCard value={2000} name={"All products"} />
        <TotalsCard value={400} name={"Total Sales"} />
        <TotalsCard value={111} name={"Todays Total Sales"} />
      </div>
      <div className={styles.col2Wrapper}>
        <Paper style={{ margin: "10px", alignSelf: "flex-start" }}>
          <h2>{`${highestSales} items have recorded highest sale`}</h2>
          <List style={{ width: "350px" }}>
            <ListItem
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography style={{ fontSize: "14px" }}>Name</Typography>
              <Typography style={{ fontSize: "15px" }}>Sales</Typography>
              <Typography>Price</Typography>
            </ListItem>
            <SingleSaleItem name="Tecno J9 Phone" sales={22} price={33300} />
            <SingleSaleItem name="Infinix xZ Phone" sales={20} price={12200} />
            <SingleSaleItem name="Infinix xZ Phone" sales={20} price={12200} />
            <SingleSaleItem name="Infinix xZ Phone" sales={20} price={12200} />
            <SingleSaleItem name="Infinix xZ Phone" sales={20} price={12200} />
          </List>
        </Paper>

        {/* low items */}

        <Paper style={{ margin: "10px", alignSelf: "flex-start" }}>
          <h2>{`${lowItems} items are running low in stock`}</h2>
          <List style={{ width: "350px" }}>
            <ListItem
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography style={{ fontSize: "14px" }}>Name</Typography>
              <Typography style={{ fontSize: "15px" }}>Quantity</Typography>
              <Typography>Price</Typography>
            </ListItem>
            <SingleLowItem name="BlackBerry Phone" quantity={2} price={2300} />
            <SingleLowItem name="BlackBerry Phone" quantity={2} price={2300} />
          </List>
        </Paper>

        {/* low items end */}
      </div>
    </AdminWrapper>
  );
};

export default AdminDash;
