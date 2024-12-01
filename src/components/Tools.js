import Image from "next/image";
import React from "react";

const Tools = () => {
  return (
    <div className="bg-darkGrey -mt-10 pt-10 pb-12 rounded-bl-[42px]   rounded-br-[42px]  ">
      <div className=" pt-12 pl-16">
        <h4 className="font-electrolize">TOOLS</h4>
        <h1 className="">
          THE TOOL HELPS TO ENHANCE <br /> DESIGNER'S EXPERIENCE
        </h1>
      </div>
      <div className="flex pt-12 ">
        <div className="relative w-[500px] h-[611px] animate-bounce animate-ease-in-out  ">
          <Image className="" src="/second-graphic.svg" fill alt="tools" />
        </div>

        <div className="flex flex-col -ml-10 ">
          <div className="flex pl-[300px]">
            <div className="border border-black border-r-0 border-b-0 rounded-tl-[42px] flex  flex-col justify-between  p-4 w-[300px] h-[300px]">
              <h2 className="font-electrolize">General</h2>
              <p>
                Structure and navigation design. Designing interface screens and
                their interactive prototypes (including the specifics of
                Android, iOS platforms, etc.).
              </p>
            </div>
            <div className="border border-black rounded-tr-[42px]  border-b-0  flex  flex-col justify-between p-4 w-[300px] h-[300px]">
              <h2 className="font-electrolize">Analytics</h2>
              <p>
                Understanding the subject area and the market. Define and track
                front-end and product metrics.Building and testing product
                hypotheses. Statistics, big data analysis.
              </p>
            </div>
          </div>
          <div>
            <div className="flex">
              {" "}
              <div className="border bg-white border-black border-r-0 rounded-tl-[42px]  rounded-bl-[42px]  flex  flex-col justify-between  p-4 w-[300px] h-[300px]">
                <h2 className="font-electrolize">Researches</h2>
                <p>
                  Understanding and describing users. Verification of design
                  solutions. Expert review.
                </p>
              </div>
              <div className="border border-black  border-r-0   flex  flex-col justify-between p-4 w-[300px] h-[300px]">
                <h2 className="font-electrolize">Visual Design</h2>
                <p>
                  Composition and grids, typography, color science Iconography
                  and illustrations Interface animation.
                </p>
              </div>
              <div className="border bg-black border-black rounded-br-[42px]  flex  flex-col justify-between p-4 w-[300px] h-[300px]">
                <h2 className="font-electrolize text-white">Front-end</h2>
                <p className="text-white">
                  Layout (HTML, CSS, JavaScript) and interface animation.
                  Working with data sources. Setting up a working environment
                  for testing and running services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
