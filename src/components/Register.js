"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const Register = () => {
  return (
    <div className="lg:px-16 px-4 pt-10 pb-12 z-10">
      <div className="writeUp">
        <h1 className=" text-left w-[1240px] text-h1 uppercase   ">
          <span>
            If you're looking to take your design career to the next level, this
            course is for you. We'll cover design management patterns that have
            been proven by real-world experience, and you'll have the
            opportunity to network with other experienced professionals. This is
            an essential course for anyone who wants to stay on the cutting edge
            of the design industry.
          </span>
        </h1>
      </div>

      <div
        data-aos="increase-width"
        data-aos-duration="1500"
        className="flex mt-10 justify-center cursor-pointer group transition-all items-center gap-2 border border-black rounded-full py-3 px-7 bg-yellow w-full"
      >
        <button
          data-aos="fade-in"
          data-aos-duration="1000"
          className="font-electrolize"
        >
          Register{" "}
        </button>
        <Image
          className="group-hover:scale-125 group-hover:rotate-45 transition-all"
          src="/line-arrow2.svg"
          width={20}
          height={20}
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default Register;
