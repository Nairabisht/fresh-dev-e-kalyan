import { handleClientScriptLoad } from "next/script";
import React, { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hadleSumbit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password", password);
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="actions">
            <label>
              <input type="checkbox" />
              Remmember me
            </label>
            <a href="/forgot-password" className="forgot password">
              Forgot Password
            </a>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="register-prompt">
          Don't have an account ? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
};
export default Login;
