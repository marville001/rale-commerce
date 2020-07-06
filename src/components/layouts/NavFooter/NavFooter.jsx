import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";

import styles from "./NavFooter.module.css";

const Social = ({ link, Icon, name }) => {
  return (
    <a
      target="blank"
      style={{ display: "flex", alignItems: "center" }}
      href={link}
    >
      <Icon style={{ fontSize: "2.2rem" }} className={styles.sicon} />{" "}
      <span className={styles.sname}>{name}</span>
    </a>
  );
};

const NavFooter = () => {
  return (
    <footer className={styles.footer}>
      <div style={{ textAlign: "center", fontSize: "1.8rem" }}>
        Copyright &copy; 2020. All rights reserved
        <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
          By Martin Mwangi >{" "}
          <span
            style={{
              fontSize: "1.2rem",
              borderBottom: "1px dashed var(--mainBgPurple)",
              color: "teal"
            }}
          >
            mwangimartin1904@gmail.com
          </span>
        </p>
      </div>
      <div className={styles.socialLinks}>
        <Social
          link="https://facebook.com/marville001"
          name="Facebook"
          Icon={FacebookIcon}
        />
        <Social link="https://twitter.com/marville001" Icon={TwitterIcon} />
        <Social link="https://instagram.com/marville001" Icon={InstagramIcon} />
        <Social link="https://pinterest.com/marville001" Icon={PinterestIcon} />
        <Social link="https://linkedin.com/marville001" Icon={LinkedInIcon} />
      </div>
    </footer>
  );
};

export default NavFooter;
