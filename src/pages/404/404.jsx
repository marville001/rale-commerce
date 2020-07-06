import React, { Component } from "react";

class PageNotFound extends Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     window.location.href = "/home";
  //   }, 3000);
  // }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h4 className="display-3 text-primary">404</h4>
            <h4>error</h4>
            <h2>page not found</h2>
            <h5>
              the requested URL{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>{" "}
              was not found
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
export default PageNotFound;
