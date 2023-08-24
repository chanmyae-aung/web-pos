import React from "react";
import { NavLink } from "react-router-dom";

const Calculator = () => {
  return (
    <div className="w-[25.3rem] fixed bottom-0 text-xs bg-[#202124] text-[#f5f5f5]">
     <div className="flex flex-col">
      <div className="flex justify-center border border-[#3f4245]">
        <input className="w-1/3 text-center py-3 border-r border-[#3f4245]" type="button" value="Note" />
        <input className="w-1/3 text-center py-3 border-r border-[#3f4245]" type="button" value="Note" />
        <input className="w-1/3 text-center py-3 border-r border-[#3f4245]" type="button" value="Note" />
      </div>
      <div className="flex justify-center border border-[#3f4245]">
        <input className="w-1/4 border-r border-[#3f4245] text-center py-4" type="button" value="1" />
        <input className="w-1/4 border-r border-[#3f4245] text-center py-4" type="button" value="2" />
        <input className="w-1/4 border-r border-[#3f4245] text-center py-4" type="button" value="3" />
        <input className="w-1/4 border-r border-[#3f4245] text-center py-4" type="button" value="QTY" />

      </div>
      <div className="flex justify-center border border-[#3f4245]">
        <input className="w-1/4 border-r border-[#3f4245] text-center py-4" type="button" value="4" />
        <input className="w-1/4 border-r border-[#3f4245] text-center py-4" type="button" value="5" />
        <input className="w-1/4 border-r border-[#3f4245] text-center py-4" type="button" value="6" />
        <input className="w-1/4 border-r border-[#3f4245] text-center py-4" type="button" value="DIS" />

      </div><div className="flex justify-center  border border-[#3f4245]">
        <input className="w-1/4 border-r border-[#3f4245] text-center py-4" type="button" value="7" />
        <input className="w-1/4 border-r border-[#3f4245] text-center py-4" type="button" value="8" />
        <input className="w-1/4 border-r border-[#3f4245] text-center py-4" type="button" value="9" />
        <input className="w-1/4 border-r border-[#3f4245] text-center py-4" type="button" value="PRICE" />

      </div>
      <div className="flex justify-center border border-[#3f4245]">
        <input className="w-1/4 border-r border-[#3f4245] text-center py-4" type="button" value="+/-" />
        <input className="w-1/4 border-r border-[#3f4245] text-center py-4" type="button" value="0" />
        <input className="w-1/4 border-r border-[#3f4245] text-center py-4" type="button" value="." />
        <input className="w-1/4 border-r border-[#3f4245] text-center py-4" type="button" value="DEL" />

      </div>
      <div className="flex justify-center border border-[#3f4245] items-center py-3">
        <NavLink  to={"/sale-checkout"}>payment</NavLink>
      </div>
     </div>
    </div>
  );
};

export default Calculator;
