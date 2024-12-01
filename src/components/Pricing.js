import React from "react";
import PricingTable from "./PricingTable";

const Pricing = () => {
  const features = [
    "Video Conference",
    "Lecture Package",
    "General Information",
    "Introduction to Specialty",
    "Main Teachers",
  ];

  return (
    <div className="relative  " id="pricing">
      <div className="bg-black relative  pt-10 pb-12 -mt-10 -z-10 rounded-bl-[60px] rounded-br-[60px] h-[1000px] "></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className=" pt-24 pl-16 text-white  ">
          <h4 className="font-electrolize">PRICING</h4>
          <h1 className="">
            SELECT A MEMBERSHIP LEVEL <br /> THE RIGHT PRICE FOR YOU
          </h1>
        </div>{" "}
        <PricingTable />
      </div>
    </div>
  );
};

export default Pricing;
