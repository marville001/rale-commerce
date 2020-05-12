import React from "react";
import { Typography, ListItem } from "@material-ui/core";

const SingleLowItem = ({ name, quantity, price }) => {
  return (
    <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
      <Typography style={{ fontSize: "12px" }}>{name}</Typography>
      <Typography style={{ fontSize: "15px", color: "red" }}>
        {quantity}
      </Typography>
      <Typography style={{ fontSize: "15px", color: "teal" }}>
        {price}
      </Typography>
    </ListItem>
  );
};

export default SingleLowItem;
