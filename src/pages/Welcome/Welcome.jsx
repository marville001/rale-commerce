import React from "react";

import styles from "./Welcome.module.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.welcomeContent}>
        <h4>
          <span>W</span>elcome
        </h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
          aliquam.
        </p>
        <Link to="/home">
          <button>Shop now</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
