import React from "react";
import FlightDetailForm from "./flight-detail-form/FlightDetailForm";
import { FaShoppingBag } from "react-icons/fa";
import { BsBagPlusFill } from "react-icons/bs";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import Image from "next/image";


const FlightInfo = () => {
  return (
    <>
      <div className="flightInfo">
        <div className="title">
          <h3>Flight Details</h3>
        </div>
        <div className="flightTicketInfo">

          <div className="flightTicketItem">
            <div className="header">
              <h5>
                Outbound <span className="date">Wed Dec 14, 2003</span>{" "}
                <span>Economy</span>
              </h5>
              <p>Duration <span className="time">8h 30m</span></p>
            </div>
            <div className="body">
              <ul>
                <li>
                  <Image src={"/assets/images/delta.png"} width={64} height={10}  alt="Flat Logo"/>
                  <span>Delta Airlines</span> 
                </li>
                <li>08:10 AM <span>Jaipur</span> </li>
                <li>2h 10m <span>( Non - Stop )</span> </li>
                <li>10:20 AM <span>Goa</span> </li>
              </ul>
            </div>
          </div>

          <div className="flightTicketItem">
            <div className="header">
              <h5>
                Return  <span className="date">Wed Dec 14, 2003</span>{" "}
                <span>Economy</span>
              </h5>
              <p>Duration <span className="time">7h 25m</span></p>
            </div>
            <div className="body">
              <ul>
                <li>
                <Image src={"/assets/images/vistara.png"} width={50} height={50} alt="Flat Logo" />

                  <span>Vistara Airlines</span> 
                </li>
                <li>08:10 AM <span>Goa</span> </li>
                <li>2h 10m <span>( Non - Stop )</span> </li>
                <li>10:20 AM <span>Jaipur</span> </li>
              </ul>
            </div>
          </div>

          <div className="baggedInfo">
            <h4>Baggage Information (Per Person)</h4>
            <div className="trip">
              <h6>Round Trip New York to Dubai</h6>
              <p>Cabin: Coach</p>
            </div>
            <div className="baggedCard">
              <div className="baggedCardItem">
                <div className="icon"><FaShoppingBag />
                </div>
                <div className="text">
                  <h5>Personal item</h5>
                  <p>Purse, Small backpack, briefcase</p>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                      Included
                    </label>
                  </div>
                </div>
              </div>

              <div className="baggedCardItem">
                <div className="icon"><BiSolidShoppingBagAlt />                </div>
                <div className="text">
                  <h5>carry on bag</h5>
                  <p>Fits in overhead bin or under the seat </p>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                      Included
                    </label>
                  </div>
                </div>
              </div>
              <div className="baggedCardItem">
                <div className="icon"><BsBagPlusFill />
                </div>
                <div className="text">
                  <h5>Checked Bags</h5>
                  <p>Larges bag purse small, backpack </p>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                        Not Included
                    </label>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="travelProtection">
            <div className="header">
              <div className="title">
                <h4>Travel Protection</h4>
                <p>Reasons you might need travel protection</p>
              </div>
              <div className="price">
                <h4>₹22188,96</h4>
                <span>Per Person</span>
              </div>
            </div>
            <div className="checkList">
              <ul>
                <li>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked />
                    <label className="form-check-label" for="flexCheckDefault">
                      Trip Cancelation
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked />
                    <label className="form-check-label" for="flexCheckDefault">
                      Inclement Weather
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked />
                    <label className="form-check-label" for="flexCheckDefault">
                      Travel Dealy
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked />
                    <label className="form-check-label" for="flexCheckDefault">
                      Trip Cancelation
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked />
                    <label className="form-check-label" for="flexCheckDefault">
                      Inclement Weather
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked />
                    <label className="form-check-label" for="flexCheckDefault">
                      Travel Dealy
                    </label>
                  </div>
                </li>
              </ul>
              <div className="isTrip">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" checked />
                <label className="form-check-label" for="flexCheckDefault">
                  <span>Yes</span> I want travel protection for my trip.
                </label>
              </div>
              </div>
            </div>
          </div>

          <div className="travelerDetail">
            <h4>Traveler Details</h4>
            <p>Please enter the traveler name and date of birth exactly as shown on the passport (for international flights) or valid government-issued photo ID (for domestic flights) to be used on this trip. Name changes are not permitted after booking.</p>
          </div>

          <div className="restrict">
            <div className="info">
              <div className="icon">CON</div>
              <p>Before booking your flight, please check the latest COVID-19 travel restrictions to world. Please continuously check all COVID-19 related restrictions directly with airlines...</p>
            </div>
            <button className="btn btn-primary" type="button">See Restriction</button>
          </div>
          <FlightDetailForm />
        </div>
      </div>
    </>
  );
};

export default FlightInfo;
