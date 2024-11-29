import Image from "next/image";
import React from "react";

const Register = () => {
  return (
    <div className="lg:px-16 px-4 pt-10 pb-12 z-10">
      <h1 className="text-left w-[1240px] text-h1 uppercase  text-white">
        If you're looking to take your design career to the next level, this
        course is for you. We'll cover design management patterns that have been
        proven by real-world experience, and you'll have the opportunity to
        network with other experienced professionals. This is an essential
        course for anyone who wants to stay on the cutting edge of the design
        industry.
      </h1>

      <div className="flex mt-10 justify-center items-center gap-2 border border-black rounded-full py-3 px-7 bg-yellow w-full">
        <button>Register </button>
        <Image src="/line-arrow2.svg" width={20} height={20} alt="arrow" />
      </div>
    </div>
  );
};

export default Register;
