import React from "react";
import {loginUser} from "../services/signup";

function Login() {

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
    loginUser(event.target.email.value, event.target.password.value)
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="email" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Login;
