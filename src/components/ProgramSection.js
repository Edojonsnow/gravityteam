import React from "react";
import ProgramGraphic from "./ProgramGraphic";
import Image from "next/image";

const ProgramSection = () => {
  return (
    <div className="bg-darkGrey rounded-tl-[40px] gap-[100px] pb-20 rounded-tr-[40px]  rounded-br-[40px] rounded-bl-[40px]  flex lg:flex-row justify-between  lg:px-16 flex-col  mt-6">
      <ProgramGraphic />
      <div className="pt-[59px]  ">
        <div
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className=""
        >
          <h4 className="font-electrolize">PROGRAM</h4>
          <h1 className="">PRODUCT DESIGN PROGRAM DETAILS IN THIS PROGRAM</h1>
        </div>
        <div className="mt-16">
          <div className="flex justify-between border-b border-t border-black py-6 ">
            <h2
              data-aos="fade-right"
              data-aos-delay="350"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              LEARN ALL OF THE SKILLS, TOOLS AND PROCESSES
            </h2>
            <Image
              data-aos="fade-right"
              data-aos-delay="350"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              src="/arrow.svg"
              width={48}
              height={48}
              alt="line"
            />
          </div>
          <div className="flex justify-between border-b border-black py-6 ">
            <h2
              data-aos="fade-right"
              data-aos-delay="350"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              WORK WITH AN EXPERT MENTOR AND TUTOR
            </h2>
            <Image
              data-aos="fade-right"
              data-aos-delay="350"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              src="/arrow.svg"
              width={48}
              height={48}
              alt="line"
            />
          </div>
          <div className="flex justify-between border-b border-black py-6 ">
            <h2
              data-aos="fade-right"
              data-aos-delay="350"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              RECEIVE TAILORED COACHING FROM OUR CAREER
            </h2>
            <Image
              data-aos="fade-right"
              data-aos-delay="350"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              src="/arrow.svg"
              width={48}
              height={48}
              alt="line"
            />
          </div>
          <div className="flex justify-between border-b border-black py-6 ">
            <h2
              data-aos="fade-right"
              data-aos-delay="350"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              BUILD AN IMPRESSIVE PORTFOLIO
            </h2>
            <Image
              data-aos="fade-right"
              data-aos-delay="350"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              src="/arrow.svg"
              width={48}
              height={48}
              alt="line"
            />
          </div>
          <div className="flex justify-between border-b border-black py-6 ">
            <h2
              data-aos="fade-right"
              data-aos-delay="350"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              LAND A JOB AS A UX DESIGNER
            </h2>
            <Image
              data-aos="fade-right"
              data-aos-delay="350"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              src="/arrow.svg"
              width={48}
              height={48}
              alt="line"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;
