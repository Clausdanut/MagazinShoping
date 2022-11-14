import React, { useState, useCallback, useContext } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //redirect to home page
        history.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create a user, login and redirect to homepage
        history.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="section1">
      <div className="login">
        <div className="home"></div>
        <Link to="/"></Link>
        <div class="login-box">
          <h2>Login</h2>
          <form>
            <div class="user-box">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div class="user-box">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>

            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <button type="submit" className="btn1" onClick={signIn}>
                Submit
              </button>
            </a>
            <p className="paragraf12">
              By signing-in you agree to the eShop Website Conditions of Use &
              Sale. Please see our Privacy Notice, our Cookies Notice and our
              Interest-Based Ads Notice.
            </p>

            <button className="login__registerButton" onClick={register}>
              Create your eShop Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
