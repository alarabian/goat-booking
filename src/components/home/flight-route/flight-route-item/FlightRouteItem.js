import Image from "next/image";
import Link from "next/link";
import React from "react";

const FlightRouteItem = () => {
  return (
    <>
      <div className="col-md-4">
        <div className="flightCard">
          <div className="figure">
            <Image
              src={"/assets/images/flight1.webp"}
              width={200}
              height={200}
              className="img-fluid"
              title="flight"
              alt="Flight"
            ></Image>
          </div>
          <div className="flightText">
            <h4>
              <Link href="/flight-list">mumbai</Link>
            </h4>
            <p>
              Via - <span>Goa</span>, <span>Mumbai</span>,{" "}
              <span>Bangalore</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="flightCard">
          <div className="figure">
            <Image
              src={"/assets/images/flight3.jpg"}
              alt="Flight"
              width={200}
              height={200}
              className="img-fluid"
              title="flight"
            ></Image>
          </div>
          <div className="flightText">
            <h4>
              <Link href="/flight-list">goa</Link>
            </h4>
            <p>
              Via - <span>Goa</span>, <span>Mumbai</span>,{" "}
              <span>Bangalore</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="flightCard">
          <div className="figure">
            <Image
              src={"/assets/images/flight2.webp"}
              width={200}
              alt="Flight"
              height={200}
              className="img-fluid"
              title="flight"
            ></Image>
          </div>
          <div className="flightText">
            <h4>
              <Link href="/flight-list">Delhi</Link>
            </h4>
            <p>
              Via - <span>Goa</span>, <span>Mumbai</span>,{" "}
              <span>Bangalore</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="flightCard">
          <div className="figure">
            <Image
              src={"/assets/images/flight2.webp"}
              width={200}
              alt="Flight"
              height={200}
              className="img-fluid"
              title="flight"
            ></Image>
          </div>
          <div className="flightText">
            <h4>
              <Link href="/flight-list">Delhi</Link>
            </h4>

            <p>
              Via - <span>Goa</span>, <span>Mumbai</span>,{" "}
              <span>Bangalore</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="flightCard">
          <div className="figure">
            <Image
              src={"/assets/images/flight1.webp"}
              alt="Flight"
              width={200}
              height={200}
              className="img-fluid"
              title="flight"
            ></Image>
          </div>
          <div className="flightText">
            <h4>
              <Link href="/flight-list">mumbai</Link>
            </h4>

            <p>
              Via - <span>Goa</span>, <span>Mumbai</span>,{" "}
              <span>Bangalore</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="flightCard">
          <div className="figure">
            <Image
              src={"/assets/images/flight3.jpg"}
              alt="Flight"
              width={200}
              height={200}
              className="img-fluid"
              title="flight"
            ></Image>
          </div>
          <div className="flightText">
            <h4>
              <Link href="/flight-list">goa</Link>
            </h4>

            <p>
              Via - <span>Goa</span>, <span>Mumbai</span>,{" "}
              <span>Bangalore</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightRouteItem;
