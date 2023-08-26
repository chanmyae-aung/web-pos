import React, { useState, useEffect } from "react";
import Calculator from "./Calculator";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listActiveUpdate } from "../../Feature/Service/recieptSlice";

const Reciept = ({ calculator, printBtn }) => {
  const { reciept, qty, totalPrice, activeValue, listActive } = useSelector(
    (state) => state.recieptSlice
  );
  console.log(reciept); // selected_items
  console.log(activeValue); // calculator input
  console.log(listActive); // product_id

  const dispatch = useDispatch();

  useEffect(() => {}, [activeValue]);

  const printHandler = () => {
    window.print();
  };
  return (
    <div className="text-[#f5f5f5] bg-[#161618] h-screen   ">
      <div className="flex flex-col h-full">
        <div
          className={`${
            printBtn == true
              ? `h-full overflow-scroll bg-[#161618]`
              : `h-[50%]  overflow-scroll overflow-x-hidden bg-[#161618]`
          }`}
        >
          <Typography
            sx={{ fontSize: "1.5rem", paddingX: "10px" }}
            gutterBottom
          >
            Reciept
          </Typography>
          <div className="boughtList">
            {reciept?.map((item) => {
              return (
                <Link
                  onClick={() => dispatch(listActiveUpdate(item?.product_id))}
                  key={item?.product_id}
                  className="mt-5  px-4 pt-2 mx-auto overflow-visible"
                >
                  <div className="flex justify-between border-b mb-1 pb-2 border-gray-600">
                    <div className="flex flex-col">
                      <p
                        className={
                          listActive == item?.product_id
                            ? `font-semibold text-blue-500 leading-loose tracking-wider text-[1rem]`
                            : ` font-semibold leading-loose tracking-wider text-[1rem]`
                        }
                      >
                        {item?.name.slice(0, 7)}
                      </p>
                      <span className="text-[0.8rem] font-thin">
                        <span className="mr-2">
                          {listActive === item?.product_id ? `${activeValue}`: `${item?.quantity}`}
                          pcs
                        </span>
                        <span>{item?.sale_price} MMK</span>
                      </span>
                    </div>
                    <span className="text-semibold">
                      {listActive === item?.product_id
                        ? `${activeValue * item?.sale_price} `
                        : `${item?.quantity * item?.sale_price} `}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        {calculator && (
          <div className="h-[50%]  ">
            <Calculator activeValue={activeValue} />
          </div>
        )}
        <div className="mt-auto flex flex-col justify-start ">
          {/* total amount */}
          {printBtn && (
            <div className=" mt-5 pt-5 px-5 ">
              {" "}
              <h1 className="text-xl font-medium">
                Total Amount : <span>{totalPrice}</span> MMK
              </h1>
              <span className="text-sm font-thin">Tax : 5000</span>
            </div>
          )}
          {/* Print Button */}
          {printBtn && (
            <button
              onClick={printHandler}
              className="print:hidden mt-5 px-2 py-1 rounded self-center bg-black"
            >
              Print
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reciept;
