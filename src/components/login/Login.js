import React from "react";
import LoginForm from "./login-form/LoginForm";
import Image from "next/image";

const Login = () => {
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
                <h3>Sign in to Abaris Softech</h3>
                <p>
                  Sign in to your account and make recharges and booking faster
                </p>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
