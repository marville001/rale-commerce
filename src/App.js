import React, { Component } from "react";
import { connect } from "react-redux";
import Routes from "./routes";
import { loadProducts, getProfileFetch, loadCart } from "./_actions";
import { AddToCartModal } from "./components";

class App extends Component {
  componentDidMount() {
    this.props.loadProducts("");
    this.props.getProfileFetch();
    this.props.loadCart();
  }

  render() {
    return (
      <>
        <Routes />
        <AddToCartModal />
      </>
    );
  }
}

// const ErrorModal = styled.div`
//   width: 80%;
//   color: #000;
//   text-align: center;
//   position: absolute;
//   z-index: 2;
//   top: 10%;
//   left: 50%;
//   transform: translate(-50%, -10%);
// `;

export default connect(null, { loadProducts, getProfileFetch, loadCart })(App);
