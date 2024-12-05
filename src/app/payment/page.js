import PageCover from "@/components/common/cover/PageCover";
import Payment from "@/components/payment/Payment";
import React from "react";

const page = () => {
  return (
    <>
      <PageCover title={"Order"} />
      <Payment />
    </>
  );
};

export default page;
