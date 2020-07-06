import React from "react";

import styled from "styled-components";

const Main = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

const MainContainer = styled.div`
  background-color: #fff;
  height: 100vh;
  margin-left: 8rem;
  padding: 2rem;
`;

export default Main;
