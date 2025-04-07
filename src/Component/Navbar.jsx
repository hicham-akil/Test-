import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[var(--color-custom-blue)] h-15 text-white flex justify-between  ">
      <h1 className="text-xl font-bold ml-10 mt-5 ">Where in the world?</h1>
      <div className="">
        <span>🌙</span>
        <button className="hover:text-gray-300 mt-5 mr-2 transition">Dark Mode</button>
      </div>
    </div>
  );
};

export default Navbar;
