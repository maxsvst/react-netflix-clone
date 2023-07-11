import { useState } from "react";
import "./SignUpScreen.css";

const SignUpScreen = () => {
  const register = (e) => {
    e.preventDefault();
  };

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signUpScreen">
      <form onSubmit={register}>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signUpScreen__gray">New to Netflix? </span>
          <span className="signUpScreen__link" onClick={register}>
            Sign Up now.{" "}
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
