import React from "react";
import { connect } from "react-redux";

import ItemCard from "../ProductItemCard/ProductItemCard";

import styles from "./ProductItemCardList.module.css";
import { Loading, Title } from "../";

const ItemCardList = ({ products, loading }) => {
  return (
    <div className={styles.productsContainer}>
      <Title name="our" subname="items" />
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.productsItemsContainer}>
          {products.map(product => (
            <ItemCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products,
    loading: state.loading
  };
};

export default connect(mapStateToProps, {})(ItemCardList);
