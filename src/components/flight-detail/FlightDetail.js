import React from 'react'
import FlightInfo from './flight-info/FlightInfo'
import FlightInvoiceSidebar from './flight-invoice-sidebar/FlightInvoiceSidebar'

const FlightDetail = () => {
  return (
    <>
      <div className="flightDetail sectionSpace">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
                <FlightInfo />
            </div>
            <div className="col-md-4">
              <FlightInvoiceSidebar />
            </div>
          </div>
        </div>
      </div>
    </>


  )
}

export default FlightDetail