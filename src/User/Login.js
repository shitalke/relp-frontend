import React, {useState} from "react";
import {loginUser} from "../services/signup";
import { useNavigate } from "react-router-dom";

function Login() {
  const [err, setErr] = useState("");
  let navigate = useNavigate();


  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
    loginUser(event.target.email.value, event.target.password.value)
      .then(() => {
        setErr("");
        navigate("/", { replace: true })
      })
      .catch(err => setErr(err.message));
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
      <div>{err}</div>
    </div>
  );
}

export default Login;
