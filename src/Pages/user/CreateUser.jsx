import React, { useState } from "react";
import Button from "../../Components/Button";
import { BiChevronDown } from "react-icons/bi";
import { MdOutlineEdit } from "react-icons/md";
import { Typography } from "@mui/material";
import { Breadcrumbs } from "@mantine/core";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb";

export default function CreateUser() {
  const editImage = document.querySelector(".file");
  const [userData, setUserData] = useState({
    
  })
  const [state, setState] = useState({
    stepOne: true,
    stepTwo: false,
    stepThree: false,
  });
  const handleNext = () => {
    setState({
      stepOne: false,
      stepTwo: true,
    });
  };
  console.log(state);
  const [select, setSelect] = useState(false);
  const [display, setDisplay] = useState("Admin");
  const toggleSelect = () => {
    setSelect(!select);
  };
  return (
    <>
      {/* path breadcrumbs */}
      <div>
        <Breadcrumb
          icon={true}
          btnText={"Create"}
          title={"User"}
          firstRoute={"User"}
          secondRoute={"Create User"}
        />
      </div>
      {/* path breadcrumbs */}

      <main className="mt-7 bg-[#161618]">
        <form action="" className={`flex p-10 gap-10`}>
          {/* Personal Info */}
          <section
            className={`${
              state.stepOne ? "flex" : "hidden"
            } flex-col gap-5 w-[70%]`}
          >
            <div className="flex">
              <label className="w-[30%]">Name</label>
              <input
                placeholder="Enter your name"
                className={`w-[70%] outline-none border rounded px-5 py-2`}
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="flex">
              <label className="w-[30%]">Phone</label>
              <input
                placeholder="Enter your phone number"
                className={`w-[70%] outline-none border rounded px-5 py-2`}
                type="phone"
                name=""
                id=""
              />
            </div>
            <div className="flex">
              <label className="w-[30%]">Date of Birth</label>
              <input
                placeholder="Enter your birth date"
                className={`w-[70%] outline-none border rounded px-5 py-2`}
                type="phone"
                name=""
                id=""
              />
            </div>
            <div className="flex">
              <label className="w-[30%]">Gender</label>
              <div className={`w-[70%] flex items-center gap-10`}>
                <div className={`flex items-center gap-2`}>
                  <input className={``} type="radio" name="gender" id="male" />
                  <label htmlFor="male">Male</label>
                </div>
                <div className={`flex items-center gap-2`}>
                  <input
                    className={``}
                    type="radio"
                    name="gender"
                    id="female"
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>
            <div className="flex">
              <label className="w-[30%]">Address</label>
              <textarea
                rows={3}
                placeholder="Enter your address"
                className={`w-[70%] bg-[#202124] outline-none border rounded px-5 py-2`}
                type="phone"
                name=""
                id=""
              />
            </div>
          </section>
          {/* Login Info  */}
          <section
            className={`${
              state.stepTwo ? "flex" : "hidden"
            } flex-col gap-5 w-[70%]`}
          >
            <div className={`flex`}>
              <label className="block mb-2 w-[30%]" htmlFor="">
                Position
              </label>
              <div
                onClick={toggleSelect}
                className="w-[70%] border outline-none py-2.5 relative rounded cursor-pointer"
              >
                <div className="px-5 flex items-center justify-between">
                  <p className="">{display}</p>
                  <BiChevronDown
                    className={`text-xl ${
                      select && "rotate-180"
                    } transition-all duration-150`}
                  />
                </div>
                <div
                  className={`${
                    select ? "scale-y-1" : "scale-y-0"
                  } transition-all duration-150 origin-top z-40 border rounded absolute w-full top-14`}
                >
                  <div
                    onClick={(e) => {
                      setDisplay(e.target.textContent);
                    }}
                    className="w-full outline-none py-3 bg-[#202124] px-5 rounded-t border-b cursor-pointer"
                  >
                    Admin
                  </div>
                  <div
                    onClick={(e) => {
                      setDisplay(e.target.textContent);
                    }}
                    className="w-full outline-none py-3 bg-[#202124] px-5 rounded-b cursor-pointer"
                  >
                    Staff
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <label className="w-[30%]">Email</label>
              <input
                placeholder="Enter your email"
                className={`w-[70%] outline-none border rounded px-5 py-2`}
                type="phone"
                name=""
                id=""
              />
            </div>
            <div className="flex">
              <label className="w-[30%]">Password</label>
              <input
                placeholder="......."
                className={`w-[70%] outline-none border rounded px-5 py-2`}
                type="phone"
                name=""
                id=""
              />
            </div>
            <div className="flex">
              <label className="w-[30%]">Confirm Password</label>
              <input
                placeholder="........"
                className={`w-[70%] outline-none border rounded px-5 py-2`}
                type="phone"
                name=""
                id=""
              />
            </div>
          </section>
          {/* Photo Upload  */}
          <section className={`${state.stepThree ? "flex" : "hidden"}`}>
            <div className="w-full flex flex-col items-center justify-center bg-gray-100">
              <h2 className="my-10">Upload Photo</h2>
              <div
                className={`w-40 h-40 relative rounded-full border-2 border-dashed p-1 flex justify-center items-center`}
              >
                <img
                  className={`w-full`}
                  src={`https://img.icons8.com/?size=512&id=108652&format=png`}
                  alt=""
                />
                <div
                  onClick={() => editImage.click()}
                  className={`flex justify-center cursor-pointer absolute bg-white right-3  bottom-1 items-center text-xs gap-1 border-2 rounded-full w-8 h-8 px-1 py-0.5`}
                >
                  <MdOutlineEdit />
                  <input className="file hidden" type="file" name="" id="" />
                </div>
              </div>
              <div className="my-10">
                <Button
                  text={"Clear Photo"}
                  className={`border border-gray-400 `}
                />
              </div>
            </div>
          </section>
          {/* Step Indicator  */}
          <section className={`w-[30%]`}>
            <div className="flex items-center gap-3 my-3">
              <div
                className={`w-10 h-10 border rounded-full p-1 flex items-center justify-center`}
              >
                <p>1</p>
              </div>
              <p>Personal</p>
            </div>
            <div className="border-l py-5 ml-5"></div>
            <div className="flex items-center gap-3 my-3">
              <div
                className={`w-10 h-10 border rounded-full p-1 flex items-center justify-center`}
              >
                <p>2</p>
              </div>
              <p>Login Info</p>
            </div>
            <div className="border-l py-5 ml-5"></div>
            <div className="flex items-center gap-3 my-3">
              <div
                className={`w-10 h-10 border rounded-full p-1 flex items-center justify-center`}
              >
                <p>3</p>
              </div>
              <p>Photo</p>
            </div>
            <div onClick={handleNext} className="my-5 cursor-pointer">
              <Button icon={true} text={"Next"} />
            </div>
          </section>
        </form>
      </main>
    </>
  );
}
