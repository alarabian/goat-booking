
import React from "react";
import HotelDetailInfo from "./hotel-detail-info/HotelDetailInfo";
import HotelDetailSidebar from "./hotel-detail-sidebar/HotelDetailSidebar";

const HotelDetail = () => {
  return (
    <>
      <section className="hotelDetailSec sectionSpace">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <HotelDetailInfo />              
            </div>
            <div className="col-md-3">
              <HotelDetailSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelDetail;
