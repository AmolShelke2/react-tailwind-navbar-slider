import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center px-8 bg-teal-400 py-4 text-white">
      <div className="relative">
        <h1 className="text-xl font-bold">Animated slider</h1>
      </div>
      <div className="relative">
        <ul className="hidden sm:flex sm justify-around px-4 cursor-pointer">
          <li className="mr-2 text-lg">Home</li>
          <li className="mr-2 text-lg">About</li>
          <li className="mr-2 text-lg">More info</li>
          <li className="text-lg">About us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
