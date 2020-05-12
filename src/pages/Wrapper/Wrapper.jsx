import React from "react";
import { Navbar, NavFooter } from "../../components";

const Wrapper = props => {
  return (
    <div>
      <Navbar />
      <div className="dd" style={{ position: "relative", minHeight: "80vh" }}>
        {props.children}
      </div>
      <NavFooter />
    </div>
  );
};

export default Wrapper;
