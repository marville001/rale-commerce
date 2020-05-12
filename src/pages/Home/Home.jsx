import React from "react";

import { ItemCardList } from "../../components";
import { Wrapper } from "../";

import styles from "./Home.module.css";
import { ProductNavigation } from "../../components";

const Home = () => {
  return (
    <>
      <Wrapper>
        <div className={styles.homeContainer}>
          <div className={styles.carousel}>Carousel</div>
          <div className={styles.productsView}>
            <ProductNavigation />
            <ItemCardList />
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default Home;
