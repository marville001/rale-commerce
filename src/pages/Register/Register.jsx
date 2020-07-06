import React, { useState, useEffect } from "react";

import styles from "../SignIn/SignIn.module.css";
import { Wrapper } from "..";
import { useSelector, useDispatch } from "react-redux";
import { userSignUp } from "../../_actions";
import { Link } from "react-router-dom";
import { Error } from "../../components";

const Register = (props) => {
  const userReducer = useSelector((state) => state.userReducer);
  const { loading, user, error } = userReducer;

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const userObj = {
    name,
    email,
    password,
  };

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/home";

  useEffect(() => {
    if (user._id) {
      props.history.push(redirect);
    }
    return () => {};
  }, [user]);

  const handleSignIn = () => {
    dispatch(userSignUp(userObj));
    setEmail("");
    setPassword("");
    setName("");
    setRePassword("");
  };

  return (
    <Wrapper>
      <div className={styles.signInContainer}>
        <div className={styles.signInContent}>
          <h2>Create Account</h2>
          {loading && <div className={styles.loadingContainer}>Loading...</div>}
          {/* {error && <div className={styles.errorContainer}>{error}</div>} */}
          {error && <Error error={error} />}

          <div className={styles.inputContainer}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name..."
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email..."
            />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="rePassword">Confirm Password</label>
            <input
              type="password"
              name="rePassword"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              placeholder="Confirm Password..."
            />
          </div>
          <button className={styles.loginBtn} onClick={handleSignIn}>
            Register
          </button>
          <p>
            Already have an account ?{" "}
            <Link
              to={redirect === "/" ? "/login" : `login?redirect=${redirect}`}
              className={styles.goToRegBtn}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Register;
