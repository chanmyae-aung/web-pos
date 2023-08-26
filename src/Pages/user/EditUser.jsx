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
import Cookies from "js-cookie";
import { useCreateUserMutation } from "../../Feature/API/userApi";

export default function EditUser() {
  const token = Cookies.get("token");
  const [create] = useCreateUserMutation();
  const editImage = document.querySelector(".file");
  const [state, setState] = useState({
    stepOne: true,
    stepTwo: false,
  });
  const handleStep2 = () => {
    setState({
      stepTwo: true,
      stepOne: false,
    });
  };

  console.log(state);
  const [select, setSelect] = useState(false);
  const [display, setDisplay] = useState("Admin");
  const toggleSelect = () => {
    setSelect(!select);
  };
  const handleEditUser = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {/* path breadcrumbs */}
      <div>
        <Breadcrumb
        showBtn={true}
          icon={true}
          btnText={"User list"}
          title={"User"}
          firstRoute={"User"}
          secondRoute={"Edit User"}
        />
      </div>
      {/* path breadcrumbs */}

      <main className="mt-7">
        <form action="" className={`flex gap-10`}>
          {/* Personal Info */}
          {state.stepOne && (
            <div className="w-[70%]">
              <StepOne editUser={true}/>
            </div>
          )}
          {/* Login Info  */}
          {state.stepTwo && (
            <div className="w-[70%]">
              <StepTwo
                select={select}
                toggleSelect={toggleSelect}
                display={display}
                setDisplay={setDisplay}
                editUser
              />
            </div>
          )}

          {/* Step Indicator  */}
          <section className={`w-[30%] flex flex-col justify-center`}>
            <div className="flex items-center gap-3 my-3">
              <div
                className={`w-10 h-10 border rounded-full p-1 flex items-center justify-center`}
              >
                <p>1</p>
              </div>
              <p>Information</p>
            </div>
            <div className="border-l py-10 ml-5"></div>
            <div className="flex items-center gap-3 my-3">
              <div
                className={`w-10 h-10 border rounded-full p-1 flex items-center justify-center`}
              >
                <p>2</p>
              </div>
              <p>Password</p>
            </div>
            
            {state.stepOne && (
              <div onClick={handleStep2} className="my-5 cursor-pointer">
                <Button icon={true} text={"Next"} />
              </div>
            )}
            {state.stepTwo && (
              <div className="my-5 cursor-pointer">
                <Button icon={true} text={"Submit"} />
              </div>
            )}
          </section>
        </form>
      </main>
    </>
  );
}
