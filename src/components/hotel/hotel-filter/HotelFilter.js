import React from "react";
import { FaStar } from "react-icons/fa6";

const pageFilter = () => {
  return (
    <>
      <div className="pageFilter">
        <div className="title">
          <h3>Filter</h3>
        </div>
        <div className="hotelItem hotelName">
          <h5>Hotel Name</h5>
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search by hotel name"
            />
          </form>
        </div>
        <div className="hotelItem pricingScale">
          <h5>Pricing Scale</h5>

          <input type="range" className="form-range" id="customRange1" />
        </div>
        <div className="hotelItem property">
          <h5>type of property</h5>
          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Hotel
              </label>
            </div>
            <div className="number">
              <span>44</span>
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
                Motel
              </label>
            </div>
            <div className="number">
              <span>500</span>
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
                Villa
              </label>
            </div>
            <div className="number">
              <span>400</span>
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
                Resort
              </label>
            </div>
            <div className="number">
              <span>77</span>
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
                Farm House
              </label>
            </div>
            <div className="number">
              <span>111</span>
            </div>
          </div>
        </div>
        <div className="hotelItem property">
          <h5>star category</h5>

          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <FaStar /> 5 Star
              </label>
            </div>
            <div className="number">
              <span>200</span>
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
                <FaStar /> 4 Star
              </label>
            </div>
            <div className="number">
              <span>214</span>
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
                <FaStar /> 3 Star
              </label>
            </div>
            <div className="number">
              <span>144</span>
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
                <FaStar /> 2 Star
              </label>
            </div>
            <div className="number">
              <span>66</span>
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
                <FaStar /> 1 Star
              </label>
            </div>
            <div className="number">
              <span>10</span>
            </div>
          </div>
        </div>
        <div className="hotelItem property">
          <h5>amenities</h5>

          <div className="propertyCard">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Restaurant
              </label>
            </div>
            <div className="number">
              <span>344</span>
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
                Swimming Pool
              </label>
            </div>
            <div className="number">
              <span>200</span>
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
                Business Facility
              </label>
            </div>
            <div className="number">
              <span>424</span>
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
                Spa / Wellness
              </label>
            </div>
            <div className="number">
              <span>40</span>
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
                Internet / Wifi
              </label>
            </div>
            <div className="number">
              <span>70</span>
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
                Gym
              </label>
            </div>
            <div className="number">
              <span>10</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default pageFilter;
