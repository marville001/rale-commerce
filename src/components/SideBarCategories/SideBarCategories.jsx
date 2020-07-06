import React from "react";
import { connect } from "react-redux";

import LocalMoviesIcom from "@material-ui/icons/LocalMovies";

import styles from "./SideBarCategories.module.css";

const Item = ({ Icon, text }) => {
  return (
    <li
      onClick={(e) => {
        alert("action......" + text);
      }}
    >
      <Icon /> {text}
    </li>
  );
};

const SideBarCategories = ({ menuOpen }) => {
  return (
    <div
      style={{ transform: menuOpen && "translateX(0)" }}
      className={styles.sideBarContainer}
    >
      <ul>
        <Item Icon={LocalMoviesIcom} text={"shoes"} />
        <Item Icon={LocalMoviesIcom} text={"jeans"} />
        <Item Icon={LocalMoviesIcom} text={"women fashion"} />
        <Item Icon={LocalMoviesIcom} text={"dress"} />
        <Item Icon={LocalMoviesIcom} text={"men fashion"} />
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  menuOpen: state.products.menuOpen,
});

export default connect(mapStateToProps, {})(SideBarCategories);
