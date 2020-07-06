import React, { useEffect } from "react";
import { Wrapper } from "../";
import { useSelector, useDispatch } from "react-redux";

import { searchProduct } from "../../_actions/productActions";
import { Loading, ItemCard } from "../../components";

import styles from "./ProductSearch.module.css";

const ProductSearch = (props) => {
  let searchText = props.location.search.split("=")[1].split("%20").join(" ");

  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.productSearch);
  console.log("P : ", products);

  useEffect(() => {
    dispatch(searchProduct(searchText));
    return () => {};
  }, [searchText]);

  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : products.length === 0 ? (
        <div className={styles.noProductContainer}>
          <h4>Sorry no product found....</h4>
        </div>
      ) : (
        <div className={styles.productsItemsContainer}>
          {products.map((product) => (
            <ItemCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default ProductSearch;
