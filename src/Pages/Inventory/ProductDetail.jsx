import React from 'react'
import { MdOutlineEdit } from "react-icons/md";
import { TbMailOpenedFilled } from "react-icons/tb";
import { FaPhoneVolume } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { Table } from '@mantine/core';
import Pagination from '../../Components/Pagination';

const ProductDetail = () => {
    const editImage = document.querySelector(".file");
    const elements = [
        {
          No: 1,
          name: "abcd",
          account: "123",
          date: "-",
       
        },
        {
          No: 2,
          name: "efgh",
          account: "345",
          date: "-",
         
        },
        {
          No: 3,
          name: "ijkl",
          account: "569",
          date: "-",
        
        },
        {
          No: 4,
          name: "mnop",
          account: "mn",
          date: "-",
         
        },
        {
          No: 5,
          name: "qrst",
          account: "qr",
          date: "-",
         
        },
      ];
      const rows = elements.map((element) => (
        <tr key={element.No}>
          <td className=" text-white">{element.No}</td>
          <td className=" text-white">{element.name}</td>
          <td className=" text-white">{element.account}</td>
          <td className=" text-white">{element.date}</td>
         
        </tr>
      ));
  return (
    <div className={`w-full flex justify-around items-center`}>
      <main className={`flex items-center mt-24`}>
        <section className={`w-full h-[70%] p-1`}>
          <div className={`w-full relative p-8 bg-[#171717]`}>
            <div
              className={`w-40 h-40 absolute -top-16 rounded-full border p-1 flex justify-center items-center`}
            >
              <img
                className={`w-full`}
                src={`https://cdn-icons-png.flaticon.com/512/8787/8787106.png`}
                alt=""
              />
              <div
                onClick={() => editImage.click()}
                className={`flex justify-center cursor-pointer absolute bg-[#f5f5f5] right-3  bottom-1 items-center text-xs gap-1 border-2 rounded-full w-8 h-8 px-1 py-0.5`}
              >
                <MdOutlineEdit className="text-slate-700" />
                <input className="file hidden" type="file" name="" id="" />
              </div>
            </div>
            <div className={`flex items-center justify-between mx-10 ml-52`}>
              <div className={``}>
                <h2>Watemelon</h2>
                <p>Sale Price:10,000 mml</p>
                <p>Actual Price:8,000 mml</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex items-center bg-[#161618] gap-10 px-8 border-b py-5`}
            >
              <NavLink>
                <div className="flex items-center gap-2">
                  <BiSolidUser />
                  <h4> Information</h4>
                </div>
              </NavLink>
            </div>
            <div className="px-10 py-5 flex flex-col gap-5 bg-[#1a1a1a]">
              <div className="flex">
                <p className="w-[30%]">Name</p>
                <p className="w-[70%]">: Watermelon</p>
              </div>
              <div className="flex">
                <p className="w-[30%]">Brand</p>
                <p className="w-[70%]">: LV</p>
              </div>
              <div className="flex">
                <p className="w-[30%]">Stock</p>
                <p className="w-[70%]">: 100000</p>
              </div>
              <div className="flex">
                <p className="w-[30%]">Unit</p>
                <p className="w-[70%]">: S</p>
              </div>
              <div className="flex">
                <p className="w-[30%]">More info</p>
                <p className="w-[70%]">: Fresh fruit </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    <div className=' flex-col'>
    <div className=' m-2 p-6 bg-[#171717]'>
     <p>STOCK HISTORY</p>
      <Table>
            <thead>
              <tr>
                <th className=" text-gray-300">NO</th>
                <th className=" text-gray-300">USER NAME</th>
                <th className=" text-gray-300">ADDED QUANTITY </th>
                <th className=" text-gray-300">CREATED AT</th>
               
                
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
          
      </div>
      <Pagination currentPage={'1'} last_page={'5'}/>
      <div className=' m-2 p-6 bg-[#171717]'>
     <p>SALE HISTORY</p>
      <Table>
            <thead>
              <tr>
                <th className=" text-gray-300">NO</th>
                <th className=" text-gray-300">USER NAME</th>
                <th className=" text-gray-300">ADDED QUANTITY </th>
                <th className=" text-gray-300">CREATED AT</th>
               
                
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
      </div>
      <Pagination currentPage={'1'} last_page={'5'}/>
    </div>
    </div>
  )
}

export default ProductDetail
