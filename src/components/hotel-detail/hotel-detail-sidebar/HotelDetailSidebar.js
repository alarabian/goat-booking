import Link from "next/link";
import React from "react";

const HotelDetailSidebar = () => {
  return (
    <>
      <div className="hotelDetailSidebar">
        <div className="hotelInvoiceTable">
          <h5>Invoice Details</h5>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product </th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Room Price</td>
                <td>₹4420</td>
              </tr>
              <tr>
                <td>Extra Guest Coast</td>
                <td>₹0</td>
              </tr>
              <tr>
                <td>Extra Service</td>
                <td>₹150</td>
              </tr>
            </tbody>
          </table>
          <div className="totalCoast">
            <strong>Total Coast</strong>
            <span>₹4570</span>
          </div>
        </div>
        <form className="promoCode form">
          <input
            type="text"
            placeholder="Promo Code"
            className="form-control"
          />
          <button className="btn promoBtn" type="button">
            Apply
          </button>
        </form>
        <div className="paymentOp">
          <form>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Direct bank transfer
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Check payments
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Paypal
            </label>
          </div>

          <div className="note">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I have read and agree to the website terms and conditions
              </label>
            </div>
          </div>
          <Link href="/payment" className="btn paymentNow" type="button">Payment Now</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default HotelDetailSidebar;
