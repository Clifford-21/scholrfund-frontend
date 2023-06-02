import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/LoginForm.css";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <div className="content-area">
      <h1 id="scholr-fund-welcome" className="poppel-welcome">ScholrFund</h1>
      <h3 className="poppel-welcome">Because education is not a priviledge</h3>
      <form id="login-form" action="/">
        <input id="email-field" class="form-control form-control-lg" type="email" placeholder="email" aria-label=".form-control-lg example" onChange={(e) => setUserEmail(e.target.value)} />
        <input id="password-field" class="form-control form-control-lg" type="password" placeholder="password" aria-label=".form-control-lg example" onChange={(e) => setUserPassword(e.target.value)} />
        <Link to="/apply"><button id="login-btn" type="button" class="btn btn-success">log in</button></Link>
        <Link to="/register"><p id="register-text">New to ScholrFund? Join and find your dream sponsor.</p></Link>
      </form>
    </div>
  )
}

export default LoginForm