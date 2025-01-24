"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [highlightStyle, setHighlightStyle] = useState({});
  const navRef = useRef(null);

  const handleClick = (index, event) => {
    setActiveIndex(index);
    const target = event.target.getBoundingClientRect();
    const parent = navRef.current.getBoundingClientRect();

    switch (index) {
      case 1:
        setHighlightStyle({
          transform: `translateX(${target.left - 15 - parent.left}px)`,
          width: `${target.width + 30}px`,
          padding: "0 40px",
        });
        break;
      case 2:
        setHighlightStyle({
          transform: `translateX(${target.left - 15 - parent.left}px)`,
          width: `${target.width + 30}px`,
          padding: "0 40px",
        });
        break;
      case 3:
        setHighlightStyle({
          transform: `translateX(${target.left - 15 - parent.left}px)`,
          width: `${target.width + 30}px`,
          padding: "0 40px",
        });
        break;
      case 4:
        setHighlightStyle({
          transform: `translateX(${target.left - 25 - parent.left}px)`,
          width: `${target.width + 50}px`,
          padding: "0 50px",
        });
        break;
      case 5:
        setHighlightStyle({
          transform: `translateX(${target.left - 30 - parent.left}px)`,
          width: `${target.width + 50}px`,
          padding: "0 40px",
        });
        break;
    }
  };

  const linkStyle = () => ({
    textDecoration: "none",
    transition: "color 0.2s ease",
  });
  return (
    <div className="flex justify-between items-center p-4">
      <Image
        data-aos="fade-right"
        src="/logo_black.svg"
        alt="logo"
        width={50}
        height={50}
      />

      <div
        data-aos="fade-down"
        ref={navRef}
        className="flex overflow-hidden gap-1 relative items-center bg-white    border border-black  rounded-[42px]"
      >
        <div className="navSpan  h-full top-0  " style={highlightStyle}></div>
        <div
          onClick={(event) => handleClick(1, event)}
          style={linkStyle(activeIndex === 1)}
          className="flex pl-4 w-28 relative items-center "
        >
          <Image
            data-aos="fade-down"
            data-aos-delay="0"
            className="absolute top-0 -right-1"
            src="/nav-curve.svg"
            width={40}
            height={40}
            alt="nav-curve"
          />
          <Image
            className="absolute bottom-0 rotate-180 -right-1"
            src="/nav-curve.svg"
            width={40}
            height={40}
            alt="nav-curve"
          />
          <p className="py-2 text-center font-electrolize  ">Course</p>
        </div>
        <div
          className="flex w-28 relative items-center "
          onClick={(event) => handleClick(2, event)}
          style={linkStyle(activeIndex === 2)}
        >
          <Image
            data-aos="fade-down"
            data-aos-delay="100"
            className="absolute top-0 -right-1"
            src="/nav-curve.svg"
            width={40}
            height={40}
            alt="nav-curve"
          />
          <Image
            className="absolute bottom-0 rotate-180 -right-1"
            src="/nav-curve.svg"
            width={40}
            height={40}
            alt="nav-curve"
          />
          <p className="py-2   text-center  px-1 font-electrolize  ">Program</p>
        </div>
        <div
          className="flex w-28 relative items-center "
          onClick={(event) => handleClick(3, event)}
          style={linkStyle(activeIndex === 3)}
        >
          <Image
            data-aos="fade-down"
            data-aos-delay="200"
            className="absolute top-0 right-1"
            src="/nav-curve.svg"
            width={40}
            height={40}
            alt="nav-curve"
          />
          <Image
            className="absolute bottom-0 rotate-180 right-1"
            src="/nav-curve.svg"
            width={40}
            height={40}
            alt="nav-curve"
          />
          <p className="py-2 text-center  px-2 font-electrolize  ">About</p>
        </div>
        <div
          className="flex w-28 relative items-center "
          onClick={(event) => handleClick(4, event)}
          style={linkStyle(activeIndex === 4)}
        >
          <Image
            data-aos="fade-down"
            data-aos-delay="300"
            className="absolute top-0 right-3"
            src="/nav-curve.svg"
            width={40}
            height={40}
            alt="nav-curve"
          />
          <Image
            className="absolute bottom-0 rotate-180 right-3"
            src="/nav-curve.svg"
            width={40}
            height={40}
            alt="nav-curve"
          />
          <p className="py-2 text-center font-electrolize  ">Tools</p>
        </div>
        <div
          className="flex w-20 relative items-center "
          onClick={(event) => handleClick(5, event)}
          style={linkStyle(activeIndex === 5)}
        >
          <p className="py-2 text-center font-electrolize  ">Pricing</p>
        </div>

        {/* <p className="py-2 text-center  px-1">Program</p>
        <p className="py-2 text-center px-1">About</p>
        <p className="py-2 text-center  px-1">Tools</p>
        <p className="py-2 text-center  px-1">Pricing</p> */}
      </div>

      <div
        data-aos="fade-left"
        className="border border-black rounded-full w-11 h-11 flex items-center justify-center p-1 bg-yellow"
      >
        <Image src="/icon_login.svg" alt="logo" width={24} height={24} />
      </div>
    </div>
  );
};

export default Nav;
