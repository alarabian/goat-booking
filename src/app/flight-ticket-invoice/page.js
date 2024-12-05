import PageCover from "@/components/common/cover/PageCover";
import FlightInvoice from "@/components/flight-invoice/FlightInvoice";
import React from "react";

const page = () => {
  return (
    <>
      <PageCover title={"Flight Ticket Invoice"} />
      <FlightInvoice />
    </>
  );
};

export default page;
