import React from "react";
import HotelComp from "./hotel-comp/HotelComp";
import { FaBus, FaHotel } from "react-icons/fa6";
import { MdOutlineFlight } from "react-icons/md";
import FlightComp from "./flight-comp/FlightComp";
import BusComp from "./bus-comp/BusComp";

const TravelBooking = () => {
  return (
    <>
      <div className="travelBooking">
        <ul className="nav nav-tabs" id="travelTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link "
              id="hotel-tab"
              data-bs-toggle="tab"
              data-bs-target="#hotel-tab-pane"
              type="button"
              role="tab"
              aria-controls="hotel-tab-pane"
              aria-selected="false"
            >
              <FaHotel /> Hotel
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="flight-tab"
              data-bs-toggle="tab"
              data-bs-target="#flight-tab-pane"
              type="button"
              role="tab"
              aria-controls="flight-tab-pane"
              aria-selected="true"
            >
              <MdOutlineFlight /> Flight
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link "
              id="bus-tab"
              data-bs-toggle="tab"
              data-bs-target="#bus-tab-pane"
              type="button"
              role="tab"
              aria-controls="bus-tab-pane"
              aria-selected="false"
            >
              <FaBus /> Bus
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade"
            id="hotel-tab-pane"
            role="tabpanel"
            aria-labelledby="hotel-tab"
            tabIndex={0}
          >
            <HotelComp />
          </div>
          <div
            className="tab-pane fade show active"
            id="flight-tab-pane"
            role="tabpanel"
            aria-labelledby="flight-tab"
            tabIndex={0}
          >
            <FlightComp />
          </div>
          <div
            className="tab-pane fade "
            id="bus-tab-pane"
            role="tabpanel"
            aria-labelledby="bus-tab"
            tabIndex={0}
          >
            <BusComp />
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelBooking;
