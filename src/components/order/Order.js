import React from "react";
import { MdAccountBalance } from "react-icons/md";
import { LiaRupeeSignSolid } from "react-icons/lia";
import Link from "next/link";

const Order = () => {
  return (
    <>
      <div className="pageOrder sectionSpace">
        <div className="orderCard">
          <div className="header">
            <h5>
              <MdAccountBalance /> Available Balance
            </h5>
            <p>
              <LiaRupeeSignSolid /> 4532.00
            </p>
          </div>
          <div className="orderList">
            <ul>
              <li className="active"><Link href="/order">Order</Link></li>
              <li><Link href="/order-summary">Summary</Link></li>
              <li><Link href="/payment">Payment</Link></li>
              <li><Link href="/payment-succuss">Done</Link></li>
            </ul>
          </div>
          <form className="numberForm">
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter the receiver mobile number"
              />
              <button className="btn numberSearch">Search</button>
            </div>
          </form>
          <div className="operator">
            <h5>Operator Detected</h5>
            <div className="checkOP">
              <div className="checkOPItem">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Metro
                  </label>
                </div>
              </div>
              <div className="checkOPItem">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    easy
                  </label>
                </div>
              </div>
              <div className="checkOPItem">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    BSNL
                  </label>
                </div>
              </div>
              <div className="checkOPItem">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Verizon
                  </label>
                </div>
              </div>
              <div className="checkOPItem">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    AT&T
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="chooseValue">
          <h5>Choose a value</h5>
          <div className="valueBodyInfo">
            <div className="valueBody">
              <div className="valueCard">
                <div className="header">
                  <span>AT&T</span>
                  <h6>Airtel Prepaid</h6>
                </div>
                <p>Instant delicery to email</p>
                <hr />
                <p className="price">RS 10.00</p>
                <div className="btns">
                  <select className="form-select w-25">
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <button className="btn btn-primary w-100">Choose</button>
                </div>
              </div>
              <div className="valueCard">
                <div className="header">
                  <span>AT&T</span>
                  <h6>Airtel Prepaid</h6>
                </div>
                <p>Instant delicery to email</p>
                <hr />
                <p className="price">RS 10.00</p>
                <div className="btns">
                  <select className="form-select w-25">
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <button className="btn btn-primary w-100">Choose</button>
                </div>
              </div>
              <div className="valueCard">
                <div className="header">
                  <span>AT&T</span>
                  <h6>Airtel Prepaid</h6>
                </div>
                <p>Instant delicery to email</p>
                <hr />
                <p className="price">RS 10.00</p>
                <div className="btns">
                  <select className="form-select w-25">
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <button className="btn btn-primary w-100">Choose</button>
                </div>
              </div>
              <div className="valueCard">
                <div className="header">
                  <span>AT&T</span>
                  <h6>Airtel Prepaid</h6>
                </div>
                <p>Instant delicery to email</p>
                <hr />
                <p className="price">RS 10.00</p>
                <div className="btns">
                  <select className="form-select w-25">
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <button className="btn btn-primary w-100">Choose</button>
                </div>
              </div>
              <div className="valueCard">
                <div className="header">
                  <span>AT&T</span>
                  <h6>Airtel Prepaid</h6>
                </div>
                <p>Instant delicery to email</p>
                <hr />
                <p className="price">RS 10.00</p>
                <div className="btns">
                  <select className="form-select w-25">
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  <button className="btn btn-primary w-100">Choose</button>
                </div>
              </div>
            </div>
            <div className="paginationList"><ul><li>&lt;</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>&gt;</li></ul></div>
          </div>
        </div>
          <div className="proceedBtn"><button className="btn btn-primary">Proceed to checkout</button></div>
      </div>
    </>
  );
};

export default Order;
