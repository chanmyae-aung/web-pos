import React from "react";
import Calculator from "./Calculator";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearList, setListSelector, voucherUpdate } from "../../Feature/Service/recieptSlice";
import { useCheckoutMutation } from "../../Feature/API/saleApi";
import Cookies from "js-cookie";
// import Swal from "sweetalert2";

const Reciept = ({ calculator, printBtn }) => {
  const dispatch = useDispatch();
  const { reciept, totalPrice, listSelector, tax,voucherData } = useSelector(
    (state) => state.recieptSlice
  );

  // to POST voucher data
  const [checkout] = useCheckoutMutation();
  const token = Cookies.get("token");

  // new list of voucher data to send api,voucher_api is an array from api
  const newVoucherData = {
    voucher_records: reciept.map((ele) => {
      return {
        product_id: ele.product_id,
        quantity: Number(ele.quantity),
      };
    }),
  };
  console.log(newVoucherData);

  const errorMessage = (error) => {
    Swal.fire({
      title: error,
      icon: 'warning',
      iconColor: "#E64848",
      background: "#161618",
      // showCloseButton: true,
      confirmButtonColor: '#E64848',
      confirmButtonText: 'OK'
    })
  }

  const navigate=useNavigate();
  // after voucher done click on the payment button to send data to Api
  const paymentHandler = async () => {
    try {
      const data = await checkout({ token, newVoucherData });
      console.log(data);
      if(data?.data?.data){
        dispatch(voucherUpdate(data?.data));
        navigate("/sale-reciept")
        dispatch(clearList());
      }else if(data?.error){
        errorMessage(data?.error?.data?.errors?.voucher_records) //pyin ya own ml
      }
    } catch (error) {
      console.log(error);
    }
  };
  // render when the voucher list select
  const listActiveUpdate = (id) => {
    dispatch(setListSelector(id));
  };

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
                  onClick={(e) => listActiveUpdate(item?.product_id)}
                  key={item?.product_id}
                  className="mt-5  px-4 pt-2 mx-auto overflow-visible"
                >
                  <div className="flex justify-between border-b mb-1 pb-2 border-gray-600">
                    <div className="flex flex-col">
                      <p
                        className={`${
                          listSelector == item?.product_id && "text-blue-600"
                        } font-semibold leading-loose tracking-wider text-[1rem] `}
                      >
                        {item?.name.slice(0, 7)}
                      </p>
                      <span className="text-[0.8rem] font-thin">
                        <span className="mr-2">
                          {item?.quantity == "" ? "0" : item?.quantity}
                          pcs
                        </span>
                        <span>{item?.sale_price} MMK</span>
                      </span>
                    </div>
                    <span className="text-semibold">
                      {Number(item?.quantity) * item?.sale_price}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        {calculator && (
          <div className="h-[50%]  ">
            <Calculator paymentHandler={paymentHandler} />
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
              <span className="text-sm font-thin">Tax : {tax.toFixed(2)}</span>
            </div>
          )}
          {/* Print Button */}
          {printBtn && (
            <button className="print:hidden mt-5 px-2 py-1 rounded self-center bg-black">
              Print
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reciept;
