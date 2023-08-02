import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [navBar, setNavbarActive] = useState(false);

  const navbarHandler = () => {
    setNavbarActive(!navBar);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center px-8 bg-teal-400 py-4 text-white relative">
        <div className="relative">
          <h1 className="text-xl font-bold">Animated slider</h1>
        </div>
        <div className="relative">
          <ul className="hidden sm:flex justify-around px-4 cursor-pointer">
            <li className="mr-2 text-lg">Home</li>
            <li className="mr-2 text-lg">About</li>
            <li className="mr-2 text-lg">More info</li>
            <li className="text-lg">About us</li>
          </ul>
        </div>
        <div className="flex sm:hidden">
          <AiOutlineMenu onClick={navbarHandler} />
        </div>
      </div>

      {/* Mobile navbar */}
      <div className="relative">
        <ul
          className={`${
            navBar
              ? "flex-col justify-text py-4 items-center text-center cursor-pointer transition-[display] bg-teal-100"
              : "hidden"
          }`}>
          <li className="mb-2 text-lg transition-[0.5s]">Home</li>
          <li className="mb-2 text-lg">About</li>
          <li className="mb-2 text-lg">More info</li>
          <li className="text-lg">About us</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
