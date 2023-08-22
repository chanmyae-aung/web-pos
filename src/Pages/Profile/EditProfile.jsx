import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { TbMailOpenedFilled } from "react-icons/tb";
import { FaPhoneVolume } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import Breadcrumb from "../../Components/Breadcrumb";
import Personal from "../../Components/Profile/Personal";
import LoginInfo from "../../Components/Profile/LoginInfo";
import StepOne from "../../Components/User/StepOne"
import StepTwo from "../../Components/User/StepTwo"
import Password from "../../Components/Profile/Password";


export default function EditProfile() {
  const editImage = document.querySelector(".file");
  const [state, setState] = useState({
    personal: true,
    login: false,
    password: false,
  });
  const personalTab = () => {
    setState({
      personal: true,
      login: false,
      password: false,
    });
  };
  const loginInfoTab = () => {
    setState({
      personal: false,
      login: true,
      password: false,
    });
  };
  const passwordTab = () => {
    setState({
      personal: false,
      login: false,
      password: true,
    });
  };
  return (
    <div className={`w-full`}>
      {/* path breadcrumbs */}
      <div>
        <Breadcrumb
          editProfile={true}
          btnText={"Edit profile"}
          title={"Profile"}
          firstRoute={"Profile"}
          secondRoute={"My Account"}
        />
      </div>
      {/* path breadcrumbs */}
      <main className={`flex items-center mt-24`}>
        <section className={`w-full h-[70%] p-1`}>
          <div className="w-[]">
            
            {state.personal && (
              <div>
                <StepOne />
              </div>
            )}
            {state.login && (
              <div>
                <StepTwo editProfile={true}/>
              </div>
            )}
            {state.password && (
              <div>
                <Password/>
              </div>
            )}
          </div>
        </section>
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
      </main>
    </div>
  );
}
