import React from "react";
import { Breadcrumbs, Link } from "@mui/material";
import SaleCard from "../../Components/Sidebar/SaleCard";
import NavBar from "../../Components/Sidebar/NavBar";
import Reciept from "../../Components/Reciept";


const Cashier = () => {
  return (
    <>
     <NavBar/>
    <div className=" flex gap-2 bg-[#161618]">
       
   <div className=" w-2/3 mt-14 px-5">
     {/* sale breadcrumb */}
     <div className=" pb-4  ">
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
      </div>
      {/* sale tabs */}
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
          className=" w-44 px-3 py-1 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-white "
          type="search"
        />
      </div>
      {/* sale cards */}
      <div className="px-2 flex flex-wrap gap-2  justify-center items-center mb-10">
        <SaleCard/>
        <SaleCard/>
        <SaleCard/>
        <SaleCard/><SaleCard/>
        <SaleCard/>
        <SaleCard/>
        <SaleCard/><SaleCard/>
        <SaleCard/><SaleCard/>
        <SaleCard/>
        
       

        </div>
      

   </div>


   <div className=" border-l mt-14 px-5 w-1/3">
    <Reciept/>
   </div>
     
    </div>
    
    </>
    
  );
};

export default Cashier;
