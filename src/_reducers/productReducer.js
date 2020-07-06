import {
  LOAD_PRODUCTS_FAILED,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_PENDING,
  PRODUCT_DETAILS_PENDING,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILED,
  PRODUCT_SAVE_PENDING,
  PRODUCT_SAVE_SUCCESS,
  PRODUCT_SAVE_FAILED,
  OPEN_ADDTOCART_MODAL,
  CLOSE_ADDTOCART_MODAL,
  OPEN_LOG_MODAL,
  CLOSE_LOG_MODAL,
  OPEN_MENU,
} from "../_actions/types";

import {
  PRODUCT_SEARCH_PENDING,
  PRODUCT_SEARCH_SUCCESS,
  PRODUCT_SEARCH_FAILED,
} from "../constants/productConstants";

const initState = {
  defaultProducts: [],
  products: [],
  modalProduct: {},
  loading: false,
  error: "",
  logSignModalOpen: false,
  addToCartModalOpen: false,
  menuOpen: false,
};

const getItem = (products, id) => {
  const product = products.find((item) => item._id === id);
  return product;
};

const productReducers = (state = initState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_PENDING:
      return { ...state, loading: true };
    case LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.products,
        defaultProducts: action.products,
      };
    case LOAD_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case OPEN_LOG_MODAL:
      return { ...state, logSignModalOpen: true };
    case CLOSE_LOG_MODAL:
      return { ...state, logSignModalOpen: false };
    case OPEN_ADDTOCART_MODAL:
      return {
        ...state,
        modalProduct: getItem(state.products, action.id),
        addToCartModalOpen: true,
      };
    case CLOSE_ADDTOCART_MODAL:
      return { ...state, modalProduct: {}, addToCartModalOpen: false };

    case OPEN_MENU:
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
    default:
      return state;
  }
};

const productDetailReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_PENDING:
      return { loading: true, ...state };
    case PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, product: action.product };
    case PRODUCT_DETAILS_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const productSaveReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_SAVE_PENDING:
      return { ...state, loading: true };
    case PRODUCT_SAVE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        product: action.product,
      };
    case PRODUCT_SAVE_FAILED:
      return { ...state, loadingSave: false, errorSave: action.error };

    default:
      return state;
  }
};

const productSearchReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_SEARCH_PENDING:
      return { ...state, loading: true };
    case PRODUCT_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.products,
      };
    case PRODUCT_SEARCH_FAILED:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export {
  productReducers,
  productSearchReducer,
  productDetailReducer,
  productSaveReducer,
};
