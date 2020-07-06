import React, { useState, useEffect } from "react";

import styles from "./Error.module.css";

const Error = ({ error }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true);
    setTimeout(() => setOpen(false), 4000);
  }, [error]);

  return (
    <div
      className={styles.errorContainer}
      style={{ display: open ? "block" : "none" }}
    >
      <p>{error}</p>
    </div>
  );
};

export default Error;
