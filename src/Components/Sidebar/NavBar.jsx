import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BiSolidBellRing } from "react-icons/bi";
import { MdOutlineNightlight } from "react-icons/md";

const NavBar = () => {
  return (
    <nav className=" bg-[#3F4245] print:hidden z-50 py-2 px-2 fixed w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <a href="#" className="flex items-center">
          <span className="self-center text-2xl text-[#f5f5f5] border-none font-semibold tracking-wider ">
            MMS POS
          </span>
        </a>
        <div className="flex gap-3 ">
          <span className="text-[#f5f5f5]">
            <i>
              <BiSolidBellRing className="w-7 h-5" />
            </i>
          </span>
          <span className="text-[#f5f5f5]">
            <i>
              <MdOutlineNightlight className="w-7 h-5" />
            </i>
          </span>
          <span className="text-[#f5f5f5]">
            <i>
              <HiOutlineUserCircle className="w-7 h-5" />
            </i>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
