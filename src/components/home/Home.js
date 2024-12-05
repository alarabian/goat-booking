"use client";
import React, { useEffect } from "react";
import TravelBooking from "./travel-booking/TravelBooking";
import PopularDestination from "./popular-destination/PopularDestination";
import ReferEarn from "./refer-earn/ReferEarn";
import AppInfo from "./app-info/AppInfo";
import Testimonial from "./testimonial/Testimonial";
import BusRoutes from "./bus-routes/BusRoutes";
import FlightRoute from "./flight-route/FlightRoute";
import RechargeComp from "./recharge-comp/RechargeComp";

const Home = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <>
      <section
        className="coverSec sectionSpace bgCover"
        style={{ backgroundImage: `url("/assets/images/cover.png")` }}
      >
        <div className="container">
          <div className="megaHeroTab">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link "
                  id="recharge-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#recharge-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="recharge-tab-pane"
                  aria-selected="false"
                >
                  Recharge & bill payment
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="travel-booking"
                  data-bs-toggle="tab"
                  data-bs-target="#travel-booking-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="travel-booking-tab-pane"
                  aria-selected="true"
                >
                  Travel Booking
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade "
                id="recharge-tab-pane"
                role="tabpanel"
                aria-labelledby="recharge-tab"
                tabIndex={0}
              >
                <RechargeComp />
              </div>
              <div
                className="tab-pane fade show active"
                id="travel-booking-tab-pane"
                role="tabpanel"
                aria-labelledby="travel-booking-tab"
                tabIndex={0}
              >
                <TravelBooking />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PopularDestination />
      <FlightRoute />
      <BusRoutes />
      <ReferEarn />
      <AppInfo />
      <Testimonial />
    </>
  );
};

export default Home;
