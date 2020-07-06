import React from "react";

import { openMenu } from "../../_actions";

import styles from "./Products.module.css";
import { Wrapper } from "../";
import { SideBarCategories, ItemCardList } from "../../components";
import { connect } from "react-redux";

const Products = ({ openMenu, menuOpen }) => {
  return (
    <Wrapper>
      <div className={styles.productsContainer}>
        <div className={styles.humberger} onClick={openMenu}>
          <div style={{ display: menuOpen ? "none" : "block" }}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className={styles.close}
            style={{ display: !menuOpen ? "none" : "block" }}
          >
            X
          </div>
        </div>
        <div className={styles.productsTopContainer}>
          <SideBarCategories />
          <div className={styles.productsBody}>
            <ItemCardList />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const mapStateToProps = (state) => {
  return {
    menuOpen: state.products.menuOpen,
  };
};

export default connect(mapStateToProps, { openMenu })(Products);
