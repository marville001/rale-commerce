import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { addToCart, openModal, setDetailsProduct } from "../../_actions";

import styles from "./ProductItemCard.module.css";

const ItemCard = ({ product, addToCart, openModal, setDetailsProduct }) => {
  const { price, _id, name, imageUrl } = product;
  return (
    <div
      className={styles.cardContainer}
      onClick={() => setDetailsProduct(_id)}
    >
      <Link to={`/product/${_id}`}>
        <div className={styles.cardImageContainer}>
          {imageUrl ? (
            <img
              src={imageUrl}
              className={styles.cardImage}
              alt="abc"
              width="300"
              height="250"
            />
          ) : (
            <p>Loading....</p>
          )}
        </div>
      </Link>

      <p className={styles.cardItemName}>
        <Link to={`/product/${_id}`}>{name}</Link>
      </p>
      <p className={styles.cardItemPrice}>
        KSh <span>{price}</span>
      </p>
      <div className={styles.addToCartBtnContainer}>
        <button
          className={styles.addToCartBtn}
          onClick={() => {
            addToCart(_id);
            openModal("addtocart", _id);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default connect(null, { addToCart, openModal, setDetailsProduct })(
  ItemCard
);
