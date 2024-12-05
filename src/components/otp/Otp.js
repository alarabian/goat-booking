import Image from "next/image";
import React from "react";

const Otp = () => {
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
                <h3>
                  Verify Your <br /> Phone Number / Email ID
                </h3>
                <p>
                  A 4 digit One Time Password (OTP) has been sent to your given
                  email address will expire in 15 minutes, after which you will
                  need to resend the code.
                </p>
              </div>
              <div className="otpInfo">
                <h5>enter otp</h5>
                <ul className="enterBox">
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
              </div>
              <div className="authBtn">
                <button className="btn">submit now</button>
              </div>
              <div className="resendOTP">
                <span>resend otp</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Otp;
