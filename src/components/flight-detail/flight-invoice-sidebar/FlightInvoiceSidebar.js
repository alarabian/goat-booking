import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

const FlightInvoiceSidebar = () => {
  return (
    <>
      <div className="flightInvoiceSidebar hotelInvoiceTable">
        <h5>Invoice Detail</h5>

        <div className="timer">
          <h6>Book now before tickets run out!</h6>
          <div className="time">
            <div className="icon">
              <MdAccessTimeFilled />{" "}
            </div>
            <div className="num">
              <p>
                {" "}
                29 <span>Min</span>
              </p>
              :
              <p>
                {" "}
                01 <span>Sec</span>
              </p>
            </div>
          </div>
        </div>

        <div className="asideTable">
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base Price</td>
                <td>₹442</td>
              </tr>
              <tr>
                <td>Travel Protection</td>
                <td>₹0</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>₹0</td>
              </tr>
              <tr>
                <td>Extra Service</td>
                <td>₹15</td>
              </tr>
              <tr>
                <td>Hot Deals & Discount</td>
                <td>₹0</td>
              </tr>
            </tbody>
          </table>
          <form className="promoCode form">
            <input
              type="text"
              placeholder="Promo Code"
              className="form-control"
            />
            <button className="btn promoBtn">Apply</button>
          </form>
          <div className="totalCoast">
            <strong>Total</strong>
            <span>₹475</span>
          </div>

          <div className="paymentOp mt-2">
            <form>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="flexRadioDefault1"
                  name="flexRadioDefault"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Direct bank transfer
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="flexRadioDefault2"
                  name="flexRadioDefault"
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
                  id="flexRadioDefault2"
                  name="flexRadioDefault"
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
                    id="flexCheckDefault"
                    defaultValue="true"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    I have read and agree to the website terms and conditions
                  </label>
                </div>
              </div>
              <Link href="/payment" className="btn paymentNow" type="button">
                Payment Now
              </Link>
            </form>
          </div>
        </div>

        <div className="paypal">
          <div className="figure">
          <Image src="/assets/images/paypal.png" alt="paypal.png" width={200} height={38} />
          </div>
          <p className="info"><FaInfoCircle /> Full refund, 3 days Cancelation</p>
        </div>
      </div>
    </>
  );
};

export default FlightInvoiceSidebar;
