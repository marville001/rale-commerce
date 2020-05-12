import React, { useState, Component } from "react";
import { connect } from "react-redux";

import { loadProducts } from "../../_actions";

import styles from "./ProductNavigation.module.css";

const ProductNavigation = ({ loadProducts }) => {
  return (
    <div className={styles.productsNavigation}>
      <div
        className={styles.productsNavigationItem}
        onClick={() => loadProducts("")}
      >
        All
      </div>
      <div
        className={styles.productsNavigationItem}
        onClick={() => loadProducts("shoes")}
      >
        Shoes
      </div>
      <div className={styles.productsNavigationItem}>
        Men Clothing
        <div className={styles.productsNavigationSubItem}>
          <div onClick={() => loadProducts("jeans")}>Jeans</div>
        </div>
      </div>
      <div className={styles.productsNavigationItem}>
        Women Clothing
        <div className={styles.productsNavigationSubItem}>
          <div onClick={() => loadProducts("dress")}>Dress</div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { loadProducts })(ProductNavigation);
