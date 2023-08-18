import { Link, Typography, Breadcrumbs } from "@mui/material";
import React from "react";
import {BsPlus} from 'react-icons/bs'

export default function Breadcrumb({
  title,
  firstRoute,
  secondRoute,
  thirdRoute,
  btnText,
  icon,
}) {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <Breadcrumbs aria-label="breadcrumb" style={{}}>
            <Link href="user-overview" underline="hover" color="#f5f5f5">
              {firstRoute}
            </Link>

            <Link underline="always" color="#f5f5f5" href="#">
              {secondRoute}
            </Link>
          </Breadcrumbs>
        </div>
        <div className="w-fit px-6 py-2 flex items-center gap-2 rounded font-semibold">
          <button className="bg-blue-500 text-white w-fit px-6 py-2 flex items-center gap-2 rounded font-semibold">
            {icon && <BsPlus className="text-white text-2xl"/>}
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}
