import { Typography } from "@mui/material";
import React from "react";
import Calculator from "./Calculator";

const Reciept = () => {
  return (
    <div className=" relative h-screen overflow-visible">
      <Typography sx={{ fontSize: "1.5rem" }} gutterBottom>
        Reciept
      </Typography>
      {/* bought list */}
      <div className="mt-7 pt-2 mx-auto overflow-visible">
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
      <div className="mt-7 pt-2 mx-auto overflow-visible">
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
      <div className="mt-7 pt-2 mx-auto overflow-visible">
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
      <div className="fixed bottom-0 w-96 z-30">
        <Calculator/>
      </div>
    </div>
  );
};

export default Reciept;
