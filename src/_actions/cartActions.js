import {
  CART_SAVE_SHIPPING,
  CART_SAVE_PAYMENT,
  REMOVE_FROM_CART,
  CHANGE_QUANTITY,
  EMPTY_CART,
  ADD_TO_CART,
  LOAD_CART,
} from "./types";
import Axios from "axios";

//cart actions
const loadCart = () => (dispatch) => {
  dispatch({
    type: LOAD_CART,
  });
};
const addToCart = (id) => async (dispatch) => {
  try {
    const {
      data: { product },
    } = await Axios.get(`/api/products/${id}`);

    const p = product[0];

    dispatch({
      type: ADD_TO_CART,
      payload: {
        id: p._id,
        product: p,
      },
    });
  } catch (error) {
    alert("An error occurred... please try again");
  }
};
const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART, id });
};

const changeQuantity = (id, value) => (dispatch) => {
  dispatch({ type: CHANGE_QUANTITY, id, value: parseInt(value) });
};
const emptyCart = () => (dispatch) => {
  dispatch({ type: EMPTY_CART });
};

const saveShipping = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING, payload: data });
};
const savePayment = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT, payload: data });
};

export {
  saveShipping,
  savePayment,
  addToCart,
  removeFromCart,
  emptyCart,
  changeQuantity,
  loadCart,
};
