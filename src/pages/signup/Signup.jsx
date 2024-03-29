import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="auth-form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="auth-form"
      >
        <input type="text" className="username" placeholder="username" />
        <input type="email" className="email" placeholder="email" />
        <input type="password" name="password" id="" placeholder="password" />
        <button className="submit-btn">Sign Up</button>
      </form>
      <p className="login-signup-text">
        Already have an account ?{" "}
        <Link to="/login" className="login-signup-link">
          Click here
        </Link>
      </p>
      <div className="agree-container">
        <input type="checkbox" name="agree-terms" />
        <p>By continuing , I agree to the terms of use & privacy policy.</p>
      </div>
    </div>
  );
};

export default Signup;
