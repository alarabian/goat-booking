import React from "react";
import Image from "next/image";
import { FaCircleInfo, FaStar, FaWifi } from "react-icons/fa6";
import { MdLocationPin, MdSportsGymnastics } from "react-icons/md";
import Link from "next/link";

const HotelDetailInfo = () => {
  return (
    <>
      <div className="hotelCardBody">
        <div className="hotelDetailCard confirmHotel">
          <h5>Confirm Hotel</h5>
          <div className="bookDetail">
            <div className="figure">
              <Image
                src={"/assets/images/destination3.webp"}
                width={350}
              alt="destination"
                height={300}
                className="img-fluid"
                title="destination"
              ></Image>
            </div>
            <div className="content">
              <div className="hotelListItem">
                <div className="info">
                  <div className="content">
                    <div className="title">
                      <h4>Bitast Hotel</h4>
                      <p>
                        <MdLocationPin /> Jodhpur, Rajasthan
                      </p>
                    </div>
                    <div className="features">
                      <ul>
                        <li>
                          <MdSportsGymnastics />
                        </li>
                        <li>
                          <FaWifi />
                        </li>
                        <li>
                          <MdSportsGymnastics />
                        </li>
                        <li>
                          <MdSportsGymnastics />
                        </li>
                        <li>
                          <MdSportsGymnastics />
                        </li>
                        <li>
                          <MdSportsGymnastics />
                        </li>
                      </ul>
                    </div>
                    <div className="price">
                      <strong>₹ 6442</strong>
                      <span className=" text-decoration-line-through">
                        8442
                      </span>
                      <p>20% OFF</p>
                    </div>
                    <div className="room">
                      <p>1 room/night</p>
                    </div>
                    <Link href="/hotel-detail" className="btn bookNow">
                      book now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hotelDetailCard bookDetailForm">
          <form className="hotelForm">
            <div className="form-group">
              <label htmlFor="check-in">Check In</label>
              <input type="date" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="check-out">Check Out</label>

              <input type="date" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="room-guest">Room & Guest</label>
              <select className="form-select">
                <option value="1 Room / 2 People">1 Room / 2 People</option>
              </select>
            </div>

            <div className="form-group">
              <button className="btn searchHotel">Update Info</button>
            </div>
          </form>
        </div>
        <div className="hotelDetailCard hotelRules">
          <h5>Hotel Rules</h5>
          <ul>
            <li>Check-in: 12:00pm - 10:00am</li>
            <li>Check-out: 09:00am</li>
            <li>No Smoking</li>
            <li>Drug Addiction not allowed</li>
            <li>No Pets allowed</li>
            <li>No parties no events</li>
          </ul>
        </div>
        <div className="hotelDetailCard cancellation">
          <h5>
            <FaCircleInfo /> cancellation
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            cumque, qui inventore sapiente id repellendus obcaecati recusandae
            doloremque asperiores quibusdam non. Quaerat, obcaecati. Pariatur
            assumenda earum commodi odio itaque natus?
          </p>
        </div>
      </div>
    </>
  );
};

export default HotelDetailInfo;
