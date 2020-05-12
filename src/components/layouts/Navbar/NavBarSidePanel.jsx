import React from "react";
import { Link } from "react-router-dom";

const NavBarSidePanel = ({ styles, open, close, id, logoutUser }) => {
  const handleClick = () => {
    close(false);
  };
  return (
    <div className={styles.sidepanel} style={{ left: open ? "0" : "-100%" }}>
      <Link to="/" className={styles.srouteLinks} onClick={handleClick}>
        Home
      </Link>
      <Link to="/contact" className={styles.srouteLinks} onClick={handleClick}>
        Contact
      </Link>
      <Link to="/about" className={styles.srouteLinks} onClick={handleClick}>
        AboutUs
      </Link>

      <Link to="/cart" className={styles.srouteLinks} onClick={handleClick}>
        Cart
      </Link>
      {!id && (
        <Link to="/login" className={styles.srouteLinks} onClick={handleClick}>
          Login
        </Link>
      )}
      {id && (
        <div
          style={{
            marginTop: "auto",
            marginBottom: "150px",
            cursor: "pointer"
          }}
          className={styles.srouteLinks}
          onClick={() => {
            handleClick();
            logoutUser();
          }}
        >
          Log out
        </div>
      )}
    </div>
  );
};

export default NavBarSidePanel;
