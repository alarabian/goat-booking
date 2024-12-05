import React from "react";
import BusSorting from "./bus-sorting/BusSorting";
import BusItem from "./bus-item/BusItem";

const BusInfo = () => {
  return (
    <>
      <div className="busInfo">
        <BusSorting />
        <BusItem />
      </div>
    </>
  );
};

export default BusInfo;
