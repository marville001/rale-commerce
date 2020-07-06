import {
  LOAD_PRODUCTS_PENDING,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILED,
  PRODUCT_DETAILS_PENDING,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILED,
  SET_DETAILS_PRODUCT,
  PRODUCT_SAVE_SUCCESS,
  PRODUCT_SAVE_PENDING,
  PRODUCT_SAVE_FAILED,
  OPEN_MENU,
  CLOSE_LOG_MODAL,
  CLOSE_ADDTOCART_MODAL,
  OPEN_LOG_MODAL,
  OPEN_ADDTOCART_MODAL,
} from "./types";

import Axios from "axios";
import {
  PRODUCT_SEARCH_PENDING,
  PRODUCT_SEARCH_SUCCESS,
  PRODUCT_SEARCH_FAILED,
} from "../constants/productConstants";

const loadProducts = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_PRODUCTS_PENDING });
    const {
      data: { products },
    } = await Axios.get(`/api/products`);

    dispatch({ type: LOAD_PRODUCTS_SUCCESS, products });
  } catch (error) {
    dispatch({
      type: LOAD_PRODUCTS_FAILED,
      error: error.response.data.message,
    });
  }
};

const detailsProduct = (id) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_PENDING });
  try {
    const {
      data: { product },
    } = await Axios.get(`/api/products/${id}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, product: product[0] });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAILED,
      payload: error.response.data.message,
    });
  }
};

const saveProduct = (product) => async (dispatch) => {
  dispatch({ type: PRODUCT_SAVE_PENDING });
  try {
    const token = localStorage.getItem("adminToken");
    const { data } = await Axios.post("/api/products", product, {
      headers: { "x-auth-token": token },
    });

    dispatch({ type: PRODUCT_SAVE_SUCCESS, data: data });
  } catch (error) {
    dispatch({ type: PRODUCT_SAVE_FAILED, error: error.response.data.message });
  }
};

const setDetailsProduct = (id) => (dispatch) => {
  dispatch({
    type: SET_DETAILS_PRODUCT,
    id,
  });
};

const openModal = (modal, id) => (dispatch) => {
  if (modal === "addtocart") {
    dispatch({
      type: OPEN_ADDTOCART_MODAL,
      id,
    });
  } else if (modal === "log") {
    dispatch({
      type: OPEN_LOG_MODAL,
    });
  }
};
const closeModal = (modal) => (dispatch) => {
  if (modal === "addtocart") {
    dispatch({
      type: CLOSE_ADDTOCART_MODAL,
    });
  } else if (modal === "log") {
    dispatch({
      type: CLOSE_LOG_MODAL,
    });
  }
};

const openMenu = () => (dispatch) => {
  dispatch({
    type: OPEN_MENU,
  });
};

const searchProduct = (text) => async (dispatch) => {
  const search = text.toLowerCase();
  dispatch({ type: PRODUCT_SEARCH_PENDING });
  try {
    const {
      data: { products },
    } = await Axios.get(`/api/products/search?query=${search}`);
    dispatch({ type: PRODUCT_SEARCH_SUCCESS, products });
  } catch (error) {
    dispatch({
      type: PRODUCT_SEARCH_FAILED,
      error: error.response.data.message,
    });
  }
};

export {
  loadProducts,
  detailsProduct,
  saveProduct,
  setDetailsProduct,
  openModal,
  closeModal,
  openMenu,
  searchProduct,
};
