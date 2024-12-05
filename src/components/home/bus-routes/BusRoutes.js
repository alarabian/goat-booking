import React from "react";
import BusRoutesList from "./bus-routes-list/BusRoutesList";

const BusRoutes = () => {
  return (
    <>
      <section className="BusRouteSec sectionSpace">
        <div className="container">
          <div className="sectionTitle text-center">
            <h2>Popular Bus Routes</h2>
            <p>
              A Booking is a system for travels in the form odf service, A vibe
              and explore te top destinations in worlds
            </p>
          </div>
            <BusRoutesList />
        </div>
      </section>
    </>
  );
};

export default BusRoutes;
