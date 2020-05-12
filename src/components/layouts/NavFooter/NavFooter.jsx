import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";

import styles from "./NavFooter.module.css";
import { Link } from "react-router-dom";

const NavFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a target="blank" href="https://facebook.com/">
          <FacebookIcon />
        </a>
        <a target="blank" href="https://facebook.com/">
          <TwitterIcon />
        </a>
        <a target="blank" href="https://facebook.com/">
          <LinkedInIcon />
        </a>
        <a target="blank" href="https://facebook.com/">
          <InstagramIcon />
        </a>
        <a target="blank" href="https://facebook.com/">
          <PinterestIcon />
        </a>
      </div>
      <div style={{ textAlign: "center" }}>
        Copyright &copy; 2020 by{" "}
        <a href="https://mywebsite.com">Martin Mwangi</a>
      </div>
    </footer>
  );
};

export default NavFooter;
