import React from "react";
import { createUserAccount } from "../services/signup";

function Signup() {
  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
    console.log(event.target.uname.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    console.log(event.target.password.value);


    const reqBody = {
        "username": event.target.uname.value,
        "email": event.target.email.value,
        "password": event.target.password.value,
        "avatar": "toilet"
    }
    
    createUserAccount(reqBody);
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
        {/* <div className="input-container">
          <label>Confirm Password </label>
          <input type="password" name="password" required />
        </div> */}
        
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Signup;
