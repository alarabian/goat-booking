import Link from "next/link";
import React from "react";

const LoginForm = () => {
  return (
    <>
      <form className="authLoginForm">
        <div className="form-group mb-3">
          <label htmlFor="enter your email">enter your email</label>
          <input
            type="mail"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="enter password">enter password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
          />
          <div className="forgotPass">
            <Link href="#">forgot password</Link>
          </div>
        </div>
        <div className="form-group authBtn">
          <button className="btn">Sign In</button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
