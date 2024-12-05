import React from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { MdAccountBalance } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import Link from "next/link";

const PaymentSuccess = () => {
  return (
    <>
      <div className="pageOrder sectionSpace">
        <div className="paymentSuccess">
          <div className="orderCard m-0">
            <div className="header m-0">
              <h5>
                <MdAccountBalance /> Available Balance
              </h5>
              <p>
                <LiaRupeeSignSolid /> 4532.00{" "}
              </p>
            </div>
          </div>
          <div className="orderList">
            <ul className="justify-content-center">
              <li><Link href="/order">Order</Link></li>
              <li><Link href="/order-summary">Summary</Link></li>
              <li><Link href="/payment">Payment</Link></li>
              <li className="active"><Link href="/payment-succuss">Done</Link></li>

            </ul>
          </div>
          <div className="paymentTable">
            <div className="header">
              <FaCircleCheck />
              <h3>Payment Successful</h3>
              <p>
                We are processing the same and you wil be notified via email.
              </p>
            </div>
            <div className="paymentList">
              <ul>
                <li>
                  <span>Transaction ID</span>
                  <span>CDFF123476359</span>
                </li>
                <li>
                  <span>Date</span>
                  <span>22-12-2022</span>
                </li>
                <li>
                  <span>Mode of Payment: </span>
                  <span>Credit Card</span>
                </li>
                <li>
                  <span>Transaction Status: </span>
                  <span>Success</span>
                </li>
                <li>
                  <span>Customer Name: </span>
                  <span>Wade Warren</span>
                </li>
                <li>
                  <span>Mobile No: </span>
                  <span>(406) 555-0120</span>
                </li>
                <li>
                  <span>Subject: </span>
                  <span>White Gloves</span>
                </li>
                <li>
                  <span>Payment Amount: </span>
                  <span>₹235.00</span>
                </li>
              </ul>
            </div>
            <div className="downloadText">
              <ul>
                <li>
                  <Link href="#">Download</Link>
                </li>
                <li>
                  <Link href="#">Print Receipt</Link>
                </li>
                <li>
                  <Link href="#">Email Receipt</Link>
                </li>
              </ul>
            </div>
            <div className="proceedBtn">
              <Link href="/payment" className="btn btn-primary">
                Make another Booking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
