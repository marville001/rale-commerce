import React from "react";
import styled from "styled-components";
import "../../main.css";
import CList from "../CList/CList";
import avatar from "./../index.jpeg";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssessmentIcon from "@material-ui/icons/Assessment";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const SidePanel = () => {
  return (
    <SidePanelContainer>
      <div className="side-panel">
        <div className="s-profile">
          <div className="s-avatar">
            <img src={avatar} alt="" />
          </div>
          <div className="s-username">{"Martin Mwangi"}</div>
        </div>
        <div className="s-head">
          <h4>Rale ecommerce</h4>
        </div>
        <div className="s-list">
          <CList route="dashboard" icon={<DashboardIcon />} name="dashboard" />
          <CList route="analytics" icon={<AssessmentIcon />} name="analytics" />
          <CList
            route="products"
            icon={<DashboardIcon />}
            name=" Manage products"
          />
          <CList
            route="users"
            icon={<VerifiedUserIcon />}
            name=" Manage Users"
          />
          <CList route="sales" icon={<VerifiedUserIcon />} name="Sales" />
        </div>
      </div>
    </SidePanelContainer>
  );
};

const SidePanelContainer = styled.div`
  padding: 0px;
`;

export default SidePanel;
