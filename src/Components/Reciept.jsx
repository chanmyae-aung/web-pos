import { Typography } from "@mui/material";
import React from "react";

const Reciept = () => {
  return (
    <div>
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
      </div><div className="mt-7 pt-2 mx-auto overflow-visible">
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
    </div>
  );
};

export default Reciept;
