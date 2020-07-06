import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { logoutUser, openModal, openMenu } from "../../../_actions";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

import styles from "./Navbar.module.css";

const Navbar = ({ logoutUser }) => {
  const { user } = useSelector((state) => state.userReducer);
  const { cart } = useSelector((state) => state.cart);

  const [accOpen, setAccOpen] = useState(false);
  const [searchText, SetSearchText] = useState("");

  const handleSearch = () => {
    if (searchText !== "")
      window.location.replace(`/products/search?search=${searchText}`);
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <Link className={styles.logo} to="/home">
          RaleeComm Shopping
        </Link>

        <Link to="/cart" className={styles.cartBtn}>
          <ShoppingCartIcon style={{ fontSize: "2rem" }} />
          <span className="text-danger">{cart.length}</span>
        </Link>

        {!user._id ? (
          <Link to="/login" className={styles.loginBtn}>
            Login
          </Link>
        ) : (
          <div className={styles.modalBtn}>
            <span
              onClick={() => {
                setAccOpen(!accOpen);
              }}
            >
              <AccountCircleIcon style={{ fontSize: "2rem" }} />
              <ArrowDropDownIcon />
            </span>
            <div
              style={{
                display: accOpen ? "block" : "none",
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
                  {user.name}
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
      </div>
      <div className={styles.searchFilterContainer}>
        <div className={styles.searchContainer}>
          <div className={styles.searchInputContainer}>
            <input
              type="text"
              placeholder="Search product..."
              name="searchText"
              value={searchText}
              onChange={(e) => SetSearchText(e.target.value)}
            />
            {/* <button onClick={handleSearch}> */}
            <SearchOutlinedIcon
              style={{
                fontSize: "3rem",
                marginLeft: "-3.2rem",
                cursor: "pointer",
                height: "3.2rem",
                borderRadius: "5px",
              }}
              onClick={handleSearch}
            ></SearchOutlinedIcon>
          </div>
        </div>
        {/* <div className={styles.filterContainer}>filter</div> */}
      </div>
    </div>
  );
};

export default connect(null, { logoutUser, openModal, openMenu })(Navbar);
