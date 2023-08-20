import React, { useState } from "react";
import Button from "../../Components/Button";
import { BiChevronDown } from "react-icons/bi";
import { MdOutlineEdit } from "react-icons/md";
import { Typography } from "@mui/material";
import { Breadcrumbs } from "@mantine/core";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb";
import StepThree from "../../Components/User/StepThree";
import StepTwo from "../../Components/User/StepTwo";
import StepOne from "../../Components/User/StepOne";
import UserRef from "../../Components/User/UserRef";

export default function CreateUser() {
  const editImage = document.querySelector(".file");
  const [userData, setUserData] = useState({});
  const [state, setState] = useState({
    stepOne: true,
    stepTwo: false,
    stepThree: false,
    createStep: false,
  });
  const handleStep2 = () => {
    setState({
      stepTwo: true,
      stepOne: false,
      stepThree: false,
    });
  };
  const handleStep3 = () => {
    setState({
      stepThree: true,
      stepOne: false,
      stepTwo: false,
    });
  };
  const handleCreateStep = () => {
    setState({
      stepThree: false,
      stepOne: false,
      stepTwo: false,
      createStep: true,
    });
  }
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
          btnText={"User list"}
          title={"User"}
          firstRoute={"User"}
          secondRoute={"Create User"}
        />
      </div>
      {/* path breadcrumbs */}

      <main className="mt-7">
        <form action="" className={`flex gap-10`}>
          {/* Personal Info */}
          {state.stepOne && (
            <div className="w-[70%]">
            <StepOne />
          </div>
          )}
          {/* Login Info  */}
          {state.stepTwo && (
            <div className="w-[70%]">
            <StepTwo select={select} toggleSelect={toggleSelect} display={display} setDisplay={setDisplay}/>
          </div>
          )}
          {/* Photo Upload  */}
          {state.stepThree && (
            <div className="w-[70%]">
              <StepThree />
            </div>
          )}
          {/* Create Step  */}
          {
            state.createStep && <div className="w-[70%]">
            <UserRef />
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
            {state.stepOne && (
              <div onClick={handleStep2} className="my-5 cursor-pointer">
                <Button icon={true} text={"Next"} />
              </div>
            )}
            {state.stepTwo && (
              <div onClick={handleStep3} className="my-5 cursor-pointer">
                <Button icon={true} text={"Next"} />
              </div>
            )}
            {state.stepThree && (
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
}
