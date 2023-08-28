import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const RecieptData = () => {
    const { totalPrice, tax } = useSelector((state) => state.recieptSlice);

  return (
    <>
      <div className="bg-[#202124] text-[#f5f5f5] w-full h-screen ">
        <div className="px-5 py-3 border-b">
          <Link className="text-xl flex gap-1 " to="/">
            <BiArrowBack className="mt-1" />
            Back
          </Link>
        </div>
        <div className="flex justify-center">
        <div className="text-[#f5f5f5] bg-[#161618] my-2 p-3 rounded-sm shadow-lg   ">
      <div className="flex flex-col">
        <div
          className={`h-full w-full l bg-[#161618]`}
        >
          <Typography
            sx={{ fontSize: "1.5rem", paddingX: "10px" }}
            gutterBottom
          >
            Reciept
          </Typography>
          <div className="boughtList">
           <h1>data here</h1>
          </div>
        </div>
      
        <div className="mt-auto flex flex-col justify-start ">
          {/* total amount */}
        
            <div className=" mt-5 pt-5 px-5 ">
              {" "}
              <h1 className="text-xl font-medium">
                Total Amount : <span>{totalPrice}</span> MMK
              </h1>
              <span className="text-sm font-thin">Tax : {tax.toFixed(2)}</span>
            </div>
        
          {/* Print Button */}
            <button className="print:hidden mt-5 px-2 py-1 rounded self-center bg-black">
              Print
            </button>
        </div>
      </div>
    </div>
        </div>
      </div>
    </>
  );
};

export default RecieptData;
