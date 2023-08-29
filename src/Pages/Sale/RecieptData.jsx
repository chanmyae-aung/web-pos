import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const RecieptData = () => {
  const { totalPrice, tax, voucherData } = useSelector(
    (state) => state.recieptSlice
  );
  //console.log(voucherData?.data?.voucher_records);
  const printHandler = () => {
    window.print();
  };
  return (
    <>
      <div className="bg-[#202124] vendorListHeading print:h-auto text-[#f5f5f5] w-full h-screen ">
        <div className=" print:hidden px-5 py-3 border-b">
          {/* back btn to go to dashboard */}
          <Link className="text-xl flex gap-1 " to="/">
          <BiArrowBack className="mt-1" />
            Back
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="text-[#f5f5f5] bg-[#161618] print:bg-[#f5f5f5] print:text-[#202124] my-3 py-4 px-3 rounded-sm shadow-lg   ">
            <div className="flex flex-col print:bg-[#f5f5f5] print:text-[#202124]">
              <div
                className={`h-full w-full  bg-[#161618] print:bg-[#f5f5f5] print:text-[#202124]`}
              >
                <Typography
                  sx={{ fontSize: "2rem", paddingX: "10px" }}
                  gutterBottom
                >
                  Reciept
                </Typography>
                {/* map data from bought list  */}
                <div className="boughtList print:bg-[#f5f5f5] print:text-[#202124]">
                  {voucherData?.data?.voucher_records?.map((item) => {
                    return (
                      <Link
                        key={item?.product_id}
                        className="mt-5  px-4 pt-2 mx-auto overflow-visible"
                      >
                        <div className="flex justify-between border-b mb-1 pb-2 border-gray-600">
                          <div className="flex flex-col">
                            <p className="font-semibold leading-loose tracking-wider text-[1rem]">
                              {/* {item?.name.slice(0, 7)} */}
                              {item?.product_id}
                            </p>
                            <span className="text-[0.8rem] font-semibold">
                              <span className="mr-2">
                                {item?.quantity}
                                pcs
                              </span>
                              <span>{item?.cost} MMK</span>
                            </span>
                          </div>
                          <span className="text-semibold">
                            {Number(item?.quantity) * item?.cost}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="mt-auto flex flex-col justify-start ">
                {/* total amount and tax */}

                <div className=" mt-5 pt-5 px-5 ">
                  {" "}
                  <h1 className="text-xl font-medium">
                    Total Amount : <span>{totalPrice}</span> MMK
                  </h1>
                  <span className="text-sm font-semibold print:bg-[#f5f5f5] print:text-[#202124]">
                    Tax : {tax.toFixed(2)}
                  </span>
                </div>

                {/* Print Button */}
                <button
                  onClick={printHandler}
                  className="print:hidden mt-5 px-3 py-2 rounded self-center bg-[#202124] "
                >
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecieptData;
