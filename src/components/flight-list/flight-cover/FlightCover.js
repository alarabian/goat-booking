import React from "react";
import FlightForm from "@/components/home/travel-booking/flight-comp/flight-form/FlightForm";

const FlightCover = () => {
  return (
    <>
      <section
        className="pageCover bgCover"
        style={{ backgroundImage: `url("/assets/images/flight.png")` }}
      >
        <div className="container">
          <div className="flightCover">
            <FlightForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default FlightCover;
