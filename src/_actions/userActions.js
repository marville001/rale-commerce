import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAILED,
  LOGOUT_USER,
} from "./types";
import Axios from "axios";

const userSignUp = (user) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: user });
  try {
    const { data } = await Axios.post("/api/users", user);
    localStorage.setItem("token", data.token);
    dispatch(loginUser(data.user));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILED,
      error: error.response.data.message,
    });
  }
};

const userLogin = (user) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: user });
  try {
    const { data } = await Axios.post("/api/auth", user);
    localStorage.setItem("token", data.token);
    dispatch(loginUser(data.user));
    if (data.message) {
      console.log(data.message);

      dispatch({ type: USER_SIGNIN_FAILED, error: data.message });
    }
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAILED, error: error.response.data.message });
  }
};
const getProfileFetch = () => (dispatch) => {
  const token = localStorage.token;
  if (token) {
    fetch("/api/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message) {
          localStorage.removeItem("token");
        } else {
          dispatch(loginUser(data.user));
        }
      })
      .catch((error) => {});
  }
};
const loginUser = (user) => ({
  type: USER_SIGNIN_SUCCESS,
  user,
});
const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT_USER,
  });
};

export { userLogin, userSignUp, getProfileFetch, logoutUser };
