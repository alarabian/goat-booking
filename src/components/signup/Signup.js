import React from "react";
import RegisterForm from "./register-form/RegisterForm";
import Image from "next/image";

const Signup = () => {
  return (
    <>
      <section className="authMainSec">
        <div className="container">
          <div className="innerAuth">
            <div className="authFigure">
              <Image
                src="/assets/images/authLogin.png"
                alt="AUTH"
                className="img-fluid"
              />
            </div>
            <div className="authLogin">
              <div className="title">
                <h3>{"Let's"} Get Started</h3>
                <p>Please enter your all the fields</p>
              </div>
              <RegisterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
