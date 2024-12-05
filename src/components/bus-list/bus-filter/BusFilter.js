import React from "react";
import { FaStar } from "react-icons/fa6";

const BusFilter = () => {
  return (
    <>
      <div className="pageFilter">
        <div className="title">
          <h3>Filter</h3>
        </div>
        <div className="pageFilterItem hotelItem  departure">
          <h5>departure</h5>
          <ul>
            <li>before 6AM</li>
            <li>6AM - 12PM</li>
            <li>12PM - 6PM</li>
            <li>after 6PM</li>
          </ul>
        </div>
        <div className="pageFilterItem hotelItem  onePrice">
          <h5>one way price</h5>
          <input type="range" className="form-range" id="customRange1" />
        </div>
        <div className="pageFilterItem hotelItem  flightStops">
          <h5>Bus Ratings</h5>
          <ul>
            <li>
              <FaStar />
              <FaStar />
            </li>
            <li>
              <FaStar />
              <FaStar />
              <FaStar />
            </li>
            <li>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </li>
          </ul>
        </div>
        <div className="pageFilterItem airlines hotelItem property">
          <h5>Bus Type</h5>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                AC
              </label>
            </div>
          </div>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Non-AC
              </label>
            </div>
          </div>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Seater
              </label>
            </div>
          </div>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Semi Sleeper
              </label>
            </div>
          </div>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Sleeper
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusFilter;
