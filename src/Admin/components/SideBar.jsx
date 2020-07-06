import React from "react";
import styled from "styled-components";

import { logoutAdmin } from "../../_actions/adminActions";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import { useDispatch } from "react-redux";

const Item = ({ name, Icon, action }) => {
  return (
    <div onClick={() => action()} className="item-container">
      <Icon style={{ fontSize: "4.5rem", zIndex: "3" }} />
      <div className="item-name">{name}</div>
    </div>
  );
};

const SideBar = (props) => {
  const handlePage = (page) => {
    if (!window.location.href.includes(page))
      window.location.replace("/admin/" + page);
  };

  const dispatch = useDispatch();
  return (
    <SideBarContainer>
      <div>
        <div onClick={() => handlePage("dashboard")} className="admin-logo">
          LoGo
        </div>
        <Item
          action={() => handlePage("products/add")}
          name="Add Product"
          Icon={AddBoxRoundedIcon}
        />
        <Item action={() => {}} name="Add user" Icon={PersonAddIcon} />
        <Item action={() => {}} name="View Profile" Icon={PersonPinIcon} />
      </div>
      <Item
        action={() => {
          dispatch(logoutAdmin());
        }}
        name="log out"
        Icon={ExitToAppIcon}
      />
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  background-color: var(--mainBgPurple);
  position: fixed;
  width: 8rem;
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 2rem 0;
`;

export default SideBar;
