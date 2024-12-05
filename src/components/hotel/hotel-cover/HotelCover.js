import HotelForm from "@/components/home/travel-booking/hotel-comp/hotel-form/HotelForm";
import React from "react";

const HotelCover = () => {
  return (
    <>
      <section
        className="pageCover bgCover"
        style={{ backgroundImage: `url("/assets/images/exterior-night.png")` }}
      >
        <div className="container">
          <HotelForm />
        </div>
      </section>
    </>
  );
};

export default HotelCover;
