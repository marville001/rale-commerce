import React, { useEffect } from "react";
import { SideBar, Main } from "../components";
import { useDispatch, useSelector } from "react-redux";

import { getLogedInAdmin } from "../../_actions/adminActions";

const Wrapper = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLogedInAdmin());
  }, []);
  return (
    <div>
      <SideBar />
      <Main children={children} />
    </div>
  );
};

export default Wrapper;
