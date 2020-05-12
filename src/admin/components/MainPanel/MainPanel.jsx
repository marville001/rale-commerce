import React from "react";
import styled from "styled-components";
import { AdminNavbar } from "..";

const MainPanel = ({ mainPanelChildren }) => {
  return (
    <MainPanelContainer>
      <div className="main-panel">
        <AdminNavbar />
        {mainPanelChildren}
      </div>
    </MainPanelContainer>
  );
};

const MainPanelContainer = styled.div`
  padding: 0px;
  background-color: #f7f7f7;
  color: #000;
`;

export default MainPanel;
