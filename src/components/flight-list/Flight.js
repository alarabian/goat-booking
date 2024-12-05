import React from "react";
import FlightFilter from "./flight-filter/FlightFilter";
import FlightItems from "./flight-items/FlightItems";
import FlightCover from "./flight-cover/FlightCover";

const Flight = () => {
  return (
    <>
      <>
        <FlightCover />
        <section className="flightList sectionSpace">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <FlightFilter />
              </div>
              <div className="col-md-9">
                <FlightItems />
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Flight;
