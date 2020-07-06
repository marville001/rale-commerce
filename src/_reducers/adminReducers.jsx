import {
  ADMIN_SIGNIN_SUCCESS,
  ADMIN_SIGNIN_REQUEST,
  ADMIN_SIGNIN_FAILED,
  ADMIN_LOGOUT,
} from "../constants/adminConstants";

const adminReducer = (state = { admin: {} }, action) => {
  switch (action.type) {
    case ADMIN_SIGNIN_REQUEST:
      return { ...state, loading: true };
    case ADMIN_SIGNIN_SUCCESS:
      return { ...state, loading: false, admin: action.admin, error: "" };
    case ADMIN_SIGNIN_FAILED:
      return { ...state, loading: false, error: action.error };
    case ADMIN_LOGOUT:
      return { ...state, admin: {} };
    default:
      return state;
  }
};

export { adminReducer };
