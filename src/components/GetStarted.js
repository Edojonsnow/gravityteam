import React from "react";

const GetStarted = () => {
  return (
    <div className="relative">
      <div className="bg-yellow relative  pt-10 pb-12 -mt-10 -z-30  h-[640px] "></div>
      <div className="absolute top-0 left-0 flex gap-20 w-full h-full">
        <div className=" pt-32 pl-16 text-black w-full max-w-[1034px]   ">
          <div>
            <h4 className="font-electrolize">GET STARTED</h4>
            <h1 className="">
              LET'S START THE <br /> FIRST CONVERSION
            </h1>
          </div>
          <div className="flex mt-10  gap-12">
            <div className="flex w-full max-w-[460px] flex-col gap-2">
              <label className="text-sm font-electrolize text-gray-500">
                Your name
              </label>
              <input
                className="border-b font-electrolize border-black bg-transparent outline-none pb-4"
                type="text"
              />
            </div>
            <div className="flex w-full max-w-[460px] flex-col gap-2">
              <label className="text-sm font-electrolize text-gray-500">
                Your Email
              </label>
              <input
                className="border-b font-electrolize border-black bg-transparent outline-none pb-4"
                type="text"
              />
            </div>
          </div>
          <button className="bg-black text-white font-electrolize mt-16 px-10 py-4 w-full  rounded-[26px]">
            Join
          </button>
        </div>
        <div className="flex gap-1 pt-36">
          <div className=" w-5 lg:w-10 h-[374px] bg-black rounded-[20px]"></div>
          <div className=" w-5 lg:w-10 h-[374px] bg-black rounded-[20px]"></div>
          <div className=" w-5 lg:w-10 h-[374px] bg-black rounded-[20px]"></div>
          <div className=" w-5 lg:w-10 ml-12 rotate-[165deg] h-[380px] bg-black rounded-[20px]"></div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
