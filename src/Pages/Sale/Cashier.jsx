import React, { useState } from "react";
import Reciept from "../../Components/Sale/Reciept";
import { Breadcrumbs } from "@mantine/core";
import { Link } from "@mui/material";
import SaleCard from "../../Components/Sale/SaleCard";
import { useGetallProductsQuery } from "../../Feature/API/getallProductsApi";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";

const Cashier = () => {
  const token = Cookies.get("token")
  const allProducts=useGetallProductsQuery(token);
  console.log({allProducts});
  const products=allProducts?.data?.data;
  return (
    <>
      <div className="bg-[#202124] text-[#f5f5f5] w-full h-screen overflow-auto ">
        <h1 className="px-2 w-full py-2 border-b">POS CASHIER</h1>
        <div className="flex gap-2">
          {/* receipt section 1 (bought product list) */}

          <div className="w-[70%]  h-full px-2 pt-3 ">
            <Breadcrumbs aria-label="breadcrumb" style={{ color: "#f5f5f5" }}>
              <Link
                sx={{ fontSize: "1rem" }}
                href="#"
                underline="hover"
                color="#f5f5f5"
              >
                Sale
              </Link>
              <Link
                sx={{ fontSize: "1rem" }}
                underline="always"
                color="#f5f5f5"
                href="#"
              >
                Cashier
              </Link>
            </Breadcrumbs>
            <div className=" flex justify-between pb-3 border-b border-gray-700 ">
              <div className="flex gap-5 mt-2">
                <a className="text-[#f5f5f5] hover:text-blue-500 active:text-blue-700">
                  All
                </a>
                <a className="text-[#f5f5f5] hover:text-blue-500 active:text-blue-700">
                  Drinks
                </a>
                <a className="text-[#f5f5f5] hover:text-blue-500 active:text-blue-700">
                  Cakes
                </a>
                <a className="text-[#f5f5f5] hover:text-blue-500 active:text-blue-700">
                  Deserts
                </a>
                <a className="text-[#f5f5f5] hover:text-blue-500 active:text-blue-700">
                  Sets
                </a>
              </div>
              <input
                id="exampleSearch2"
                placeholder="search"
                className=" w-44 px-2 py-1 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-white "
                type="search"
              />
            </div>
            {/* sale cards */}
            <div className="px-1 flex flex-wrap gap-2 overflow-scroll  justify-start items-center">
              {products?.map((pd,i)=>{
                return(
                  <SaleCard key={i} pd={pd}  />
                )
              })}
            </div>
          </div>

          {/* reciept section 2 (calculator) */}
          <div className="w-[30%] h-full border-l border-[#3f4245]">
            <Reciept calculator={true} printBtn={false}  />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cashier;
