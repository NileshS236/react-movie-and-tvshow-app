import React, { useState } from "react";

import { StyledLogin } from "./styles/StyledLogin";

import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

import RMDBLogo from "./images/reactMovie_logo.png";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <StyledLogin>
      <Link to="/">
        <img src={RMDBLogo} alt="rmdb-logo" />
      </Link>
      <div className="login-container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login-signInButton">
            Sign In
          </button>
        </form>
        <p>Don't have an Account?</p>
        <button onClick={register} className="login-sregisterButton">
          Create One
        </button>
      </div>
    </StyledLogin>
  );
};

export default Login;
