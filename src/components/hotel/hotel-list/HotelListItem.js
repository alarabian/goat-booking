import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar, FaWifi } from "react-icons/fa6";
import { MdLocationPin, MdSportsGymnastics } from "react-icons/md";

const HotelListItem = () => {
  return (
    <>
      <div className="hotelListItem">
        <div className="info">
          <div className="figure">
            <Image
              src={"/assets/images/destination2.webp"}
              width={400}
              alt="destination"
              height={400}
              className="img-fluid"
              title="destination"
            ></Image>
          </div>
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
              <span className=" text-decoration-line-through">8442</span>
              <p>20% OFF</p>
            </div>
            <div className="room">
              <p>1 room/night</p>
            </div>
            <Link href="/hotel-detail" className="btn bookNow">book now</Link>
          </div>
        </div>
        <div className="review">
          <h6>
            <FaStar /> 4.6
          </h6>
          <p>Very good</p>
          <span>(806 Rating)</span>
        </div>
      </div>
      <div className="hotelListItem">
        <div className="info">
          <div className="figure">
            <Image
              src={"/assets/images/destination3.webp"}
              width={400}
              alt="destination"
              height={400}
              className="img-fluid"
              title="destination"
            ></Image>
          </div>
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
              <span className=" text-decoration-line-through">8442</span>
              <p>20% OFF</p>
            </div>
            <div className="room">
              <p>1 room/night</p>
            </div>
            <Link href="/hotel-detail" className="btn bookNow">book now</Link>

          </div>
        </div>
        <div className="review">
          <h6>
            <FaStar /> 4.6
          </h6>
          <p>Very good</p>
          <span>(806 Rating)</span>
        </div>
      </div>
      <div className="hotelListItem">
        <div className="info">
          <div className="figure">
            <Image
              src={"/assets/images/destination1.jpg"}
              alt="destination"
              width={400}
              height={400}
              className="img-fluid"
              title="destination"
            ></Image>
          </div>
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
              <span className=" text-decoration-line-through">8442</span>
              <p>20% OFF</p>
            </div>
            <div className="room">
              <p>1 room/night</p>
            </div>
            <Link href="/hotel-detail" className="btn bookNow">book now</Link>

          </div>
        </div>
        <div className="review">
          <h6>
            <FaStar /> 4.6
          </h6>
          <p>Very good</p>
          <span>(806 Rating)</span>
        </div>
      </div>
    </>
  );
};

export default HotelListItem;
