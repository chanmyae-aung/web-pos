import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { listActiveUpdate } from '../../Feature/Service/recieptSlice';
import { updateVoucherItemQty } from '../../Feature/Service/voucherSlice';
import Calculator from './Calculator';

const VoucherList = ({item,calculator,printBtn}) => {
    const { reciept, activeValue, listActive } = useSelector(
        (state) => state.recieptSlice
      );
      console.log(reciept); // selected_items
      console.log(activeValue); // calculator input
      console.log(listActive); // product_id
    
      const dispatch = useDispatch();
      const [qty,setQty]=useState(item?.quantity);
      console.log(qty);
      const handleQuantityChange=(newQty)=>{
        setQty(newQty);
        dispatch(updateVoucherItemQty({productId:item?.product_id,newQuantity:newQty}));
      }

      const printHandler = () => {
        window.print();
      };

  return (
   <>
    <Link
    // onClick={() => dispatch(listActiveUpdate(item))}
    // onClick={()=>handleQuantityChange(activeValue)}
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
            {/* {listActive === item?.product_id ? `${activeValue}`: `${item?.quantity}`} */}
            {/* {item?.quantity} */}
            {/* {item?.quantity} */}
            {qty}

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
   {calculator && (
    <div className="h-[50%]  ">
      <Calculator handleQuantityChange={handleQuantityChange} activeValue={activeValue} />
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
   </>
  )
}

export default VoucherList
