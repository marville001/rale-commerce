import React from "react";
import { connect, useSelector } from "react-redux";

import { Loading, ItemCard } from "../";

import styles from "./ProductItemCardList.module.css";

const ItemCardList = ({ loading }) => {
  const products = useSelector((state) => state.products.products);
  return (
    <div className={styles.productsContainer}>
      {loading ? (
        <Loading />
      ) : (
        <>
          {products && products.length !== 0 ? (
            <div className={styles.productsItemsContainer}>
              {products.map((product) => (
                <ItemCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div className={styles.noMatchContainer}>
              <h4>Sorry no match found....</h4>
            </div>
          )}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // products: state.products,
    loading: state.products.loading,
  };
};

export default connect(mapStateToProps, {})(ItemCardList);
