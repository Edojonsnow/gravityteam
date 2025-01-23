import React from "react";
import Dotgrid from "@/app/utils/Dotgrid";
import Image from "next/image";
const PTG = () => {
  return (
    <div
      data-aos="slide-up"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
      className="relative bg-yellow flex gap-10 mx-6 justify-between  pt-4 pb-10  rounded-tl-[40px] rounded-tr-[40px]"
    >
      <Image
        className="absolute top-0 mx-auto left-0 right-0"
        src="/curve-yellow.svg"
        width={100}
        height={100}
        alt="line"
      />
      <div className="flex-1">
        <div className="flex flex-col gap-28 justify-end">
          <div>
            <h1
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="text-h1  pt-[60px] pl-10  "
            >
              JOIN THE PATH <br /> TO GREATNESS{" "}
            </h1>
            <p
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="w-full max-w-[700px]  pl-10 pt-12 font-semibold"
            >
              This course is designed to help you materialize your game-changing{" "}
              <br />
              idea and transform it into a product that you can build a business
              around. Product Design blends theory and practice to teach you
              product validation.
            </p>
          </div>
          <div className="flex ">
            <div
              data-aos="fade-in"
              data-aos-offset="200"
              data-aos-delay=""
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="flex flex-col items-start gap-10 border-r border-black  px-12"
            >
              <Image src="/icon.svg" width={50} height={50} alt="line" />
              <div>
                <h2 className="font-semibold">40 hr</h2>
                <p className="font-semibold">Fully Online</p>
              </div>
            </div>
            <div
              data-aos="fade-in"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="flex flex-col items-start gap-10 border-r border-black px-12"
            >
              <Image src="/pillars.svg" width={50} height={50} alt="line" />
              <div>
                <h2 className="font-semibold">60 </h2>
                <p className="font-semibold">Practice Days</p>
              </div>
            </div>
            <div
              data-aos="fade-in"
              data-aos-offset="200"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="flex flex-col gap-16 items-start px-12"
            >
              <Image src="/bubble.svg" width={66} height={50} alt="line" />
              <div>
                <h2 className="font-semibold">120</h2>
                <p className="font-semibold">Exercises</p>
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
