import React from "react";
import PaymentMode from "./payment-mode/PaymentMode";
import PaymentMethod from "./payment-method/PaymentMethod";

const Payment = () => {
  return (
    <>
      <div className="paymentSec sectionSpace">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="paymentMode">
                <h5 className="mb-3">Select any one</h5>
                <PaymentMode />
              </div>
            </div>
            <div className="col-md-9">
              <PaymentMethod />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
