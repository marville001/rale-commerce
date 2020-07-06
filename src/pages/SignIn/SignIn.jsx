import React, { useState, useEffect } from "react";

import styles from "./SignIn.module.css";
import { Wrapper } from "..";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../_actions";
import { Link } from "react-router-dom";
import { Error } from "../../components";

const SignIn = (props) => {
  const { loading, user, error } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userObj = {
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
    dispatch(userLogin(userObj));
    setEmail("");
    setPassword("");
  };

  return (
    <Wrapper>
      <div className={styles.signInContainer}>
        <div className={styles.signInContent}>
          <h2>Sign-In</h2>
          {loading && <div className={styles.loadingContainer}>Loading...</div>}
          {/* {error && <div className={styles.errorContainer}>{error}</div>} */}
          {error && <Error error={error} />}

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
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
            />
          </div>
          <button className={styles.loginBtn} onClick={handleSignIn}>
            Login
          </button>
          <p>Don't have an account ?</p>
          <Link
            to={
              redirect === "/" ? "/register" : `register?redirect=${redirect}`
            }
            className={styles.goToRegBtn}
          >
            Create Account
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignIn;
