import { Typography } from "@mui/material";
import React from "react";

const ManageOverview = ({tableType}) => {
  return (
    // Table name and sort filter Component
    <div className="py-2 mt-2 mb-1">
      <Typography sx={{ fontSize: "1.3rem" }} gutterBottom>
        {tableType}
      </Typography>
      <div className="flex justify-between">
        <input
          id="exampleSearch2"
          placeholder="search"
          className=" w-44 px-3 py-1 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-white "
          type="search"
        />
        <div className="flex self-baseline gap-5">
          <span>
            Sort : 
            <select data-te-select-init className="bg-inherit outline-none focus:bg-inherit">
              <option className="bg-gray-400" value="1">Last</option>
              <option className="bg-gray-400" value="2">First</option>
             
            </select>
          </span>
          <span>
            Filter :
            <select data-te-select-init className="bg-inherit outline-none focus:bg-inherit">
              <option className="bg-gray-400 " value="1">All Files</option>
              <option className="bg-gray-400" value="2">Recent</option>
            </select>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ManageOverview;
