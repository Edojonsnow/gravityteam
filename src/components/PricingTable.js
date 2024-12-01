import { IconCheck, IconX } from "@tabler/icons-react";
import React from "react";

const PricingTable = () => {
  return (
    <div className="text-white flex relative mx-16 mt-16 ">
      <div className="flex pl-10 py-1 justify-center flex-col w-[452px] h-[378px] mt-[156px] text-black bg-white border-white border  rounded-tl-[40px] rounded-bl-[40px]">
        <p className="my-5 text-lg font-electrolize font-bold">
          Video Conferencing
        </p>
        <p className="my-5 text-lg font-electrolize font-bold">
          Lecture Package
        </p>
        <p className="my-5 text-lg font-electrolize font-bold">
          General Information
        </p>
        <p className="my-5 text-lg font-electrolize font-bold">
          Introduction to Specialty
        </p>
        <p className="my-5 text-lg font-electrolize font-bold">Main Teachers</p>
      </div>
      <div className="relative flex">
        <div className="absolute flex flex-col gap-11 hover:gap-0 overflow-hidden w-[216px]  group   hover:rounded-[40px] transition-none   px-5 py-4 items-center justify-center hover:bg-yellow hover:text-black">
          <div className="h-24 ">
            <h1 className="">Free</h1>
            <p className="text-sm uppercase  font-bold  ">
              2 days free lectures
            </p>
          </div>
          <div className=" projectPopup    transition-[height] duration-700 ease-in-out flex-col items-center justify-center">
            <div className="flex w-[216px] h-[378px] flex-col border border-gray-500 group-hover:border-0   group-hover:h-[450px] group-hover:py-0  items-center justify-center">
              <IconX stroke={2} size={20} className="my-6" />
              <IconX stroke={2} size={20} className="my-6" />
              <IconCheck stroke={2} size={20} className="my-6" />
              <IconCheck stroke={2} size={20} className="my-6" />
              <IconX stroke={2} size={20} className="my-6" />
            </div>
            <button className="absolute hidden bottom-5 w-[170px] mx-auto left-0 right-0 group-hover:block   bg-black text-white px-4 py-4 rounded-[26px]">
              JOIN
            </button>
          </div>
        </div>

        <div className="absolute left-[216px] flex flex-col gap-11 hover:gap-0 overflow-hidden w-[216px]  group   hover:rounded-[40px] transition-none   px-5 py-4 items-center justify-center hover:bg-yellow hover:text-black">
          <div className="h-24 ">
            <h1 className="">
              <sup className="text-sm relative -top-10  font-bold">$</sup>
              29
              <sub className="text-sm font-bold ">per/m</sub>
            </h1>
            <p className="text-sm uppercase  font-bold  ">
              Courses without meeting with the teachers
            </p>
          </div>
          <div className=" projectPopup    transition-[height] duration-500 flex-col items-center justify-center">
            <div className="flex w-[216px] h-[378px] flex-col  border border-gray-500 group-hover:border-0   py-4 group-hover:h-[450px] group-hover:py-0  items-center justify-center">
              <IconX stroke={2} size={20} className="my-6" />
              <IconX stroke={2} size={20} className="my-6" />
              <IconCheck stroke={2} size={20} className="my-6" />
              <IconCheck stroke={2} size={20} className="my-6" />
              <IconX stroke={2} size={20} className="my-6" />
            </div>
            <button className="hidden w-[170px] mx-auto left-0 right-0 group-hover:block absolute bottom-5 bg-black text-white px-4 py-4 rounded-[26px]">
              JOIN
            </button>
          </div>
        </div>
        <div className="absolute left-[432px] flex flex-col gap-11 hover:gap-0 overflow-hidden w-[216px]  group   hover:rounded-[40px] transition-none   px-5 py-4 items-center justify-center hover:bg-yellow hover:text-black">
          <div className="h-24 ">
            <h1 className="">
              <sup className="text-sm relative -top-10  font-bold">$</sup>
              59
              <sub className="text-sm font-bold ">per/m</sub>
            </h1>
            <p className="text-sm uppercase  font-bold ">FULL COURSE PACKAGE</p>
          </div>
          <div className=" projectPopup  transition-[height] duration-500 flex-col items-center justify-center">
            <div className="flex w-[216px] h-[378px] flex-col  py-4 border border-gray-500 group-hover:border-0  group-hover:h-[450px] group-hover:py-0  items-center justify-center">
              <IconX stroke={2} size={20} className="my-6" />
              <IconX stroke={2} size={20} className="my-6" />
              <IconCheck stroke={2} size={20} className="my-6" />
              <IconCheck stroke={2} size={20} className="my-6" />
              <IconX stroke={2} size={20} className="my-6" />
            </div>
            <button className="hidden w-[170px] mx-auto left-0 right-0 group-hover:block absolute bottom-5 bg-black text-white px-4 py-4 rounded-[26px]">
              JOIN
            </button>
          </div>
        </div>
        <div className="absolute left-[648px] flex flex-col gap-11 hover:gap-0 overflow-hidden w-[216px]  group   hover:rounded-[40px] transition-none   px-5 py-4 items-center justify-center hover:bg-yellow hover:text-black">
          <div className="h-24 ">
            <h1 className="">
              <sup className="text-sm relative -top-10  font-bold">$</sup>
              99
              <sub className="text-sm font-bold ">per/m</sub>
            </h1>
            <p className="text-sm font-bold ">
              PREMIUN LECTURES WITH MAIN TEACHERS OF THE COURSE
            </p>
          </div>
          <div className=" projectPopup  transition-[height] duration-500 flex-col items-center justify-center">
            <div className="flex w-[216px] h-[378px] flex-col  py-4 border border-gray-500 group-hover:border-0  group-hover:h-[450px] group-hover:py-0  items-center justify-center">
              <IconX stroke={2} size={20} className="my-6" />
              <IconX stroke={2} size={20} className="my-6" />
              <IconCheck stroke={2} size={20} className="my-6" />
              <IconCheck stroke={2} size={20} className="my-6" />
              <IconX stroke={2} size={20} className="my-6" />
            </div>
            <button className="hidden w-[170px] mx-auto left-0 right-0 group-hover:block absolute bottom-5 bg-black text-white px-4 py-4 rounded-[26px]">
              JOIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
