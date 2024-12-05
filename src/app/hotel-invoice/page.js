import PageCover from "@/components/common/cover/PageCover";
import HotelInvoice from "@/components/hotel-invoice/HotelInvoice";
import React from "react";

const page = () => {
  return (
    <>
      <PageCover title={"Hotel Booking Invoice"} />
      <HotelInvoice />
    </>
  );
};

export default page;
