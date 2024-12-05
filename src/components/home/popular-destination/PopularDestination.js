import React from "react";
import DestinationItem from "./DestinationI-iem/DestinationItem";

const PopularDestination = () => {
  return (
    <>
      <section className="popularDestination sectionSpace">
        <div className="container">
          <div className="sectionTitle text-center">
            <h2>Popular Destination</h2>
            <p>
              A Booking is a system for travels in the form odf service, A vibe
              and explore te top destinations in worlds
            </p>
          </div>
          <div className="row">
            <DestinationItem />
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularDestination;
