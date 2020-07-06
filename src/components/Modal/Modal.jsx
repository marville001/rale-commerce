import React from "react";

import PropTypes from "prop-types";

import styles from "./Modal.module.css";

const Modal = ({ open, children, bgColor }) => {
  return (
    <div
      style={{
        display: open ? "block" : "none",
        backgroundColor: bgColor ? bgColor : "rgba(0, 0, 0, 0.1)"
      }}
      className={styles.modalContainer}
    >
      {children}
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired
};

export default Modal;
