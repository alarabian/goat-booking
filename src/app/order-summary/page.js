import PageCover from "@/components/common/cover/PageCover";
import OrderSummary from "@/components/order-summary/OrderSummary";
import React from "react";

const page = () => {
  return (
    <>
      <PageCover title="Order Summary" bgColor={"#06377e"} />
      <OrderSummary />
    </>
  );
};

export default page;
