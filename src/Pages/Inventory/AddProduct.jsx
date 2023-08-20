import React, { useState } from "react";
import Button from "../../Components/Button";
import { BiChevronDown } from "react-icons/bi";
import { MdOutlineEdit } from "react-icons/md";
import { Typography } from "@mui/material";
import { Breadcrumbs } from "@mantine/core";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb";

const AddProduct = () => {
  const editImage = document.querySelector(".file");
  const [userData, setUserData] = useState({});
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
          btnText={"Product List"}
          title={"Add Product"}
          firstRoute={"Inventory"}
          secondRoute={"Add Product"}
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
              <label className="w-[30%]">Brand</label>
              <input
                placeholder="Enter your phone number"
                className={`w-[70%] outline-none border rounded px-5 py-2`}
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="flex">
              <label className="w-[30%]">Stock</label>
              <input
                placeholder="Enter your birth date"
                className={`w-[70%] outline-none border rounded px-5 py-2`}
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="flex">
              <label className="w-[30%]">Unit</label>
              <input
                placeholder="Enter your birth date"
                className={`w-[70%] outline-none border rounded px-5 py-2`}
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="flex">
              <label className="w-[30%]">More info</label>
              <textarea
                rows={3}
                placeholder="Enter your address"
                className={`w-[70%] bg-[#202124] outline-none border rounded px-5 py-2`}
                type="text"
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
                actual-price
              </label>
              <input
                placeholder="Enter actual price "
                className={`w-[70%] outline-none border rounded px-5 py-2`}
                type="number"
                name=""
                id=""
              />
            </div>
            <div className="flex">
              <label className="w-[30%]">sale-price</label>
              <input
                placeholder="Enter your sale price "
                className={`w-[70%] outline-none border rounded px-5 py-2`}
                type="number"
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
              <p>Information</p>
            </div>
            <div className="border-l py-5 ml-5"></div>
            <div className="flex items-center gap-3 my-3">
              <div
                className={`w-10 h-10 border rounded-full p-1 flex items-center justify-center`}
              >
                <p>2</p>
              </div>
              <p>Pice</p>
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
};

export default AddProduct;
