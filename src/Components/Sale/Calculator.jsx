import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { qtyUpdate } from "../../Feature/Service/recieptSlice";
import { useDispatch, useSelector } from "react-redux";

const Calculator = () => {
  
  const { reciept, qty, activeValue,listActive } = useSelector((state) => state.recieptSlice);
  const dispatch=useDispatch();

  return (
    <div className="w-[25.3rem] fixed bottom-0 text-xs bg-[#202124] text-[#f5f5f5]">
      <div className="flex flex-col">
        <div  className="flex justify-center tableUi border border-[#3f4245]">
          <input id="note" className="" type="button" value="Note" />
          <input id="note" type="button" value="Note" />
          <input id="note" type="button" value="Note" />
        </div>
        <div className="flex justify-center btnUi border border-[#3f4245]">
          <input  onClick={(e)=>dispatch(qtyUpdate(parseInt(e.target.value)))}  id="one-fourth-btns" type="button" value="1" />
          <input onClick={(e)=>dispatch(qtyUpdate(parseInt(e.target.value)))}  id="one-fourth-btns" type="button" value="2" />
          <input onClick={(e)=>dispatch(qtyUpdate(parseInt(e.target.value)))}  id="one-fourth-btns" type="button" value="3" />
          <input  id="one-fourth-btns" type="button" value="QTY" />
        </div>
        <div className="flex justify-center border btnUi border-[#3f4245]">
          <input onClick={(e)=>dispatch(qtyUpdate(parseInt(e.target.value)))}  id="one-fourth-btns" type="button" value="4" />
          <input onClick={(e)=>dispatch(qtyUpdate(parseInt(e.target.value)))}  id="one-fourth-btns" type="button" value="5" />
          <input onClick={(e)=>dispatch(qtyUpdate(parseInt(e.target.value)))}  id="one-fourth-btns" type="button" value="6" />
          <input  id="one-fourth-btns" type="button" value="DIS" />
        </div>
        <div className="flex justify-center btnUi  border border-[#3f4245]">
          <input onClick={(e)=>dispatch(qtyUpdate(parseInt(e.target.value)))}  id="one-fourth-btns" type="button" value="7" />
          <input onClick={(e)=>dispatch(qtyUpdate(parseInt(e.target.value)))}  id="one-fourth-btns" type="button" value="8" />
          <input onClick={(e)=>dispatch(qtyUpdate(parseInt(e.target.value)))}  id="one-fourth-btns" type="button" value="9" />
          <input
            
            id="one-fourth-btns"
            type="button"
            value="PRICE"
          />
        </div>
        <div className="flex justify-center border btnUi border-[#3f4245]">
          <input  id="one-fourth-btns" type="button" value="+/-" />
          <input onClick={(e)=>dispatch(qtyUpdate(parseInt(e.target.value)))}  id="one-fourth-btns" type="button" value="0" />
          <input  id="one-fourth-btns" type="button" value="." />
          <input  id="one-fourth-btns" type="button" value="DEL" />
        </div>
        <div className="flex justify-center border hover:bg-[#3f4245] transition-all active:bg-[#161618] border-[#3f4245] items-center py-3">
          <NavLink to={"/sale-checkout"}>payment</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
