import React, { useEffect, useState } from "react";
import { Wrapper } from "../";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import { addToCart, openModal, detailsProduct } from "../../_actions";
import { Title, Loading, Error, ItemCard } from "../../components";

import styles from "./ProductDetails.module.css";

const Products = ({ addToCart, openModal, match, detailsProduct }) => {
  const id = match.params.productId;

  useEffect(() => {
    detailsProduct(id);
    return () => {};
  }, []);

  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;

  const { name, price, description, imageUrl, _id } = product;

  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <>
          <div className={styles.detailsContainer}>
            <Title name="product" subname="details" />
            <div className={styles.detailsContent}>
              <div className={styles.detailsImage}>
                <img src={imageUrl} alt="product" />
              </div>
              <div className={styles.otherDetails}>
                <h4 className={styles.name}>
                  Name: <span>{name}</span>
                </h4>
                <h4 className={styles.price}>
                  <strong>
                    price : <span>KSh {price}</span>
                  </strong>
                </h4>
                <h4 className={styles.description}>
                  Description: <span>{description}</span>
                </h4>
                <div className={styles.btns}>
                  <Link to="/home"> back to products</Link>
                  <button
                    onClick={() => {
                      addToCart(_id);
                      openModal("addtocart", _id);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.similarProductsContainer}>
            <h2>Similar Products</h2>
            <div className={styles.similarProducts}>
              <ItemCard product={product} />
              <ItemCard product={product} />
              <ItemCard product={product} />
              <ItemCard product={product} />
            </div>
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default connect(null, { addToCart, openModal, detailsProduct })(
  Products
);
