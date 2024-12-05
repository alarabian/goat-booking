import PageCover from "@/components/common/cover/PageCover";
import Order from "@/components/order/Order";
import React from "react";

const page = () => {
  return (
    <>
      <PageCover title={"Order"} bgColor={"#06377e"} />
      <Order />
    </>
  );
};

export default page;
