import { Link, Typography, Breadcrumbs } from "@mui/material";
import React from "react";
import {BsPlus} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";

export default function Breadcrumb({
  title,
  firstRoute,
  secondRoute,
  thirdRoute,
  btnText,
  icon,
  createUser
}) {
  const nav = useNavigate()
  return (
    <div>
      <div className="flex justify-between py-2 mb-2">
        <div>
          <Typography sx={{fontSize:"1.5rem"}} gutterBottom>
            {title}
          </Typography>
          <Breadcrumbs aria-label="breadcrumb" style={{}}>
            <Link sx={{fontSize:"0.9rem"}} href="user-overview" underline="hover" color="#f5f5f5">
              {firstRoute}
            </Link>
            <Link sx={{fontSize:"0.9rem"}} underline="always" color="#f5f5f5" href="#">
              {secondRoute}
            </Link>
          </Breadcrumbs>
        </div>
        <div className="w-fit px-6 py-2 flex items-center gap-2 rounded font-semibold">
          <button onClick={() => {
            createUser && nav("/create-user")
          }} className="bg-blue-400 text-[#f5f5f5] w-fit px-6 py-2 flex items-center gap-2 rounded font-semibold">
            {icon && <BsPlus className="text-white text-2xl"/>}
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}
