import {
  ADMIN_SIGNIN_REQUEST,
  ADMIN_SIGNIN_FAILED,
  ADMIN_SIGNIN_SUCCESS,
  ADMIN_LOGOUT,
} from "../constants/adminConstants";

import Axios from "axios";

const adminLogin = (admin) => async (dispatch) => {
  dispatch({ type: ADMIN_SIGNIN_REQUEST });
  try {
    const { data } = await Axios.post("/api/admin/auth", admin);
    localStorage.setItem("adminToken", data.token);

    dispatch(loginAdmin(data.admin));
  } catch (error) {
    dispatch({
      type: ADMIN_SIGNIN_FAILED,
      error: error.response.data.message,
    });
    localStorage.removeItem("adminToken");
  }
};

const getLogedInAdmin = () => async (dispatch) => {
  const adminToken = localStorage.getItem("adminToken");
  if (adminToken) {
    try {
      const { data } = await Axios.get("/api/admin/me", {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": adminToken,
        },
      });
      dispatch(loginAdmin(data.admin));
    } catch (error) {
      dispatch({
        type: ADMIN_SIGNIN_FAILED,
        error: error.response.data.message,
      });
    }
  }
};

const loginAdmin = (admin) => ({
  type: ADMIN_SIGNIN_SUCCESS,
  admin,
});

const logoutAdmin = () => (dispatch) => {
  dispatch({ type: ADMIN_LOGOUT });
  localStorage.removeItem("adminToken");
};

export { adminLogin, getLogedInAdmin, logoutAdmin };
