import Link from "next/link";
import React from "react";

const RegisterForm = () => {
  return (
    <>
      <form className="authLoginForm row">
        <div className="col-md-6">
          {" "}
          <div className="form-group mb-3">
            <label htmlFor="first-name">First Name</label>
            <input type="text" className="form-control" placeholder="John" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-3">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" className="form-control" placeholder="Smith" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group mb-3">
            <label htmlFor="mobile-email">Enter Mobile Number / Email ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Mobile Number / Email ID"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="enter-password">Enter Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Your Password"
            />
          </div>
          <div className="note">
            <p>
              By clicking submit, you agree to
              <Link href="#">Terms of use</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">E-sign & communication Authorization</Link>
            </p>
          </div>
          <div className="form-group authBtn">
            <button className="btn">Sign In</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
