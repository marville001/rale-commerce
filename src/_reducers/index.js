import { combineReducers } from "redux";

import {
  productDetailReducer,
  productReducers,
  productSaveReducer,
  productSearchReducer,
} from "./productReducer";
import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducers";
import { adminReducer } from "./adminReducers";

export const rootReducer = combineReducers({
  products: productReducers,
  productDetails: productDetailReducer,
  cart: cartReducer,
  userReducer,
  productSave: productSaveReducer,
  admin: adminReducer,
  productSearch: productSearchReducer,
});
