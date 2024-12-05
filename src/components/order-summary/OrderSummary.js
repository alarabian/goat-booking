import React from "react";
import { MdAccountBalance } from "react-icons/md";
import { LiaRupeeSignSolid } from "react-icons/lia";
import Link from "next/link";

const OrderSummary = () => {
  return (
    <>
      <div className="pageOrder sectionSpace">
        <div className="orderCard">
          <div className="header">
            <h5>
              <MdAccountBalance /> Available Balance
            </h5>
            <p>
              <LiaRupeeSignSolid /> 4532.00{" "}
            </p>
          </div>
          <div className="orderList">
            <ul>
              <li>
                <Link href="/order">Order</Link>
              </li>
              <li className="active">
                <Link href="/order-summary">Summary</Link>
              </li>
              <li>
                <Link href="/payment">Payment</Link>
              </li>
              <li>
                <Link href="/payment-succuss">Done</Link>
              </li>
            </ul>
          </div>
          <div className="orderTable">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Recipient No.</th>
                  <th scope="col">Operator</th>
                  <th scope="col">Receive amount</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>(401) 555-0120</td>
                  <td>Airtel</td>
                  <td>₹4531.00</td>
                  <td>₹4531.00</td>
                </tr>

                <tr>
                  <td></td>
                  <td colrow={3}></td>
                  <th>Sub Total:</th>
                  <td>0</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <th>Promotional Code:</th>
                  <td>0</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <th>Total:</th>
                  <td>₹4531.00</td>
                </tr>
              </tbody>
            </table>
            <div className="addPromo">
              <p>
                <span>+</span> add another number recharge
              </p>
              <p>
                <span>+</span> add Promo code
              </p>
            </div>
          </div>
        </div>

        <div className="proceedBtn">
          <Link href="/payment" className="btn btn-primary">
            Make Payment
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
