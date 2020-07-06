import React from "react";
import { Navbar, NavFooter } from "../../components";

import styles from "./Wrapper.module.css";

const Wrapper = (props) => {
  return (
    <div className={styles.wc}>
      <Navbar />
      <div
        style={{
          position: "relative",
          minHeight: "80vh",
          // border: "1px solid #eee",
        }}
      >
        {props.children}
      </div>
      <NavFooter />
    </div>
  );
};

export default Wrapper;
