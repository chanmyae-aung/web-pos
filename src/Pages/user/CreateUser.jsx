import React, { useState } from "react";
import Button from "../../Components/Button";
import Breadcrumb from "../../Components/Breadcrumb";
import StepThree from "../../Components/User/StepThree";
import StepTwo from "../../Components/User/StepTwo";
import StepOne from "../../Components/User/StepOne";
import UserRef from "../../Components/User/UserRef";
import Cookies from "js-cookie";
import { useCreateUserMutation } from "../../Feature/API/userApi";
import SelectPhotoModal from "../../Components/SelectPhotoModal";

export default function CreateUser() {
  const token = Cookies.get("token");
  const [show, setShow] = useState(false)
  const toggleShow = () => {
    setShow(!show)
  }
  const [create] = useCreateUserMutation();
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
  };
  console.log(state);
  const [select, setSelect] = useState(false);
  const [display, setDisplay] = useState("Admin");
  const toggleSelect = () => {
    setSelect(!select);
  };
  const handleCreateUser = (e) => {
    e.preventDefault();
  };

  return (
    <div>
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

      <div className={`${show ? "scale-y-1" : "scale-y-0" } transition-all duration-400 origin-center absolute z-20 items-center bg-[#202124] justify-center`}>
        <SelectPhotoModal setShow={setShow} toggleShow={toggleShow}/>
      </div>
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
              <StepTwo
                select={select}
                toggleSelect={toggleSelect}
                display={display}
                setDisplay={setDisplay}
              />
            </div>
          )}
          {/* Photo Upload  */}
          {state.stepThree && (
            <div className="w-[70%]">
              <StepThree toggleShow={toggleShow}/>
            </div>
          )}
          {/* Create Step  */}
          {state.createStep && (
            <div className="w-[70%]">
              <UserRef />
            </div>
          )}
          {/* Step Indicator  */}
          <section className={`w-[30%] flex flex-col justify-center`}>
            <div className="flex items-center gap-3 my-3">
              <div
                className={`${(state.stepTwo || state.stepThree || state.createStep) && "bg-[#7DADFA]"} w-10 h-10 border rounded-full p-1 flex items-center justify-center`}
              >
                <p>1</p>
              </div>
              <p>Personal</p>
            </div>
            <div className="border-l py-5 ml-5"></div>
            <div className="flex items-center gap-3 my-3">
              <div
                className={`${(state.stepThree || state.createStep) && "bg-[#7DADFA]"} w-10 h-10 border rounded-full p-1 flex items-center justify-center`}
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
    </div>
  );
}
