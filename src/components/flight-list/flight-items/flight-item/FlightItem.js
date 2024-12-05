"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaBowlFood, FaPlug, FaWifi } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiFolderVideoFill } from "react-icons/ri";

const FlightItem = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <>
      <div className="flightItem">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="flightDuration">
              <div className="logo">
                <Image
                  src="/assets/images/vistara.png"
                  alt="vistara"
                  width={80}
                  height={80}
                />
              </div>
              <div className="duration">
                <div className="time">
                  <span>JAI</span>
                  <h5>21:30</h5>
                  <p>Fri, 12 Jan Jaipur</p>
                </div>
                <div className="distance">
                  <span>4hr 5 min</span>
                  <hr />
                  <span>non stop</span>
                </div>
                <div className="time">
                  <span>GOI</span>
                  <h5>21:30</h5>
                  <p>Fri, 12 Jan Goa</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="flightPrice">
              <p>₹8,640</p>
              <Link href="#" className="btn">
                BOOK
              </Link>
            </div>
          </div>
        </div>

        <div className="flightTab">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-flight-detail-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-flight-detail"
              type="button"
              role="tab"
              aria-controls="nav-flight-detail"
              aria-selected="true"
            >
              Flight Detail
            </button>
            <button
              className="nav-link"
              id="nav-baggage-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-baggage"
              type="button"
              role="tab"
              aria-controls="nav-baggage"
              aria-selected="false"
            >
              Baggage
            </button>
          </div>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-flight-detail"
              role="tabpanel"
              aria-labelledby="nav-flight-detail-tab"
              tabIndex={0}
            >
              <div className="flightClass">
                <span>
                  {" "}
                  <Image
                    src="/assets/images/vistara.png"
                    alt="vistara"
                    width={30}
                    height={30}
                  />{" "}
                  SPICEJET SG289
                </span>
                <ul>
                  <li>Economy</li>
                </ul>
              </div>
              <div className="row align-items-center">
                <div className="col-md-7">
                  <div className="flightDuration">
                    <div className="duration">
                      <div className="time">
                        <h5>JAI 21:30</h5>
                        <p>Fri, 12 Jan Sanganer International Jaipur</p>
                      </div>
                      <div className="distance">
                        <MdOutlineWatchLater />
                        <span>4hr 5 min</span>
                      </div>
                      <div className="time">
                        <h5>GOI 21:30</h5>
                        <p>Fri, 12 Jan Mopa International Goa</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="featured">
                    <ul>
                      <li>
                        <FaWifi /> Wifi
                      </li>
                      <li>
                        <FaBowlFood /> Food
                      </li>
                      <li>
                        <FaPlug /> In-seat Power
                      </li>
                      <li>
                        <RiFolderVideoFill /> On Demand video
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-baggage"
              role="tabpanel"
              aria-labelledby="nav-baggage-tab"
              tabIndex={0}
            >
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Economy</th>
                    <th>Cabin Baggage </th>
                    <th>Check-in Baggage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      
                      <h3>JAI-GOI</h3>
                      <p>Vistara SG263</p>
                    </th>
                    <td>7kg ( 1 Piece per pax) </td>
                    <td>15kg ( 1 Piece per pax) </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flightItem">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="flightDuration">
              <div className="logo">
                <Image
                  src="/assets/images/vistara.png"
                  alt="vistara"
                  width={80}
                  height={80}
                />
              </div>
              <div className="duration">
                <div className="time">
                  <span>JAI</span>
                  <h5>21:30</h5>
                  <p>Fri, 12 Jan Jaipur</p>
                </div>
                <div className="distance">
                  <span>4hr 5 min</span>
                  <hr />
                  <span>non stop</span>
                </div>
                <div className="time">
                  <span>GOI</span>
                  <h5>21:30</h5>
                  <p>Fri, 12 Jan Goa</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="flightPrice">
              <p>₹8,640</p>
              <Link href="#" className="btn">
                BOOK
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flightItem">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="flightDuration">
              <div className="logo">
                <Image
                  src="/assets/images/vistara.png"
                  alt="vistara"
                  width={80}
                  height={80}
                />
              </div>
              <div className="duration">
                <div className="time">
                  <span>JAI</span>
                  <h5>21:30</h5>
                  <p>Fri, 12 Jan Jaipur</p>
                </div>
                <div className="distance">
                  <span>4hr 5 min</span>
                  <hr />
                  <span>non stop</span>
                </div>
                <div className="time">
                  <span>GOI</span>
                  <h5>21:30</h5>
                  <p>Fri, 12 Jan Goa</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="flightPrice">
              <p>₹8,640</p>
              <Link href="#" className="btn">
                BOOK
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flightItem">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="flightDuration">
              <div className="logo">
                <Image
                  src="/assets/images/vistara.png"
                  alt="vistara"
                  width={80}
                  height={80}
                />
              </div>
              <div className="duration">
                <div className="time">
                  <span>JAI</span>
                  <h5>21:30</h5>
                  <p>Fri, 12 Jan Jaipur</p>
                </div>
                <div className="distance">
                  <span>4hr 5 min</span>
                  <hr />
                  <span>non stop</span>
                </div>
                <div className="time">
                  <span>GOI</span>
                  <h5>21:30</h5>
                  <p>Fri, 12 Jan Goa</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="flightPrice">
              <p>₹8,640</p>
              <Link href="#" className="btn">
                BOOK
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flightItem">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="flightDuration">
              <div className="logo">
                <Image
                  src="/assets/images/vistara.png"
                  alt="vistara"
                  width={80}
                  height={80}
                />
              </div>
              <div className="duration">
                <div className="time">
                  <span>JAI</span>
                  <h5>21:30</h5>
                  <p>Fri, 12 Jan Jaipur</p>
                </div>
                <div className="distance">
                  <span>4hr 5 min</span>
                  <hr />
                  <span>non stop</span>
                </div>
                <div className="time">
                  <span>GOI</span>
                  <h5>21:30</h5>
                  <p>Fri, 12 Jan Goa</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="flightPrice">
              <p>₹8,640</p>
              <Link href="#" className="btn">
                BOOK
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flightItem">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="flightDuration">
              <div className="logo">
                <Image
                  src="/assets/images/vistara.png"
                  alt="vistara"
                  width={80}
                  height={80}
                />
              </div>
              <div className="duration">
                <div className="time">
                  <span>JAI</span>
                  <h5>21:30</h5>
                  <p>Fri, 12 Jan Jaipur</p>
                </div>
                <div className="distance">
                  <span>4hr 5 min</span>
                  <hr />
                  <span>non stop</span>
                </div>
                <div className="time">
                  <span>GOI</span>
                  <h5>21:30</h5>
                  <p>Fri, 12 Jan Goa</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="flightPrice">
              <p>₹8,640</p>
              <Link href="#" className="btn">
                BOOK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightItem;
