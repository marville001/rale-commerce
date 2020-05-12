import {
  LOAD_PRODUCTS_FAILED,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_PENDING,
  ADD_TO_CART,
  LOGIN_USER,
  LOGOUT_USER,
  UN_SHOW_ERROR,
  SHOW_ERROR,
  INCREMENT_COUNT,
  EMPTY_CART,
  SET_DETAILS_PRODUCT,
  DECREMENT_COUNT,
  REMOVE_FROM_CART
} from "./types";
// import { products } from "../products";

export const loadProducts = category => async dispatch => {
  dispatch({ type: LOAD_PRODUCTS_PENDING });

  try {
    const res = await fetch(
      `http://localhost:5050/api/products?category=${category}`
    );
    const result = await res.json();
    let tempProducts = [];
    result.products.forEach(item => {
      tempProducts.push(item);
    });
    if (result.success) {
      dispatch({
        type: LOAD_PRODUCTS_SUCCESS,
        products: tempProducts
      });
    } else {
      dispatch({
        type: LOAD_PRODUCTS_FAILED,
        error: result.message
      });
      dispatch(showAlert(result.message));
      setTimeout(() => {
        dispatch(hideAlert());
      }, 2000);
    }
  } catch (error) {
    dispatch({
      type: LOAD_PRODUCTS_FAILED,
      error: error.message
    });
    dispatch(showAlert(error.message));
    setTimeout(() => {
      dispatch(hideAlert());
    }, 2000);
  }
};

export const addToCart = id => dispatch => {
  dispatch({ type: ADD_TO_CART, id });
};
export const removeFromCart = id => dispatch => {
  dispatch({ type: REMOVE_FROM_CART, id });
};
export const incrementCount = id => dispatch => {
  dispatch({ type: INCREMENT_COUNT, id });
};
export const decrementCount = id => dispatch => {
  dispatch({ type: DECREMENT_COUNT, id });
};
export const emptyCart = () => dispatch => {
  dispatch({ type: EMPTY_CART });
};

export const userSignUp = user => dispatch => {
  fetch("http://localhost:5050/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(resp => resp.json())
    .then(data => {
      if (data.message) {
        dispatch(showAlert(data.message));
        setTimeout(() => {
          dispatch(hideAlert());
        }, 2000);
      } else {
        localStorage.setItem("token", data.token);
        dispatch(loginUser(data.user));
      }
    })
    .catch(error => {
      dispatch(showAlert(error.message));
      setTimeout(() => {
        dispatch(hideAlert());
      }, 2000);
    });
};

// export const userLogin = user => dispatch => {
//   fetch("http://localhost:5050/api/auth", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(user)
//   })
//     .then(resp => resp.json())
//     .then(data => {
//       if (data.message) {
//         dispatch(showAlert(data.message));
//         setTimeout(() => {
//           dispatch(hideAlert());
//         }, 2000);
//       } else {
//         localStorage.setItem("token", data.token);
//         dispatch(loginUser(data.user));
//       }
//     })
//     .catch(error => {
//       dispatch(showAlert(error.message));
//       setTimeout(() => {
//         dispatch(hideAlert());
//       }, 2000);
//     });
// };

export const userLogin = user => dispatch => {
  fetch("http://localhost:5050/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(resp => resp.json())
    .then(data => {
      if (data.message) {
        dispatch(showAlert(data.message));
        setTimeout(() => {
          dispatch(hideAlert());
        }, 2000);
      } else {
        localStorage.setItem("token", data.token);
        dispatch(loginUser(data.user));
      }
    })
    .catch(error => {
      dispatch(showAlert(error.message));
      setTimeout(() => {
        dispatch(hideAlert());
      }, 2000);
    });
};

export const getProfileFetch = () => dispatch => {
  const token = localStorage.token;
  if (token) {
    fetch("http://localhost:5050/api/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          dispatch(showAlert(data.message));
          setTimeout(() => {
            dispatch(hideAlert());
          }, 2000);
          localStorage.removeItem("token");
        } else {
          dispatch(loginUser(data.user));
        }
      })
      .catch(error => {
        dispatch(showAlert(error.message));
        setTimeout(() => {
          dispatch(hideAlert());
        }, 2000);
      });
  }
};

const loginUser = userObj => ({
  type: LOGIN_USER,
  user: userObj
});

export const showAlert = error => ({
  type: SHOW_ERROR,
  error
});
const hideAlert = () => ({
  type: UN_SHOW_ERROR
});

export const logoutUser = () => dispatch => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT_USER
  });
};

export const setDetailsProduct = id => dispatch => {
  dispatch({
    type: SET_DETAILS_PRODUCT,
    id
  });
};
