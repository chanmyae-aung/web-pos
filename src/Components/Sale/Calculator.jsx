import React from "react";
import { decreaseQty, qtyUpdate } from "../../Feature/Service/recieptSlice";
import { useDispatch, useSelector } from "react-redux";

const Calculator = ({ paymentHandler }) => {
  const dispatch = useDispatch();
  const { listSelector, reciept } = useSelector((state) => state.recieptSlice);

  return (
    <div className=" calc-width    fixed bottom-0 text-xs bg-[#202124] text-[#f5f5f5]">
      <div className="flex flex-col">
        <div className="flex justify-center tableUi border border-[#3f4245]">
          <input id="note" className="" type="button" value="Note" />
          <input id="note" type="button" value="Note" />
          <input id="note" type="button" value="Note" />
        </div>
        <div className="flex justify-center btnUi border border-[#3f4245]">
          <input
            onClick={() => dispatch(qtyUpdate({ qty: "1", id: listSelector }))}
            id="one-fourth-btns"
            type="button"
            value="1"
          />
          <input
            onClick={() => dispatch(qtyUpdate({ qty: "2", id: listSelector }))}
            id="one-fourth-btns"
            type="button"
            value="2"
          />
          <input
            onClick={() => dispatch(qtyUpdate({ qty: "3", id: listSelector }))}
            id="one-fourth-btns"
            type="button"
            value="3"
          />

          <input id="one-fourth-btns" type="button" value="QTY" />
        </div>
        <div className="flex justify-center border btnUi border-[#3f4245]">
          <input
            onClick={() => dispatch(qtyUpdate({ qty: "4", id: listSelector }))}
            id="one-fourth-btns"
            type="button"
            value="4"
          />
          <input
            onClick={() => dispatch(qtyUpdate({ qty: "5", id: listSelector }))}
            id="one-fourth-btns"
            type="button"
            value="5"
          />
          <input
            onClick={() => dispatch(qtyUpdate({ qty: "6", id: listSelector }))}
            id="one-fourth-btns"
            type="button"
            value="6"
          />
          <input id="one-fourth-btns" type="button" value="DIS" />
        </div>
        <div className="flex justify-center btnUi  border border-[#3f4245]">
          <input
            onClick={() => dispatch(qtyUpdate({ qty: "7", id: listSelector }))}
            id="one-fourth-btns"
            type="button"
            value="7"
          />
          <input
            onClick={() => dispatch(qtyUpdate({ qty: "8", id: listSelector }))}
            id="one-fourth-btns"
            type="button"
            value="8"
          />
          <input
            onClick={() => dispatch(qtyUpdate({ qty: "9", id: listSelector }))}
            id="one-fourth-btns"
            type="button"
            value="9"
          />
          <input id="one-fourth-btns" type="button" value="PRICE" />
        </div>
        <div className="flex justify-center border btnUi border-[#3f4245]">
          <input id="one-fourth-btns" type="button" value="+/-" />
          <input
            onClick={() => dispatch(qtyUpdate({ qty: "0", id: listSelector }))}
            id="one-fourth-btns"
            type="button"
            value="0"
          />
          <input id="one-fourth-btns" type="button" value="." />
          <input
            onClick={() => dispatch(decreaseQty(listSelector))}
            id="one-fourth-btns"
            type="button"
            value="DEL"
          />
        </div>
        <div
          onClick={paymentHandler}
          className={`${
            reciept?.length == 0 && ` cursor-not-allowed `
          } flex justify-center border hover:bg-[#3f4245] cursor-pointer transition-all active:bg-[#161618] border-[#3f4245] items-center py-3 `}
        >
          payment
        </div>
      </div>
    </div>
  );
};

export default Calculator;
