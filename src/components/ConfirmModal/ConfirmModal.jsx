import React from "react";
import { Modal } from "../";

import styles from "./ConfirmModal.module.css";

const ConfirmModal = ({ open, closeAction, confirmAction, id, title }) => {
  const handleAction = () => {
    confirmAction(id);
    closeAction();
  };
  return (
    <Modal open={open} bgColor="transparent">
      <div className={styles.confirmContainer}>
        <h4>{title}</h4>
        <div className={styles.btns}>
          <button className={styles.cancel} onClick={closeAction}>
            Cancel
          </button>
          <button className={styles.ok} onClick={handleAction}>
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
