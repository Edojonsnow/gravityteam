import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white font-electrolize px-11 pb-16 rounded-tr-[60px] -mt-10 pt-10   rounded-tl-[60px]">
      <div className=" flex gap-10">
        <div className="flex pt-6 flex-col">
          <Image
            className=" ml-5"
            src="/LogoWhite.svg"
            alt="logo"
            width={52}
            height={52}
          />
          <div className="flex gap-5 pt-11">
            <div className="border-dashed border-gray-500 border hover:border-yellow  transition-all duration-300 cursor-pointer  w-[60px] h-[60px] flex items-center justify-center">
              <Image src="/meta.svg" alt="facebook" width={14} height={26} />
            </div>
            <div className="border-dashed border-gray-500 border hover:border-yellow  transition-all cursor-pointer  w-[60px] h-[60px] flex items-center justify-center">
              <Image src="/twitter.svg" alt="facebook" width={28} height={23} />
            </div>
            <div className="border-dashed border-gray-500 border hover:border-yellow  transition-all cursor-pointer group group-hover:border-yellow group-hover:text-black  duration-300  w-[60px] h-[60px] flex items-center justify-center">
              <Image
                src="/googleplus-logo.svg"
                alt="social"
                width={33}
                height={20}
                className="text-blue-600"
              />
            </div>
            <div className="border-dashed border-gray-500 border hover:border-yellow  transition-all cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
              <Image
                src="/linkedin.svg"
                alt="facebook"
                width={26}
                height={26}
              />
            </div>
            <div className="border-dashed border-gray-500 border hover:border-yellow  transition-all cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
              <Image src="/youtube.svg" alt="facebook" width={31} height={22} />
            </div>
          </div>
          <p className="text-sm font-electrolize hover:text-yellow  transition-all opacity-80 pt-10">
            © Matte Engine, all rights reserved.
          </p>
        </div>
        <div className="flex ">
          <div className="flex flex-col justify-center border-l pl-8 w-[240px] h-[210px]">
            <p className="text-lg font-bold cursor-pointer hover:text-yellow  transition-all pb-5">
              Course
            </p>
            <p className="text-sm font-electrolize opacity-80 cursor-pointer hover:text-yellow  transition-all pb-3">
              Info Course
            </p>
            <p className="text-sm font-electrolize opacity-80 cursor-pointer hover:text-yellow  transition-all pb-3">
              Program
            </p>
            <p className="text-sm font-electrolize opacity-80 cursor-pointer hover:text-yellow  transition-all pb-3">
              Tools
            </p>
          </div>
          <div className="flex flex-col justify-center border-l pl-8 w-[240px] h-[210px]">
            <p className="text-lg font-bold cursor-pointer hover:text-yellow  transition-all pb-5">
              Social
            </p>
            <p className="text-sm font-electrolize opacity-80 cursor-pointer hover:text-yellow  transition-all pb-3">
              Facebook
            </p>
            <p className="text-sm font-electrolize opacity-80 cursor-pointer hover:text-yellow  transition-all pb-3">
              Twitter
            </p>
            <p className="text-sm font-electrolize opacity-80 cursor-pointer hover:text-yellow  transition-all pb-3">
              Instagram
            </p>
          </div>
          <div className="flex flex-col justify-center border-l pl-8 w-[240px]  h-[210px]">
            <p className="text-lg font-bold cursor-pointer hover:text-yellow  transition-all pb-5">
              Plans & Pricing
            </p>
            <p className="text-sm font-electrolize opacity-80 cursor-pointer hover:text-yellow  transition-all pb-3">
              Pricing
            </p>
            <p className="text-sm font-electrolize opacity-80 cursor-pointer hover:text-yellow  transition-all pb-3">
              Team
            </p>
            <p className="text-sm font-electrolize opacity-80 cursor-pointer hover:text-yellow  transition-all pb-3">
              Business
            </p>
          </div>
          <div className="flex flex-col justify-center border-l pl-8  w-[240px]  h-[210px]">
            <p className="text-lg font-bold cursor-pointer hover:text-yellow  transition-all pb-5">
              Contacts
            </p>
            <p className="text-sm font-electrolize opacity-80 cursor-pointer hover:text-yellow  transition-all pb-3">
              About Us
            </p>
            <p className="text-sm font-electrolize opacity-80 cursor-pointer hover:text-yellow  transition-all pb-3">
              How it works
            </p>
            <p className="text-sm font-electrolize opacity-80 cursor-pointer hover:text-yellow  transition-all pb-3">
              Pricing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
