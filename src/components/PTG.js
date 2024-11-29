import React from "react";
import Dotgrid from "@/app/utils/Dotgrid";
import Image from "next/image";
const PTG = () => {
  return (
    <div className="relative bg-yellow flex gap-10 justify-between  pt-4 pb-10  rounded-tl-[40px] rounded-tr-[40px]">
      <Image
        className="absolute top-0 mx-auto left-0 right-0"
        src="/curve-yellow.svg"
        width={100}
        height={100}
        alt="line"
      />
      <div className="flex-1">
        <div className="flex flex-col gap-20 justify-end">
          <div>
            <h1 className="text-h1  pt-[100px] pl-10  ">
              JOIN THE PATH <br /> TO GREATNESS{" "}
            </h1>
            <p className="w-full max-w-[700px]  pl-10 pt-12 font-semibold">
              This course is designed to help you materialize your game-changing{" "}
              <br />
              idea and transform it into a product that you can build a business
              around. Product Design blends theory and practice to teach you
              product validation.
            </p>
          </div>
          <div className="flex ">
            <div className="flex flex-col items-start gap-10 px-12">
              <Image src="/icon.svg" width={50} height={50} alt="line" />
              <div>
                <h2>40 hr</h2>
                <p>Fully Online</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-10 px-12">
              <Image src="/pillars.svg" width={50} height={50} alt="line" />
              <div>
                <h2>60 </h2>
                <p>Practice Days</p>
              </div>
            </div>
            <div className="flex flex-col gap-16 items-start px-12">
              <Image src="/bubble.svg" width={66} height={50} alt="line" />
              <div>
                <h2>120</h2>
                <p>Exercises</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Dotgrid />
      </div>
    </div>
  );
};

export default PTG;
