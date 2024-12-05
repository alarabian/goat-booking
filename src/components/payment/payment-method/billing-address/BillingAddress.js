import React from "react";
import BillingForm from "./billing-form/BillingForm";

const BillingAddress = () => {
  return (
    <>
      <div className="billingAddress">
        <div className="header">
          <div className="title">
            <h5>Billing address</h5>
            <span>Transaction ID: 25246584</span>
          </div>
          <div className="total">
            <span>Total Payment Amount: ₹457</span>
          </div>
        </div>
        <BillingForm />
      </div>
    </>
  );
};

export default BillingAddress;
