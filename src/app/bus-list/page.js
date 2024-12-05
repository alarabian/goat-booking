import BusCoverForm from "@/components/bus-list/bus-cover-form/BusCoverForm";
import BusList from "@/components/bus-list/BusList";
import React from "react";

const page = () => {
  return (
    <>
      <BusCoverForm />
      <BusList />
    </>
  );
};

export default page;
