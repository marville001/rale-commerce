import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logoutUser } from "../../../_actions";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import styles from "./Navbar.module.css";
import NavBarSidePanel from "./NavBarSidePanel";

const Navbar = ({ cart, currUser, logoutUser }) => {
  const [accOpen, setAccOpen] = useState(false);
  const [SidePanelOpen, SetSidePanelOpen] = useState(false);
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/">RaleeComm Shopping</Link>
        </div>
        <div className={styles.routeLinks}>
          <Link to="/">Home</Link>
        </div>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search products..."
            className={styles.searchInput}
          />
          <button className={styles.searchBtn} type="button">
            Search
          </button>
        </div>
        <div>
          <Link to="/cart" className={styles.cartBtn}>
            <ShoppingCartIcon />
            <span className="text-danger">{cart.length}</span>
          </Link>
        </div>

        {!currUser._id ? (
          <div>
            <Link to="/login" className={styles.loginBtn}>
              Login
            </Link>
          </div>
        ) : (
          <div className={styles.modalBtn}>
            <span
              onClick={() => {
                setAccOpen(!accOpen);
              }}
            >
              <AccountCircleIcon />
              <ArrowDropDownIcon />
            </span>
            <div
              style={{
                display: accOpen ? "block" : "none"
              }}
              className={styles.modalBtnContent}
            >
              <div className={styles.modalLink}>
                <Link
                  onClick={() => {
                    setAccOpen(!accOpen);
                  }}
                  to="/user/profile"
                >
                  User Profile
                </Link>
              </div>
              <div
                onClick={() => {
                  logoutUser();
                  setAccOpen(!accOpen);
                }}
                className={styles.modalLink}
              >
                Log Out
              </div>
            </div>
          </div>
        )}

        <div
          className={styles.humberger}
          onClick={() => SetSidePanelOpen(!SidePanelOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <NavBarSidePanel
        className="bbcb cbdbdb"
        open={SidePanelOpen}
        close={SetSidePanelOpen}
        styles={styles}
        id={currUser._id}
        logoutUser={logoutUser}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    currUser: state.currUser
  };
};

export default connect(mapStateToProps, { logoutUser })(Navbar);
