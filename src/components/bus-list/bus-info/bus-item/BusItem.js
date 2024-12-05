"use client";
import Image from "next/image";
import { useEffect } from "react";
import { FaBowlFood, FaPlug, FaWifi } from "react-icons/fa6";
import { PiSeat } from "react-icons/pi";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { LuBus } from "react-icons/lu";

import { RiFolderVideoFill } from "react-icons/ri";
import Link from "next/link";

const BusItem = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <>
      <div className="flightItem bus">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="flightDuration">
              <div className="brand">
                <h5>Gajraj Travels</h5>
                <p>AC Seater / Sleeper 2+1</p>
              </div>
              <div className="duration">
                <div className="time">
                  <h5>21:30</h5>
                  <p>Jaipur</p>
                </div>
                <div className="distance">
                  <span>4hr 5 min</span>
                  <hr />
                </div>
                <div className="time">
                  <h5>21:30</h5>
                  <p>Jodhpur</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="flightPrice">
              <p>₹8,64</p>
              <div className="bookArea">
                <Link href="#" className="btn">
                  select seats
                </Link>
                <span>8 Seats Available</span>
              </div>
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
              <div className="tabTitle">
                <h5>8 Seats Available</h5>
                <p>Click on seat to select / deselect</p>
              </div>
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
              <div className="tabTitle">
                <h5>Boarding & Droping Point</h5>
                <p>Click on selected Boarding and dropping Point</p>
              </div>
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
              <div className="busSeatInfo row">
                <div className="col-md-6">
                  <div className="busSeatCard ">
                    <span className="mainSeat">
                      <MdOutlineAirlineSeatReclineNormal />
                    </span>
                    <div className="seats">
                      <div className="main">
                        <ul className="smallSeat">
                          <li>
                            <PiSeat />
                          </li>
                          <li>
                            <PiSeat />
                          </li>
                          <li>
                            <PiSeat />
                          </li>
                          <li>
                            <PiSeat />
                          </li>
                          <li>
                            <PiSeat />
                          </li>
                          <li>
                            <PiSeat />
                          </li>
                          <li>
                            <PiSeat />
                          </li>
                          <li>
                            <PiSeat />
                          </li>
                          <li>
                            <PiSeat />
                          </li>
                          <li>
                            <PiSeat />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                        </ul>
                      </div>
                      <div className="side">
                        <ul>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="busSeatCard">
                    <span className="mainSeat">
                      <MdOutlineAirlineSeatReclineNormal />
                    </span>
                    <div className="seats">
                      <div className="main">
                        <ul className="smallSeat">
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>

                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                        </ul>
                      </div>
                      <div className="side">
                        <ul>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                          <li>
                            <LuBus />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-7">
                  <div className="seatColorMeans">
                    <ul>
                      <li>
                        <span className="text-success">
                          <PiSeat />
                        </span>{" "}
                        Selected Seat
                      </li>
                      <li>
                        <span>
                          <PiSeat />
                        </span>{" "}
                        Available Seat
                      </li>
                      <li>
                        <span className="text-danger">
                          <PiSeat />{" "}
                        </span>
                        Booked By Ladies
                      </li>
                      <li>
                        <span className="text-danger">
                          <PiSeat />{" "}
                        </span>
                        Reserved By Ladies
                      </li>
                      <li>
                        <span>
                          <PiSeat />{" "}
                        </span>
                        Occupied Seat
                      </li>
                      <li>
                        <span>
                          <PiSeat />{" "}
                        </span>
                        Blocked Seat
                      </li>
                    </ul>
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
              <div className="boardingInfo row">
                <div className="col-md-6">
                  <div className="boardingCard">
                    <h5>Boarding Point</h5>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" />
                      <div className="text">
                        <label className="form-check-label"> 22:30</label>
                        <p>Opp Natraj Hotel Near Polo Victory</p>
                      </div>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" />
                      <div className="text">
                        <label className="form-check-label"> 22:30</label>
                        <p>Laxmi Mandir Tiraya Tank</p>
                      </div>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="radio" />
                      <div className="text">
                        <label className="form-check-label"> 22:30</label>
                        <p>Opp Natraj Hotel Near Polo Victory</p>
                      </div>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="radio" />
                      <div className="text">
                        <label className="form-check-label"> 22:30</label>
                        <p>Opp Natraj Hotel Near Polo Victory</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="boardingCard">
                    <h5>Dropping Point</h5>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" />
                      <div className="text">
                        <label className="form-check-label"> 22:30</label>
                        <p>Opp Natraj Hotel Near Polo Victory</p>
                      </div>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" />
                      <div className="text">
                        <label className="form-check-label"> 22:30</label>
                        <p>Laxmi Mandir Tiraya Tank</p>
                      </div>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="radio" />
                      <div className="text">
                        <label className="form-check-label"> 22:30</label>
                        <p>Opp Natraj Hotel Near Polo Victory</p>
                      </div>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="radio" />
                      <div className="text">
                        <label className="form-check-label"> 22:30</label>
                        <p>Opp Natraj Hotel Near Polo Victory</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flightItem bus">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="flightDuration">
              <div className="brand">
                <h5>Gajraj Travels</h5>
                <p>AC Seater / Sleeper 2+1</p>
              </div>
              <div className="duration">
                <div className="time">
                  <h5>21:30</h5>
                  <p>Jaipur</p>
                </div>
                <div className="distance">
                  <span>4hr 5 min</span>
                  <hr />
                </div>
                <div className="time">
                  <h5>21:30</h5>
                  <p>Jodhpur</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="flightPrice">
              <p>₹8,64</p>
              <div className="bookArea">
                <Link href="#" className="btn">
                  select seats
                </Link>
                <span>8 Seats Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flightItem bus">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="flightDuration">
              <div className="brand">
                <h5>Gajraj Travels</h5>
                <p>AC Seater / Sleeper 2+1</p>
              </div>
              <div className="duration">
                <div className="time">
                  <h5>21:30</h5>
                  <p>Jaipur</p>
                </div>
                <div className="distance">
                  <span>4hr 5 min</span>
                  <hr />
                </div>
                <div className="time">
                  <h5>21:30</h5>
                  <p>Jodhpur</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="flightPrice">
              <p>₹8,64</p>
              <div className="bookArea">
                <Link href="#" className="btn">
                  select seats
                </Link>
                <span>8 Seats Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flightItem bus">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="flightDuration">
              <div className="brand">
                <h5>Gajraj Travels</h5>
                <p>AC Seater / Sleeper 2+1</p>
              </div>
              <div className="duration">
                <div className="time">
                  <h5>21:30</h5>
                  <p>Jaipur</p>
                </div>
                <div className="distance">
                  <span>4hr 5 min</span>
                  <hr />
                </div>
                <div className="time">
                  <h5>21:30</h5>
                  <p>Jodhpur</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="flightPrice">
              <p>₹8,64</p>
              <div className="bookArea">
                <Link href="#" className="btn">
                  select seats
                </Link>
                <span>8 Seats Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flightItem bus">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="flightDuration">
              <div className="brand">
                <h5>Gajraj Travels</h5>
                <p>AC Seater / Sleeper 2+1</p>
              </div>
              <div className="duration">
                <div className="time">
                  <h5>21:30</h5>
                  <p>Jaipur</p>
                </div>
                <div className="distance">
                  <span>4hr 5 min</span>
                  <hr />
                </div>
                <div className="time">
                  <h5>21:30</h5>
                  <p>Jodhpur</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="flightPrice">
              <p>₹8,64</p>
              <div className="bookArea">
                <Link href="#" className="btn">
                  select seats
                </Link>
                <span>8 Seats Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flightItem bus">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="flightDuration">
              <div className="brand">
                <h5>Gajraj Travels</h5>
                <p>AC Seater / Sleeper 2+1</p>
              </div>
              <div className="duration">
                <div className="time">
                  <h5>21:30</h5>
                  <p>Jaipur</p>
                </div>
                <div className="distance">
                  <span>4hr 5 min</span>
                  <hr />
                </div>
                <div className="time">
                  <h5>21:30</h5>
                  <p>Jodhpur</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="flightPrice">
              <p>₹8,64</p>
              <div className="bookArea">
                <Link href="#" className="btn">
                  select seats
                </Link>
                <span>8 Seats Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flightItem bus">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="flightDuration">
              <div className="brand">
                <h5>Gajraj Travels</h5>
                <p>AC Seater / Sleeper 2+1</p>
              </div>
              <div className="duration">
                <div className="time">
                  <h5>21:30</h5>
                  <p>Jaipur</p>
                </div>
                <div className="distance">
                  <span>4hr 5 min</span>
                  <hr />
                </div>
                <div className="time">
                  <h5>21:30</h5>
                  <p>Jodhpur</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="flightPrice">
              <p>₹8,64</p>
              <div className="bookArea">
                <Link href="#" className="btn">
                  select seats
                </Link>
                <span>8 Seats Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusItem;
