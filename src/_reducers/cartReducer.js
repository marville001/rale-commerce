import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
  CHANGE_QUANTITY,
  LOAD_CART,
  CART_SAVE_SHIPPING,
  CART_SAVE_PAYMENT,
} from "../_actions/types";

const cartReducer = (
  state = { cart: [], shipping: {}, payment: {} },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const id = action.payload.id;
      const item = action.payload.product;
      const product = state.cart.find((item) => item._id === id);

      if (product) {
        product.count += 1;
        product.total = product.count * product.price;
        localStorage.setItem("cart", JSON.stringify([...state.cart]));

        return {
          ...state,
          cart: state.cart.map((i) => (i.id === id ? product : i)),
        };
      }

      item.count = 1;
      item.total = item.count * item.price;
      localStorage.setItem("cart", JSON.stringify([...state.cart, item]));

      return {
        ...state,
        cart: [...state.cart, item],
      };

    case REMOVE_FROM_CART:
      let newCart = state.cart.filter((item) => item._id !== action.id);

      localStorage.setItem("cart", JSON.stringify([...newCart]));
      return {
        ...state,
        cart: [...newCart],
      };

    case CHANGE_QUANTITY:
      let cartProduct = state.cart.find((item) => item._id === action.id);
      cartProduct.count = action.value;
      cartProduct.total = cartProduct.price * action.value;

      localStorage.setItem("cart", JSON.stringify([...state.cart]));
      return {
        ...state,
      };
    case EMPTY_CART:
      localStorage.removeItem("cart");
      return {
        ...state,
        cart: [],
      };
    case LOAD_CART:
      const lc = JSON.parse(localStorage.getItem("cart"));
      if (lc !== null && lc !== undefined && lc.length > 0) {
        return {
          ...state,
          cart: lc,
        };
      } else {
        return {
          ...state,
        };
      }
    case CART_SAVE_SHIPPING:
      return {
        ...state,
        shipping: action.payload,
      };
    case CART_SAVE_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    default:
      return state;
  }
};

export { cartReducer };
