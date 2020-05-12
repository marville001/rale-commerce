import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Routes from "./routes";
import { loadProducts, getProfileFetch } from "./_actions";

class App extends Component {
  componentDidMount() {
    this.props.loadProducts("");
    this.props.getProfileFetch();
  }
  componentWillUnmount() {
    localStorage.removeItem("token");
  }

  render() {
    return <Routes />;
  }
}

const ErrorModal = styled.div`
  width: 80%;
  color: #000;
  text-align: center;
  position: absolute;
  z-index: 2;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
`;

export default connect(null, { loadProducts, getProfileFetch })(App);
