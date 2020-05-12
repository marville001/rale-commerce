import {
  LOAD_PRODUCTS_FAILED,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_PENDING,
  ADD_TO_CART,
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  EMPTY_CART,
  LOGIN_USER,
  SHOW_ERROR,
  SET_DETAILS_PRODUCT,
  UN_SHOW_ERROR,
  LOGOUT_USER,
  REMOVE_FROM_CART
} from "../_actions/types";

const initState = {
  products: [],
  category: "",
  detailsProduct: {},
  loading: false,
  error: "",
  anyError: false,
  cart: [],
  currUser: {},
  cartTotal: 0,
  isLogedIn: false
};

export const productReducers = (state = initState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_PENDING:
      return { ...state, loading: true };
    case LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.products
      };
    case LOAD_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case SHOW_ERROR:
      return {
        ...state,
        anyError: true,
        error: action.error
      };
    case UN_SHOW_ERROR:
      return {
        ...state,
        anyError: false,
        error: ""
      };

    case LOGIN_USER:
      return {
        ...state,
        currUser: action.user
      };
    case LOGOUT_USER:
      return {
        ...state,
        currUser: {}
      };

    case ADD_TO_CART:
      let tempProducts = [...state.products];
      const index = tempProducts.indexOf(
        state.products.find(item => item._id === action.id)
      );
      let product = tempProducts[index];
      let existingItem = state.cart.find(item => item._id === action.id);

      if (existingItem) {
        product.count += 1;
        product.total += product.price;
        return {
          ...state,
          products: tempProducts,
          cartTotal: state.cartTotal + product.price
        };
      } else {
        product.count = 1;
        product.total = product.price;
        return {
          ...state,
          products: tempProducts,
          cart: [...state.cart, product],
          cartTotal: state.cartTotal + product.price
        };
      }
    case REMOVE_FROM_CART:
      let tempProducts2 = [...state.products];
      const index2 = tempProducts2.indexOf(
        state.products.find(item => item._id === action.id)
      );
      let product2 = tempProducts2[index2];

      let newCart = state.cart.filter(item => item._id !== action.id);

      let newCartTotal = state.cartTotal - product2.price * product2.count;

      product2.count = 0;
      product2.total = 0;
      return {
        ...state,
        products: tempProducts2,
        cart: [...newCart],
        cartTotal: newCartTotal
      };
    case INCREMENT_COUNT:
      let addedItem = state.products.find(item => item._id === action.id);
      addedItem.count += 1;
      addedItem.total = addedItem.count * addedItem.price;
      let newTotal = state.cartTotal + addedItem.price;

      return {
        ...state,
        cartTotal: newTotal
      };
    case DECREMENT_COUNT:
      let added = state.products.find(item => item._id === action.id);
      let newt = 0;
      if (added.count <= 1) {
        newt = state.cartTotal - added.price;
        let mynewcart = state.cart.filter(item => item._id !== action.id);
        return {
          ...state,
          cart: mynewcart,
          cartTotal: newt
        };
      } else {
        added.count -= 1;
        added.total = added.count * added.price;
        newt = state.cartTotal - added.price;
        return {
          ...state,
          cartTotal: newt
        };
      }
    case EMPTY_CART:
      return {
        ...state,
        cart: [],
        cartTotal: 0
      };
    default:
      return state;
  }
};
