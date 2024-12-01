import React from "react";

const Dotgrid = () => {
  const dots = Array.from({ length: 56 }, (_, i) => i);

  return (
    <div
      data-aos="fade-in"
      data-aos-offset="200"
      data-aos-delay="100"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      className="dots grid grid-cols-7 gap-20 pt-16 pr-[92px]"
    >
      {dots.map((dot) => (
        <div key={dot} className="w-1 h-1 bg-black rounded-full"></div>
      ))}
    </div>
  );
};

export default Dotgrid;
