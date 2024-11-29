import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="mx-16 flex justify-between">
      <div>
        <h1 className=" pt-20  text-[75px]">
          THE MATTE ENGINE <br /> PRODUCT DESIGN <br /> COURSES
        </h1>
        <div className="flex mt-10 justify-center items-center gap-2 border border-black rounded-full py-3 px-7 bg-yellow w-fit">
          <button>Register </button>
          <Image src="/line-arrow2.svg" width={20} height={20} alt="arrow" />
        </div>
      </div>
      <div className="z-30">
        <Image src="/pose1_big.svg" width={590} height={600} alt="pose" />
      </div>
    </div>
  );
};

export default Hero;
