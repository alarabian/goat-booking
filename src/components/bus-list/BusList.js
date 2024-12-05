import React from "react";
import BusFilter from "./bus-filter/BusFilter";
import BusInfo from "./bus-info/BusInfo";

const BusList = () => {
  return (
    <>
      <section className="busList sectionSpace">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <BusFilter />
            </div>
            <div className="col-md-9">
              <BusInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusList;
