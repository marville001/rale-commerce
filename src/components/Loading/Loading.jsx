import React from "react";

import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loadContainer}>
      <img src="/loading.gif" alt=" " />
      <p>Loading.....</p>
    </div>
  );
};

export default Loading;
