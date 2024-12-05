import React from "react";
import HotelFilter from "./hotel-filter/HotelFilter";
import HotelListItem from "./hotel-list/HotelListItem";
import Pagination from "./pagination/Pagination";

const Hotel = () => {
  return (
    <>
      <section className="hotelSec sectionSpace">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <HotelFilter />
            </div>
            <div className="col-md-9">
              <HotelListItem />
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hotel;
