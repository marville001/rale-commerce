import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Modal } from "../";
import { closeModal } from "../../_actions";

import styles from "./AddToCartModal.module.css";

const AddToCartModal = ({ addToCartModalOpen, closeModal, modalProduct }) => {
  const { name, price, imageUrl } = modalProduct;

  return (
    <Modal open={addToCartModalOpen}>
      <div className={styles.modalContent}>
        <h5 className={styles.title}>item added to the cart</h5>
        <div className={styles.image}>
          <img src={imageUrl} alt="product" />
        </div>

        <h5 className={styles.name}>{name}</h5>
        <h5 className={styles.price}>
          price : $ <span>{price}</span>
        </h5>
        <Link to="/home">
          <button onClick={() => closeModal("addtocart")}>
            Continue Shopping
          </button>
        </Link>
        <Link to="/cart">
          <button onClick={() => closeModal("addtocart")}>View Cart</button>
        </Link>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  addToCartModalOpen: state.products.addToCartModalOpen,
  modalProduct: state.products.modalProduct,
});

export default connect(mapStateToProps, { closeModal })(AddToCartModal);
