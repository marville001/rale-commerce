import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import styles from "./shared.module.css";

const TotalsCard = ({ value, name, action }) => {
  return (
    <div className={styles.totalContainer}>
      <div className={styles.cardIcon}>
        <AccountCircleIcon style={{ color: "#fff", fontSize: "35px" }} />
      </div>
      <div className={styles.cardName}>
        <span>{name}</span>
      </div>
      <div className={styles.totalValue}>
        <span>{value}</span>
      </div>
      <div
        onClick={() => alert("Total: " + value + " name: " + name)}
        className={styles.moreBtn}
      >
        see more
      </div>
    </div>
  );
};

export default TotalsCard;
