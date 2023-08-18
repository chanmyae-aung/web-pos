import React, { useState } from "react";
import { Accordion } from "@mantine/core";
import { BiHome } from "react-icons/bi";
import { TbClipboardText } from "react-icons/tb";
import { PiUserCirclePlusBold, PiUserSquareFill } from "react-icons/pi";
import { TfiGallery } from "react-icons/tfi";
import { HiOutlineLogout } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../Feature/API/authApi";
import { useDispatch } from "react-redux";
import { removeUser } from "../../Feature/Service/authSlice";
import Cookies from "js-cookie";

const SidebarItems = () => {
  const nav=useNavigate();
  const user=JSON.stringify(Cookies.get("user"));
  const token=Cookies.get("token");
  const [logout]=useLogoutMutation(token);
  const dispatch=useDispatch();
const logoutHandler=async()=>{
  const {data}=await logout(token);
  if(data?.message ==="logout successful"){
    nav("/login");
  }
  dispatch(removeUser());
  console.log(data);

}
  return (
    <>
      {/* accordion control on sidebar */}
      <Accordion
        id="sidebar"
        transitionDuration={1000}
        styles={{
          item: {
            border: "0",
            // paddingTop:"5px"
          },
          panel: {
            ":active":{
              color:"#3F4245"
            },
            paddingTop:"5px",
          },

          control: {
            fontSize: "1rem",
            color: "#f5f5f5",
            ":hover": {
              backgroundColor: "transparent",
            },

            "&[data-active]": {
              backgroundColor: "#3F4245",
            },
          },
          chevron: {
            color: "#f5f5f5",
          },
        }}
        defaultValue="overview"
      >
        {/* Overview Dashboard */}
        <Accordion.Item value="overview">
          <Accordion.Control
            chevron=" "
            className="px-5 active:bg-[#3F4245]  text-[#f5f5f5] text-[1rem]  pt-1 pb-2"
          >
            <NavLink to={"/"}>
              <span className="inline-flex gap-3 my-0 py-0">
                <i>
                  <BiHome className="mt-1" />
                </i>{" "}
                Overview
              </span>
            </NavLink>
          </Accordion.Control>
        </Accordion.Item>
        {/* Sale */}
        <Accordion.Item value="Sale">
          <Accordion.Control>
            <span className=" inline-flex gap-3 my-0 py-0">
              <i className="">
                <BiHome className="mt-1" />
              </i>
              Sale{" "}
            </span>
          </Accordion.Control>
          <Accordion.Panel className="">
            <NavLink
              className={`pt-1 pb-2 border-s-2 border-[#3f4245] hover:text-blue-400 cursor-pointer text-[#f5f5f5]  px-2`}
            >
              Cashier
            </NavLink>
          </Accordion.Panel>
          <Accordion.Panel>
            <NavLink
              className={
                "pt-1 pb-2 border-s-2 border-[#3f4245] hover:text-blue-400 cursor-pointer text-[#f5f5f5]  px-2"
              }
            >
              Recent
            </NavLink>
          </Accordion.Panel>
        </Accordion.Item>
        {/* inventory */}
        <Accordion.Item value="Inventory">
          <Accordion.Control>
            <span className="inline-flex gap-3 my-0 py-0">
              <i>
                <TbClipboardText className="mt-1" />
              </i>{" "}
              Inventory
            </span>
          </Accordion.Control>
          <Accordion.Panel>
            <NavLink
              className={`pt-1 pb-2 border-s-2 border-[#3f4245] hover:text-blue-400 cursor-pointer text-[#f5f5f5]  px-2`}
            >
              Products
            </NavLink>
          </Accordion.Panel>
          <Accordion.Panel>
            <NavLink
              className={`pt-1 pb-2 border-s-2 border-[#3f4245] hover:text-blue-400 cursor-pointer text-[#f5f5f5]  px-2`}
            >
              Add Products
            </NavLink>
          </Accordion.Panel>
          <Accordion.Panel>
            <NavLink
              className={`pt-1 pb-2 border-s-2 border-[#3f4245] hover:text-blue-400 cursor-pointer text-[#f5f5f5]  px-2`}
            >
              Stock Control
            </NavLink>
          </Accordion.Panel>
          <Accordion.Panel>
            <NavLink
              className={`pt-1 pb-2 border-s-2 border-[#3f4245] hover:text-blue-400 cursor-pointer text-[#f5f5f5]  px-2`}
            >
              Manage Brands
            </NavLink>
          </Accordion.Panel>
        </Accordion.Item>
        {/* User */}
        <Accordion.Item value="User">
          <Accordion.Control>
            <span className="inline-flex gap-3 my-0 py-0">
              <i>
                <PiUserCirclePlusBold className="mt-1" />
              </i>{" "}
              User
            </span>
          </Accordion.Control>
          <Accordion.Panel>
            <NavLink
              className={`pt-1 pb-2 border-s-2 border-[#3f4245] hover:text-blue-400 cursor-pointer text-[#f5f5f5]  px-2`}
              
            >
              Overview
            </NavLink>
          </Accordion.Panel>
          <Accordion.Panel className="">
            <NavLink
              className={`pt-1 pb-2 border-s-2 border-[#3f4245] hover:text-blue-400 cursor-pointer text-[#f5f5f5]  px-2`}
            >
              Create User
            </NavLink>
          </Accordion.Panel>
        </Accordion.Item>
        {/* media */}
        <Accordion.Item value="media">
          <Accordion.Control
            chevron=" "
            className="px-5 active:bg-[#3F4245]  text-[#f5f5f5] text-[1rem]  pt-1 pb-2"
          >
            <NavLink >
              <span className="inline-flex gap-3 my-0 py-0">
                <i>
                  <TfiGallery className="mt-1" />
                </i>{" "}
                Media
              </span>
            </NavLink>
          </Accordion.Control>
        </Accordion.Item>

        {/* profile */}
        <Accordion.Item value="Profile">
          <Accordion.Control>
            <span className="inline-flex gap-3 my-0 py-0">
              <i>
                <PiUserSquareFill className="mt-1" />
              </i>{" "}
              Profile
            </span>
          </Accordion.Control>

          <Accordion.Panel className="px-2 py-0  text-[1rem]">
            <NavLink
              className={
                "pt-1 pb-2 border-s-2 border-[#3f4245] hover:text-blue-400 cursor-pointer text-[#f5f5f5]  px-2"
              }
            >
              My Account
            </NavLink>
          </Accordion.Panel>
          <Accordion.Panel className="px-2 py-0  text-[1rem]">
            <NavLink
              className={
                "pt-1 pb-2 border-s-2 border-[#3f4245] hover:text-blue-400 cursor-pointer text-[#f5f5f5]  px-2"
              }
            >
              Edit
            </NavLink>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="login">
          <Accordion.Control
            chevron=" "
            className="px-5 active:bg-[#3F4245]  text-[#f5f5f5] text-[1rem]  pt-1 pb-2"
          >
            <NavLink onClick={logoutHandler} to={"/login"}>
              <span className="inline-flex gap-3 my-0 py-0">
                <i>
                  <HiOutlineLogout className="mt-1" />
                </i>{" "}
                logout
              </span>
            </NavLink>
          </Accordion.Control>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default SidebarItems;
