import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import MenuIcon from "@material-ui/icons/Menu";

const MainPanel = ({ togleSidebar, currWidth }) => {
  return (
    <>
      <div className="m-header">
        <MenuIcon
          onClick={() => togleSidebar(currWidth)}
          style={{
            fontSize: "40px",
            cursor: "pointer",
            color: "black",
            marginRight: "auto",
            marginLeft: "20px"
          }}
        />
        <div style={{ cursor: "pointer", marginRight: "20px" }}>
          <NotificationsOutlinedIcon />
        </div>
        <div style={{ cursor: "pointer" }}>
          <AccountCircleIcon />
        </div>
      </div>
    </>
  );
};

export default MainPanel;
