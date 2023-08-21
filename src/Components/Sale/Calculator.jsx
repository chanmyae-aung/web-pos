import React from "react";
import { NavLink } from "react-router-dom";

const Calculator = () => {
  return (
    <div className="">
      <table className=" w-[27.8rem] text-sm text-left  bg-[#202124] text-[#f5f5f5] border">
        <thead className="text-xs border  text-[#f5f5f5] uppercase ">
          <tr>
            <td className="px-3 py-3 border"> <button>Note</button> </td>
            <td className="px-3 py-3 border" colSpan={2}>
               <button>Note +</button> 
            </td>
            <td className="px-3 py-3 border"> <button>Note</button> </td>
          </tr>
          <tr>
            <td className="px-3 py-3 border"> <button>1</button></td>
            <td className="px-3 py-3 border"> <button>2</button></td>
            <td className="px-3 py-3 border"> <button>3</button></td>
            <td className="px-3 py-3 border  text-right"><button>QTY</button> </td>
          </tr>
          <tr>
            <td className="px-3 py-3 border"><button>4</button></td>
            <td className="px-3 py-3 border"> <button>5</button></td>
            <td className="px-3 py-3 border"><button>6</button></td>
            <td className="px-3 py-3 border text-right"> <button>DIS</button></td>
          </tr>
          <tr>
            <td className="px-3 py-3 border"><button>7</button></td>
            <td className="px-3 py-3 border"><button>8</button></td>
            <td className="px-3 py-3 border"><button>9</button></td>
            <td className="px-3 py-3 border  text-right"> <button>Price</button></td>
          </tr>
          <tr>
            <td className="px-3 py-3 border"><button>+ / -</button></td>
            <td className="px-3 py-3 border"><button>0</button></td>
            <td className="px-3 py-3 border"><button>.</button></td>
            <td className="px-3 py-3 border  text-right"><button>DEL</button></td>
          </tr>
          <tr>
            <td className="py-2 px-2 text-center" colSpan={4}>
              <NavLink to={"/sale-checkout"} ><button>payment</button></NavLink>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Calculator;
