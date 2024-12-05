import Link from "next/link";
import React from "react";

const PaymentCard = () => {
  return (
    <>
      <div className="billingAddress paymentCard">
        <h5>Payment Method</h5>
        <form className="form row">
          <div className="col-md-12">
            <div className="form-group mb-3">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="number"
                placeholder="2456 1665 5155 5151"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-3">
              <label htmlFor="expiryDate">Start Date</label>
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-3">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group mb-3">
              <label htmlFor="expiryDate">CVC / CVV</label>
              <input
                type="number"
                className="form-control"
                placeholder="3 Digit"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="expiryDate">Name of card</label>
              <input
                type="text"
                className="form-control"
                placeholder="J. Smith"
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Save for my next payment
              </label>
            </div>
          </div>
        </form>
        <div className="proceedBtn"><Link href="/payment-now" className="btn btn-primary">Payment Now</Link></div>
      </div>
    </>
  );
};

export default PaymentCard;
