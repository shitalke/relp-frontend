import React, { useState } from "react";
import { createUserAccount, loginUser } from "../services/signup";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [err, setErr] = useState();
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.confirmPassword.value !== form.password.value) {
      return setErr("Those passwords didn’t match. Try again.");
    } else {
      setErr("");
    }

    createUserAccount({
      username: form.uname.value,
      email: form.email.value,
      password: form.password.value,
      avatar: "toilet",
    })
      .then(() => {
        setErr("");
        loginUser(form.email.value, form.password.value).then(
          navigate("/", { replace: true })
        );
      })
      .catch((err) => setErr("One or more fields is badly formatted, try again."));
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="email" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" required />
        </div>
        <div className="input-container">
          <label>Confirm Password </label>
          <input type="password" name="confirmPassword" required />
        </div>

        <div className="button-container">
          <input type="submit" />
        </div>
        <div>{err}</div>
      </form>
    </div>
  );
}

export default Signup;
