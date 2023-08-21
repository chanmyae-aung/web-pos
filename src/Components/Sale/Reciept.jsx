import { Typography } from "@mui/material";
import React from "react";
import Calculator from "./Calculator";

const Reciept = ({ calculator, printBtn }) => {
  const printHandler=()=>{
    window.print();
  }
  return (
    <div className={printBtn==true? `  min-h-screen bg-[#161618]`:`relative min-h-screen overflow-visible pt-3 bg-[#161618]`}>
     <div>
     <Typography className=" " sx={{ fontSize: "1.5rem", paddingX: "10px" }} gutterBottom>
        Reciept
      </Typography>
      {/* bought list */}
      <div className="mt-5  px-3 pt-2 mx-auto overflow-visible">
        <div className="flex justify-between border-b mb-1 pb-2 border-gray-600">
          <div className="flex flex-col">
            <p className="font-semibold leading-loose tracking-wider text-[1rem]">
              Apple
            </p>
            <span className="text-[0.8rem] font-thin">
              <span className="mr-2">1 pcs</span>
              <span>1000 MMK</span>
            </span>
          </div>
          <span className="text-semibold">1,000,000</span>
        </div>
      </div>
      <div className="mt-5 px-3 pt-2 mx-auto overflow-visible">
        <div className="flex justify-between border-b mb-1 pb-2 border-gray-600">
          <div className="flex flex-col">
            <p className="font-semibold leading-loose tracking-wider text-[1rem]">
              Apple
            </p>
            <span className="text-[0.8rem] font-thin">
              <span className="mr-2">1 pcs</span>
              <span>1000 MMK</span>
            </span>
          </div>
          <span className="text-semibold">1,000,000</span>
        </div>
      </div>
      <div className="mt-5 px-3 pt-2 mx-auto overflow-visible">
        <div className="flex justify-between border-b mb-1 pb-2 border-gray-600">
          <div className="flex flex-col">
            <p className="font-semibold leading-loose tracking-wider text-[1rem]">
              Apple
            </p>
            <span className="text-[0.8rem] font-thin">
              <span className="mr-2">1 pcs</span>
              <span>1000 MMK</span>
            </span>
          </div>
          <span className="text-semibold">1,000,000</span>
        </div>
      </div>
      <div className="mt-5 px-3 pt-2 mx-auto overflow-visible">
        <div className="flex justify-between border-b mb-1 pb-2 border-gray-600">
          <div className="flex flex-col">
            <p className="font-semibold leading-loose tracking-wider text-[1rem]">
              Apple
            </p>
            <span className="text-[0.8rem] font-thin">
              <span className="mr-2">1 pcs</span>
              <span>1000 MMK</span>
            </span>
          </div>
          <span className="text-semibold">1,000,000</span>
        </div>
      </div>
     
     

      {/* bought list */}
     </div>
      {calculator && (
        <div className="fixed bottom-0 mx-auto w-full z-30">
          <Calculator />
        </div>
      )}
     <div className="mt-auto flex flex-col justify-start ">
       {/* total amount */}
       {printBtn && <div className=" mt-5 pt-5 px-5 " > <h1 className="text-xl font-medium">Total Amount : <span>1,000,000</span> MMK</h1>
       <span className="text-sm font-thin">Tax : 5000</span>
       </div>}
      {/* Print Button */}
      {printBtn && <button onClick={printHandler} className="mt-5 px-2 py-1 rounded self-center bg-black">Print</button>}
     </div>
    </div>
  );
};

export default Reciept;
