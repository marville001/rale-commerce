import React from "react";

import styles from "./shared.module.css";

const PathDiv = ({ path }) => {
  return (
    <div className={styles.pathContainer}>
      <p>{path}</p>
    </div>
  );
};

export default PathDiv;
