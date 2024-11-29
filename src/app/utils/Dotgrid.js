import React from "react";

const Dotgrid = () => {
  const dots = Array.from({ length: 56 }, (_, i) => i);

  return (
    <div className="grid grid-cols-7 gap-20 pt-16 pr-[92px]">
      {dots.map((dot) => (
        <div key={dot} className="w-1 h-1 bg-black rounded-full"></div>
      ))}
    </div>
  );
};

export default Dotgrid;
