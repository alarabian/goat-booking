import BusForm from "@/components/home/travel-booking/bus-comp/bus-form/BusForm";
import React from "react";

const BusCoverForm = () => {
  return (
    <>
      <section
        className="pageCover bgCover"
        style={{ backgroundImage: `url("/assets/images/flight.png")` }}
      >
        <div className="container">
          <div className="flightCover">
            <BusForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default BusCoverForm;
