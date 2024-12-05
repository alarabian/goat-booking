"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaMobile } from "react-icons/fa6";

const RechargeComp = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <>
      <div className="rechargeComp">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-mobile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-mobile"
              type="button"
              role="tab"
              aria-controls="pills-mobile"
              aria-selected="true"
            >
              <FaMobile /> Mobile
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-broadband-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-broadband"
              type="button"
              role="tab"
              aria-controls="pills-broadband"
              aria-selected="false"
            >
              Broadband
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-landline-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-landline"
              type="button"
              role="tab"
              aria-controls="pills-landline"
              aria-selected="false"
            >
              Landline
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-cable-tv-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-cable-tv"
              type="button"
              role="tab"
              aria-controls="pills-cable-tv"
              aria-selected="false"
            >
              cable-tv
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-mobile"
            role="tabpanel"
            aria-labelledby="pills-mobile-tab"
            tabIndex={0}
          >
            <div className="rechargeSubInfo">
              <div className="authLogin w-100 border-0 p-2">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title">
                      <h5>Mobile Recharge</h5>
                    </div>
                    <form className="authLoginForm">
                      <div className="form-group mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter Mobile Number"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Select Operator"
                        />
                      </div>
                      <div className="form-group mb-3" id="checkPlan">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter Amount"
                        />
                        <div
                          className="checkPlans"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRight"
                          aria-controls="offcanvasRight"
                        >
                          Check Plan
                        </div>
                        <div
                          className="offcanvas offcanvas-end"
                          tabIndex="-1"
                          id="offcanvasRight"
                          aria-labelledby="offcanvasRightLabel"
                        >
                          <div className="offcanvas-header">
                            <div className="browseForm">
                              <label htmlFor="Browse Plan">Browse Plan</label>
                              <div className="form-group">
                                <select className="form-select">
                                  <option value="jio">Jio</option>
                                  <option value="airtel">Airtel</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <select className="form-select">
                                  <option value="rajasthan">Rajasthan</option>
                                  <option value="goa">Goa</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <input
                                  type="text"
                                  placeholder="Search by amount"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn text-white fs-4"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                            >
                              X
                            </button>
                          </div>
                          <div className="offcanvas-body">
                            <div className="row">
                              <div className="col-md-3">
                                <div className="packTitle">
                                  <ul>
                                    <li>
                                      <Link href="#">Popular</Link>
                                    </li>
                                    <li>
                                      <Link href="#">Smart Plans</Link>
                                    </li>
                                    <li>
                                      <Link href="#">Jio Cricket Plan</Link>
                                    </li>
                                    <li>
                                      <Link href="#">Smart Plans </Link>
                                    </li>
                                    <li>
                                      <Link href="#">Top up</Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-9">
                                <div className="packTable">
                                  <table className="table">
                                    <thead>
                                      <tr>
                                        <th scope="col">Talktime</th>
                                        <th scope="col">Validity</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Price</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Unlimited</td>
                                        <td>28 days</td>
                                        <td>
                                          Data: 1.5 GB/day, Voice Unlimited,
                                          Calls SMS: 100 SMS/day Validity 28
                                          days Complimentary Subscription to jio
                                          Apps
                                        </td>
                                        <td>
                                          <button className="btn btn-primary">
                                            228
                                          </button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Unlimited</td>
                                        <td>28 days</td>
                                        <td>
                                          Data: 1.5 GB/day, Voice Unlimited,
                                          Calls SMS: 100 SMS/day Validity 28
                                          days Complimentary Subscription to jio
                                          Apps
                                        </td>
                                        <td>
                                          <button className="btn btn-primary">
                                            228
                                          </button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Unlimited</td>
                                        <td>28 days</td>
                                        <td>
                                          Data: 1.5 GB/day, Voice Unlimited,
                                          Calls SMS: 100 SMS/day Validity 28
                                          days Complimentary Subscription to jio
                                          Apps
                                        </td>
                                        <td>
                                          <button className="btn btn-primary">
                                            228
                                          </button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Unlimited</td>
                                        <td>28 days</td>
                                        <td>
                                          Data: 1.5 GB/day, Voice Unlimited,
                                          Calls SMS: 100 SMS/day Validity 28
                                          days Complimentary Subscription to jio
                                          Apps
                                        </td>
                                        <td>
                                          <button className="btn btn-primary">
                                            228
                                          </button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Unlimited</td>
                                        <td>28 days</td>
                                        <td>
                                          Data: 1.5 GB/day, Voice Unlimited,
                                          Calls SMS: 100 SMS/day Validity 28
                                          days Complimentary Subscription to jio
                                          Apps
                                        </td>
                                        <td>
                                          <button className="btn btn-primary">
                                            228
                                          </button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Unlimited</td>
                                        <td>28 days</td>
                                        <td>
                                          Data: 1.5 GB/day, Voice Unlimited,
                                          Calls SMS: 100 SMS/day Validity 28
                                          days Complimentary Subscription to jio
                                          Apps
                                        </td>
                                        <td>
                                          <button className="btn btn-primary">
                                            228
                                          </button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Unlimited</td>
                                        <td>28 days</td>
                                        <td>
                                          Data: 1.5 GB/day, Voice Unlimited,
                                          Calls SMS: 100 SMS/day Validity 28
                                          days Complimentary Subscription to jio
                                          Apps
                                        </td>
                                        <td>
                                          <button className="btn btn-primary">
                                            228
                                          </button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Unlimited</td>
                                        <td>28 days</td>
                                        <td>
                                          Data: 1.5 GB/day, Voice Unlimited,
                                          Calls SMS: 100 SMS/day Validity 28
                                          days Complimentary Subscription to jio
                                          Apps
                                        </td>
                                        <td>
                                          <button className="btn btn-primary">
                                            228
                                          </button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group authBtn">
                        <button className="btn">Continue Recharge</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6">
                    <div className="mobileRechargeImg">
                      <Image
                        src="/assets/images/recharge.avif"
                        className="img-fluid"
                        alt="Recharge"
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-broadband"
            role="tabpanel"
            aria-labelledby="pills-broadband-tab"
            tabIndex={0}
          >
            <h3>Broadband</h3>
          </div>
          <div
            className="tab-pane fade"
            id="pills-landline"
            role="tabpanel"
            aria-labelledby="pills-landline-tab"
            tabIndex={0}
          >
            <h3>Landline</h3>
          </div>
          <div
            className="tab-pane fade"
            id="pills-cable-tv"
            role="tabpanel"
            aria-labelledby="pills-cable-tv-tab"
            tabIndex={0}
          >
            <h3>Cable</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default RechargeComp;
