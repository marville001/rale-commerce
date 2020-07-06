import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { adminLogin, getLogedInAdmin } from "../../_actions/adminActions";

const AdminLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const [inputError, setInputError] = useState("");

  const { loading, admin, error } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLogedInAdmin());
    return () => {};
  }, []);

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "dashboard";

  useEffect(() => {
    if (admin._id) {
      props.history.push("/admin/" + redirect);
    }
    return () => {};
  }, [admin]);

  const handleInputError = () => {
    setHasError(true);
    setInputError("Email or Password field cannot be empty ");
    setTimeout(() => {
      setHasError(false);
      setInputError("");
    }, 3000);
  };

  const handleSignIn = () => {
    if (email === "" || password === "") {
      handleInputError();
    } else {
      dispatch(adminLogin({ email, password }));
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="form-container flex-jcenter">
      <div className="form-content">
        <h2>Login</h2>
        <div
          className="error-container"
          style={{ display: hasError ? "flex" : "none" }}
        >
          {inputError && <span>{inputError}</span>}
        </div>
        {error && (
          <div className="flex-jcenter error-container">
            <h3>{error}</h3>
          </div>
        )}
        {loading && (
          <div className="flex-jcenter">
            <h3>Loading...</h3>
          </div>
        )}
        <div className="input-container input-shadow">
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email..."
          />
        </div>
        <div className="input-container input-shadow">
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password..."
          />
        </div>
        <div className="input-container flex-jcenter">
          <button className="login-button" onClick={handleSignIn}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
