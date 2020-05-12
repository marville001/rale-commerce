import React from "react";
import styled from "styled-components";
import { MainPanel, SidePanel } from "../";
const AdminWrapper = ({ children }) => {
  return (
    <AdminWrapperContainer open={true}>
      <SidePanel left="0px" />
      <MainPanel mainPanelChildren={children} />
    </AdminWrapperContainer>
  );
};

const AdminWrapperContainer = styled.div`
  background-color: #000;
  padding: 0px;
  display: grid;
  grid-template-columns: 1fr 5fr;
  min-height: 100vh;
  color: white;
`;

export default AdminWrapper;
