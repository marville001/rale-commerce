import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Welcome,
  Cart,
  PageNotFound,
  Products,
  ProductDetails,
  SignIn,
  Register,
  Shipping,
  Payment,
  ProductSearch,
} from "./pages";
import Admin from "./Admin";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/home" component={Products} />
    <Route exact path="/products/search" component={ProductSearch} />
    <Route exact path="/product/:productId" component={ProductDetails} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/login" component={SignIn} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/shipping" component={Shipping} />
    <Route exact path="/payment" component={Payment} />
    <Route exact path="/placeorder" component={PlaceOrder} />
    <Route path="/admin" component={Admin} />
    <Route component={PageNotFound} />
  </Switch>
);
export default Routes;
