import React from "react";

import styles from "./Title.module.css";

const Title = ({ name, subname }) => {
  return (
    <h3 className={styles.titleContainer}>
      {name} <span>{subname}</span>
    </h3>
  );
};

export default Title;
