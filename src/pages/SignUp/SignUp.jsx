import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { userSignUp, showAlert } from "../../_actions";
import { Wrapper } from "../";

import "../style.css";

const SignUp = ({ userSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const user = {
    email,
    password,
    name: name,
    isAdmin: false
  };

  const handleLogin = () => {
    userSignUp(user);
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <Wrapper>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 ">
          <div className="d-flex">
            <button type="button" className="btn btn-block btn-danger my-3">
              SignUp With Google
            </button>
            <button
              type="button"
              className="btn btn-block btn-primary my-3 ml-2"
            >
              SignUp With Facebook
            </button>
          </div>

          <p className="text-center">OR</p>
          <h5 className="text-center text-capitalize mb-4">
            Sign Up with email
          </h5>
          <div className="form-group">
            <label htmlFor="fname">Name</label>
            <input
              type="text"
              className="form-control"
              id="fname"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Name ..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email ..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control "
              id="password"
              name="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
          </div>
          <div>
            <button
              type="button"
              className="btnS"
              onClick={() => handleLogin()}
            >
              Create Account
            </button>
            <Link to="/login">
              <p className="text-capitalize">Already have an account Account</p>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default connect(null, { userSignUp })(SignUp);
