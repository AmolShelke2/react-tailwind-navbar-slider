import React from "react";

const Navbar = () => {
  return (
    <div className="flex-row justify-between items-center hidden sm:flex px-8">
      <div className="relative">
        <h1 className="text-xl">Animated slider</h1>
      </div>
      <div className="relative">
        <ul className="flex justify-around px-4">
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
