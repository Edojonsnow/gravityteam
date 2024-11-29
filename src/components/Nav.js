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
      <Image src="/logo_black.svg" alt="logo" width={50} height={50} />

      <div
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
          <p className="py-2 text-center  ">Course</p>
        </div>
        <div
          className="flex w-28 relative items-center "
          onClick={(event) => handleClick(2, event)}
          style={linkStyle(activeIndex === 2)}
        >
          <Image
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
          <p className="py-2   text-center  px-1">Program</p>
        </div>
        <div
          className="flex w-28 relative items-center "
          onClick={(event) => handleClick(3, event)}
          style={linkStyle(activeIndex === 3)}
        >
          <Image
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
          <p className="py-2 text-center  px-2">About</p>
        </div>
        <div
          className="flex w-28 relative items-center "
          onClick={(event) => handleClick(4, event)}
          style={linkStyle(activeIndex === 4)}
        >
          <Image
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
          <p className="py-2 text-center  ">Tools</p>
        </div>
        <div
          className="flex w-20 relative items-center "
          onClick={(event) => handleClick(5, event)}
          style={linkStyle(activeIndex === 5)}
        >
          <p className="py-2 text-center  ">Pricing</p>
        </div>

        {/* <p className="py-2 text-center  px-1">Program</p>
        <p className="py-2 text-center px-1">About</p>
        <p className="py-2 text-center  px-1">Tools</p>
        <p className="py-2 text-center  px-1">Pricing</p> */}
      </div>

      <div className="border border-black rounded-full p-1 bg-yellow">
        <Image
          className="bg-yellow-50 rounded-full p-1"
          src="/icon_login.svg"
          alt="logo"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};

export default Nav;
