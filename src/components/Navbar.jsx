import React, { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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
        <div className="flex sm:hidden" onClick={navbarHandler}>
          {
            !navBar ? <AiOutlineMenu size={30} />  : <AiOutlineClose size={30} />
          }
        </div>
      </div>

      {/* Mobile navbar */}
      <div className="relative">
        <ul
          className={`
          ${!navBar ? "flex flex-col justify-start items-start text-center cursor-pointer absolute left-[-100%] top-0 p-4 transition-all duration-1000 h-screen w-full" :
              "flex flex-col justify-start p-3 items-start text-center cursor-pointer absolute left-0 bg-teal-100  transition-all duration-1000 h-[90vh] w-full"}`}>
          <li className="mb-2 text-lg">Home</li>
          <li className="mb-2 text-lg">About</li>
          <li className="mb-2 text-lg">More info</li>
          <li className="text-lg">About us</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
