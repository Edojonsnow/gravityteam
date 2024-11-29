import React from "react";
import ProgramGraphic from "./ProgramGraphic";
import Image from "next/image";

const ProgramSection = () => {
  return (
    <div className="bg-darkGrey rounded-tl-[40px] pb-20 rounded-tr-[40px]  rounded-br-[40px] rounded-bl-[40px]  flex lg:flex-row justify-between  lg:px-16 flex-col  mt-6">
      <ProgramGraphic />
      <div className="pt-[59px] lg:w-[750px] ">
        <div className="">
          <h4 className="font-electrolize">PROGRAM</h4>
          <h1 className="">PRODUCT DESIGN PROGRAM DETAILS IN THIS PROGRAM</h1>
        </div>
        <div className="mt-16">
          <div className="flex justify-between border-b border-t border-black py-6 ">
            <h2>LEARN ALL OF THE SKILLS, TOOLS AND PROCESSES</h2>
            <Image src="/arrow.svg" width={48} height={48} alt="line" />
          </div>
          <div className="flex justify-between border-b border-black py-6 ">
            <h2>WORK WITH AN EXPERT MENTOR AND TUTOR</h2>
            <Image src="/arrow.svg" width={48} height={48} alt="line" />
          </div>
          <div className="flex justify-between border-b border-black py-6 ">
            <h2>RECEIVE TAILORED COACHING FROM OUR CAREER</h2>
            <Image src="/arrow.svg" width={48} height={48} alt="line" />
          </div>
          <div className="flex justify-between border-b border-black py-6 ">
            <h2>BUILD AN IMPRESSIVE PORTFOLIO</h2>
            <Image src="/arrow.svg" width={48} height={48} alt="line" />
          </div>
          <div className="flex justify-between border-b border-black py-6 ">
            <h2>LAND A JOB AS A UX DESIGNER</h2>
            <Image src="/arrow.svg" width={48} height={48} alt="line" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;
