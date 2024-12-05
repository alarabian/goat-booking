import React from 'react'
import FlightRouteItem from './flight-route-item/FlightRouteItem'

const FlightRoute = () => {
  return (
    <>
      <section className="flightRoute sectionSpace">
        <div className="container">
          <div className="sectionTitle text-center">
            <h2>Popular Flight Route</h2>
            <p>
              A Booking is a system for travels in the form odf service, A vibe
              and explore te top destinations in worlds
            </p>
          </div>
          <div className="row">
            <FlightRouteItem />
          </div>
        </div>
      </section>
    </>


  )
}

export default FlightRoute