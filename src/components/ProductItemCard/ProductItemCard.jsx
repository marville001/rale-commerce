import React from "react";
import { connect } from "react-redux";

import { addToCart } from "../../_actions";

import styles from "./ProductItemCard.module.css";

const ItemCard = ({ product, addToCart }) => {
  const { price, _id, name, imageUrl } = product;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImageContainer}>
        {imageUrl ? (
          <img
            src={imageUrl}
            className={styles.cardImage}
            alt="abc"
            width="300"
            onClick={() => alert("name: " + name + " id " + _id)}
            height="250"
          />
        ) : (
          <p>Loading....</p>
        )}
      </div>

      <p className={styles.cardItemName}>{name}</p>
      <p className={styles.cardItemPrice}>
        $ <span>{price}</span>
      </p>
      <div className={styles.addToCartBtnContainer}>
        <button className={styles.addToCartBtn} onClick={() => addToCart(_id)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default connect(null, { addToCart })(ItemCard);
