import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reciept: [],
  totalPrice: 0,
  activeValue: 1,
  listActive:0,
};

export const recieptSlice = createSlice({
  name: "reciept",
  initialState,
  reducers: {
    addtoReciept: (state, { payload }) => {
      const isExisted = state.reciept.find(
        (item) => item.product_id === payload.product_id
      );
      if (isExisted) {
        return state;
      } else {
        state.reciept = [...state.reciept, { ...payload, quantity: 1 }];
        state.totalPrice += payload.sale_price;
      }
    },
    qtyUpdate: (state, {payload}) => {
      state.activeValue = payload;
    },
    listActiveUpdate: (state, {payload}) => {
    state.listActive = payload.product_id;
      state.reciept=state.reciept.map((ele)=>ele.product_id=== state.listActive ? {...payload, quantity : state.activeValue}: ele)
      state.activeValue=1;
    
     },
  },
});
export const { addtoReciept, qtyUpdate, listActiveUpdate } =
  recieptSlice.actions;
export default recieptSlice.reducer;
