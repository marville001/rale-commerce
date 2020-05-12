import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userLogin, showAlert } from "../../_actions";
import { Wrapper } from "../";

import "../style.css";
import { Alert } from "../../components";

const Login = ({ userLogin, currUser, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [warning, setWarning] = useState(false);
  const user = {
    email,
    password
  };

  const setUnOpen = () => {
    setTimeout(() => {
      setWarning("");
      setOpen(false);
    }, 2000);
  };

  const handleLogin = async user => {
    if (email.length == 0 || password.length == 0) {
      setWarning("One or more field cannot be empty");
      setOpen(true);
      setUnOpen();
    } else if (password.length < 6) {
      setWarning("Password should be more than 6 characters");
      setOpen(true);
      setUnOpen();
    } else {
      userLogin(user);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Wrapper>
      <div className="row d-flex justify-content-center">
        {/* <div className="col-12 col-sm-12 col-md-6 dis-none m-0 p-0">
        <img src={ddd} alt="" style={{ width: "100%" }} />
      </div> */}
        <div className="col-12 col-sm-12 col-md-6 ">
          <div className="d-flex">
            <button type="button" className="btn btn-block btn-danger my-3">
              Login With Google
            </button>
            <button
              type="button"
              className="btn btn-block btn-primary my-3 ml-2"
            >
              Login With Facebook
            </button>
          </div>

          <p className="text-center">OR</p>
          <h5 className="text-center text-capitalize mb-4">Login with email</h5>
          <Alert open={open} warning={warning} />
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control login-passwod-input"
              id="password"
              name="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="btnS "
              onClick={async () => handleLogin(user)}
            >
              Login
            </button>
            <Link to="/signup">
              <p className="text-capitalize">Dont have an Account</p>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  currUser: state.currUser,
  error: state.error
});

export default connect(mapStateToProps, { userLogin, showAlert })(Login);
