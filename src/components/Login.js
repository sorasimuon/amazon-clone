import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let errorMessage = "";

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => {
        // alert(error.message);
        document.getElementById("errorMessage").innerText = error.message;
      });
  };

  const register = (e) => {
    //Do register with Firebase
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it sucessfully created a new user with email and passord
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => {
        document.getElementById("errorMessage").innerText = error.message;
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-image"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="login-container">
        <h1> Sign-In</h1>
        <form>
          <div className="form-group">
            <label for="inputUsername">Username</label>
            <input
              type="email"
              className="form-control"
              id="inputUsername"
              aria-describedby="emailHelp"
              placeholder="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label for="inputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p id="errorMessage"></p>
          <p>
            By continuing, you agree to Amazon's Fake Clone Conditions of Use
            and Privacy Notice.
          </p>
          <button type="submit" className="button-submit" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p> Or </p>
        <button
          id="NewAccount"
          className="btn btn-success btn-new-account"
          onClick={register}
        >
          Create new account
        </button>
      </div>
    </div>
  );
}

export default Login;
