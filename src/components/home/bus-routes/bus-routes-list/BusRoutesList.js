import Link from "next/link";
import React from "react";
import { FaBus } from "react-icons/fa6";

const BusRoutesList = () => {
  return (
    <>
      <div className="busRoutesList">
        <div className="busRoutesItem">
          <div className="icon">
            <FaBus />
          </div>
          <div className="text">
            <h5><Link href={"bus-list"}>Delhi Buses</Link></h5>
            <p>To: Manali, Chandigadh, Jaipur, Dehradun</p>
          </div>
        </div>
        <div className="busRoutesItem">
          <div className="icon">
            <FaBus />
          </div>
          <div className="text">
            <h5><Link href={"bus-list"}>Agra Buses</Link></h5>
            <p>To: Manali, Chandigadh, Jaipur, Dehradun</p>
          </div>
        </div>
        <div className="busRoutesItem">
          <div className="icon">
            <FaBus />
          </div>
          <div className="text">
            <h5><Link href={"bus-list"}>Jaipur Buses</Link></h5>
            <p>To: Manali, Chandigadh, Jaipur, Dehradun</p>
          </div>
        </div>
        <div className="busRoutesItem">
          <div className="icon">
            <FaBus />
          </div>
          <div className="text">
            <h5><Link href={"bus-list"}>Delhi Buses</Link></h5>
            <p>To: Manali, Chandigadh, Jaipur, Dehradun</p>
          </div>
        </div>
        <div className="busRoutesItem">
          <div className="icon">
            <FaBus />
          </div>
          <div className="text">
            <h5><Link href={"bus-list"}>Delhi Buses</Link></h5>
            <p>To: Manali, Chandigadh, Jaipur, Dehradun</p>
          </div>
        </div>
        <div className="busRoutesItem">
          <div className="icon">
            <FaBus />
          </div>
          <div className="text">
            <h5><Link href={"bus-list"}>Delhi Buses</Link></h5>
            <p>To: Manali, Chandigadh, Jaipur, Dehradun</p>
          </div>
        </div>
        <div className="busRoutesItem">
          <div className="icon">
            <FaBus />
          </div>
          <div className="text">
            <h5><Link href={"bus-list"}>Agra Buses</Link></h5>
            <p>To: Manali, Chandigadh, Jaipur, Dehradun</p>
          </div>
        </div>
        <div className="busRoutesItem">
          <div className="icon">
            <FaBus />
          </div>
          <div className="text">
            <h5><Link href={"bus-list"}>Jaipur Buses</Link></h5>
            <p>To: Manali, Chandigadh, Jaipur, Dehradun</p>
          </div>
        </div>
        <div className="busRoutesItem">
          <div className="icon">
            <FaBus />
          </div>
          <div className="text">
            <h5><Link href={"bus-list"}>Delhi Buses</Link></h5>
            <p>To: Manali, Chandigadh, Jaipur, Dehradun</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusRoutesList;
