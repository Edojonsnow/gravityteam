import Image from "next/image";
import React from "react";
import PTG from "./PTG";

const MidSection = () => {
  return (
    <div className="relative bg-black px-6 pt-4 -mt-16 rounded-tl-[40px] rounded-tr-[40px]">
      <Image
        className="absolute top-0 mx-auto left-0 right-0"
        src="/curve.svg"
        width={100}
        height={100}
        alt="line"
      />
      <h2 className="text-h2 pb-10 pl-16 text-white">
        Product Design Fundamentals
      </h2>
      <PTG />
    </div>
  );
};

export default MidSection;
