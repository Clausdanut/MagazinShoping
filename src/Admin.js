import "./Login.css";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { auth } from "./firebase";
import AdminSidebar from "./AdminSidebar";
import "./design.css";
import { db } from "./firebase";

function Admin() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Submit = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth.user.displayName !== "admin") {
          alert("nu esti admin");
        } else {
          history.push("/admin-panou");
        }
      })
      .catch((error) => alert(error.message));
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
              <button type="submit" className="btn1" onClick={Submit}>
                Submit
              </button>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin;
