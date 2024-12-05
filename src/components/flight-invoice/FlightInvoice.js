import Link from "next/link";
import React from "react";
import { BiSolidPrinter } from "react-icons/bi";

const FlightInvoice = () => {
  return (
    <>
      <div className="sectionSpace pageOrder">
        <div className="flightInvoice ">
          <div className="header">
            <div className="title">
              <h4>Abaris Softech</h4>
              <BiSolidPrinter />
            </div>
            <div className="text">
              <h6>Hey Abaris Softech webb,</h6>
              <span>Thank You, Your reservation has been confirmed.</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates nesciunt quod totam eos...
              </p>
            </div>
          </div>

          <div className="bookingInfo">
            <ul>
              <li>
                <strong>Booking Reference Number</strong>: 345 567 789
              </li>
              <li>
                <strong>Booking Status </strong>: 7/11/2019
              </li>
            </ul>
            <p>Thank you for booking your travel intinerary with Abaris</p>
          </div>
          <div className="bookingTitle">
            <ul>
              <li>
                <strong>Booking Date:</strong>
                <p>15-12-22</p>
              </li>

              <li>
                <strong>Booking No:</strong>
                <p>234 5567 6678</p>
              </li>

              <li>
                <strong>Payment:</strong>
                <p>Credit Card</p>
              </li>
            </ul>
          </div>
          <div className="bookingCommonTable">
            <div className="commonTableCard passenger">
              <h4>Passenger Information</h4>
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Confirmation</th>
                    <th>Seat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Neil Mack</td>
                    <td>#215552221</td>
                    <td>12B</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="commonTableCard flight">
              <h4>Flight Details</h4>
              <table className="table">
                <thead>
                  <tr>
                    <th>Flight</th>
                    <th>Depart </th>
                    <th>Arive</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Delta Air Lines</td>
                    <td>
                      New york 20-12-22, Sat 01:30 PM travel time: 1hr 30m cabin
                      class,Economy Seat: 12B
                    </td>
                    <td>
                      Dubai, 21-11-22, sat 19:38 PM Booking Code: S Plane Type:
                      778
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="getTouch">
              <p>
                Any Questions? Get in touch with our 24x7 customer care team
              </p>
              <Link href="#" className="getTouchBtn btn">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightInvoice;
