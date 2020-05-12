import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  ContactUs,
  AboutUs,
  Cart,
  Login,
  SignUp,
  PageNotFound
} from "./pages";
import {
  AdminDash,
  AdminLogin,
  AdminUsers,
  AdminProducts,
  AdminSales,
  AdminAnalytics
} from "./admin";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/contact" component={ContactUs} />
    <Route exact path="/about" component={AboutUs} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/admin/dashboard" component={AdminDash} />
    <Route exact path="/admin/login" component={AdminLogin} />
    <Route exact path="/admin/users" component={AdminUsers} />
    <Route exact path="/admin/products" component={AdminProducts} />
    <Route exact path="/admin/sales" component={AdminSales} />
    <Route exact path="/admin/analytics" component={AdminAnalytics} />
    <Route component={PageNotFound} />
  </Switch>
);
export default Routes;
