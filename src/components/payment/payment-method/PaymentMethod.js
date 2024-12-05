import React from "react";
import BillingAddress from "./billing-address/BillingAddress";
import PaymentCard from "./payment-card/PaymentCard";
import Link from "next/link";

const PaymentMethod = () => {
  return (
    <>
      <div className="paymentMethod orderCard">
        <div className="header">
          <h5> 4532.00</h5>
        </div>
        <div className="orderList">
          <ul>
            <li>
              <Link href="/order">Order</Link>
            </li>
            <li>
              <Link href="/order-summary">Summary</Link>
            </li>
            <li className="active">
              <Link href="/payment">Payment</Link>
            </li>
            <li>
              <Link href="/payment-succuss">Done</Link>
            </li>
          </ul>
        </div>
        <BillingAddress />
      </div>
      <PaymentCard />
    </>
  );
};

export default PaymentMethod;
