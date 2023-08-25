import React from "react";
import { Link, NavLink } from "react-router-dom";

const isBtnActive=(e)=>{
  e.preventDefault();
  console.log(e.target.value);
}
const Calculator = () => {
  return (
    <div className="w-[25.3rem] fixed bottom-0 text-xs bg-[#202124] text-[#f5f5f5]">
      <div className="flex flex-col">
        <div className="flex justify-center tableUi border border-[#3f4245]">
          <input id="note" className="" type="button" value="Note" />
          <input id="note" type="button" value="Note" />
          <input id="note" type="button" value="Note" />
        </div>
        <div className="flex justify-center btnUi border border-[#3f4245]">
          <input onClick={isBtnActive} className="" id="one-fourth-btns" type="button" value="1" />
          <input onClick={isBtnActive} className="" id="one-fourth-btns" type="button" value="2" />
          <input onClick={isBtnActive} className="" id="one-fourth-btns" type="button" value="3" />
          <input className="" id="one-fourth-btns" type="button" value="QTY" />
        </div>
        <div className="flex justify-center border btnUi border-[#3f4245]">
          <input onClick={isBtnActive} className="" id="one-fourth-btns" type="button" value="4" />
          <input onClick={isBtnActive} className="" id="one-fourth-btns" type="button" value="5" />
          <input onClick={isBtnActive} className="" id="one-fourth-btns" type="button" value="6" />
          <input className="" id="one-fourth-btns" type="button" value="DIS" />
        </div>
        <div className="flex justify-center btnUi  border border-[#3f4245]">
          <input onClick={isBtnActive} className="" id="one-fourth-btns" type="button" value="7" />
          <input onClick={isBtnActive} className="" id="one-fourth-btns" type="button" value="8" />
          <input onClick={isBtnActive} className="" id="one-fourth-btns" type="button" value="9" />
          <input className="" id="one-fourth-btns" type="button" value="PRICE"/>
        </div>
        <div className="flex justify-center border btnUi border-[#3f4245]">
          <input onClick={isBtnActive} className="" id="one-fourth-btns" type="button" value="+/-" />
          <input onClick={isBtnActive} className="" id="one-fourth-btns" type="button" value="0" />
          <input onClick={isBtnActive} className="" id="one-fourth-btns" type="button" value="." />
          <input className="" id="one-fourth-btns" type="button" value="DEL" />
        </div>
        <div className="flex justify-center border hover:bg-[#3f4245] transition-all active:bg-[#161618] border-[#3f4245] items-center py-3">
          <NavLink to={"/sale-checkout"}>payment</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
