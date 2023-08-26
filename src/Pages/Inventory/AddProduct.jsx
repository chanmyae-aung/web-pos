import React, { useState } from "react";
import Button from "../../Components/Button";
import { BiChevronDown } from "react-icons/bi";
import { MdOutlineEdit } from "react-icons/md";
import { Typography } from "@mui/material";

import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb";
import FirstStep from '../Inventory/FirstStep';
import SconStep from '../Inventory/SconStep';
import ThirdStep from '../Inventory/ThirdStep';

import ProductRef from "./ProductRef";

const AddProduct = () => {
  const editImage = document.querySelector(".file");
  const [userData, setUserData] = useState({});
  const [state, setState] = useState({
    FirstStep: true,
    SconStep: false,
    ThirdStep: false,
    createStep: false,
  });
  const handleStep2 = () => {
    setState({
      SconStep: true,
      FirstStep: false,
      ThirdStep: false,
    });
  };
  const handleStep3 = () => {
    setState({
      ThirdStep: true,
      FirstStep: false,
      SconStep: false,
    });
  };
  const handleCreateStep = () => {
    setState({
      ThirdStep: false,
      FirstStep: false,
      SconStep: false,
      createStep: true,
    });
  }
  console.log(state);
  const [select, setSelect] = useState(false);
  const [display, setDisplay] = useState("Prada");
  const toggleSelect = () => {
    setSelect(!select);
  };
  return (
    <>
    {/* path breadcrumbs */}
    <div>
      <Breadcrumb
      showBtn={true}
        icon={true}
        btnText={"Product list"}
        title={"Add Product"}
        firstRoute={"Inventory"}
        secondRoute={"Add Product"}
      />
    </div>
    {/* path breadcrumbs */}

    <main className="mt-7">
      <form action="" className={`flex gap-10`}>
        {/* Personal Info */}
        {state.FirstStep && (
          <div className="w-[70%]">
          <FirstStep select={select} toggleSelect={toggleSelect} display={display} setDisplay={setDisplay}/>
        </div>
        )}
        {/* Login Info  */}
        {state.SconStep && (
          <div className="w-[70%]">
          <SconStep select={select} toggleSelect={toggleSelect} display={display} setDisplay={setDisplay}/>
        </div>
        )}
        {/* Photo Upload  */}
        {state.ThirdStep && (
          <div className="w-[70%]">
            <ThirdStep />
          </div>
        )}
        {/* Create Step  */}
        {
          state.createStep && <div className="w-[70%]">
          <ProductRef />
        </div>
        }
        {/* Step Indicator  */}
        <section className={`w-[30%] flex flex-col justify-center`}>
          <div className="flex items-center gap-3 my-3">
            <div
              className={`w-10 h-10 border rounded-full p-1 flex items-center justify-center`}
            >
              <p>1</p>
            </div>
            <p>Infomation</p>
          </div>
          <div className="border-l py-5 ml-5"></div>
          <div className="flex items-center gap-3 my-3">
            <div
              className={`w-10 h-10 border rounded-full p-1 flex items-center justify-center`}
            >
              <p>2</p>
            </div>
            <p>Price </p>
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
          {state.FirstStep && (
            <div onClick={handleStep2} className="my-5 cursor-pointer">
              <Button icon={true} text={"Next"} />
            </div>
          )}
          {state.SconStep && (
            <div onClick={handleStep3} className="my-5 cursor-pointer">
              <Button icon={true} text={"Next"} />
            </div>
          )}
          {state.ThirdStep && (
            <div onClick={handleCreateStep} className="my-5 cursor-pointer">
              <Button icon={true} text={"Next"} />
            </div>
          )}
          {state.createStep && (
            <div className="my-5 cursor-pointer">
              <Button icon={true} text={"Create"} />
            </div>
          )}
        </section>
      </form>
    </main>
  </>
  );
};

export default AddProduct;
