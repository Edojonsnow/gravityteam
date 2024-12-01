import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="mx-16 flex justify-between">
      <div>
        <h1
          data-aos="fade-in"
          data-aos-delay="350"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className=" pt-20  text-[75px]"
        >
          THE MATTE ENGINE <br /> PRODUCT DESIGN <br /> COURSES
        </h1>
        <div
          data-aos="fade-in"
          data-aos-delay="400"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          className="flex mt-10 justify-center  cursor-pointer group transition-all items-center gap-2 border border-black rounded-full py-3 px-7 bg-yellow w-fit"
        >
          <button className="font-electrolize">Register </button>
          <Image
            className="group-hover:scale-125 group-hover:rotate-45 transition-all"
            src="/line-arrow2.svg"
            width={20}
            height={20}
            alt="arrow"
          />
        </div>
      </div>
      <div className="z-30">
        <Image
          data-aos="fade-in"
          data-aos-delay="350"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          src="/pose1_big.svg"
          width={590}
          height={600}
          alt="pose"
        />
      </div>
    </div>
  );
};

export default Hero;
