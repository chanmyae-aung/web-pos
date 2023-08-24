import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState={
    reciept:[],
    totalPrice:0,
    qty:0
}

export const recieptSlice=createSlice({
    name:"reciept",
    initialState,
    reducers:{
       addtoReciept:(state,{payload})=>{
        const isExisted=state.reciept.find((item)=>item.product_id===payload.product_id);
        if(isExisted){
            return state
        }else{
            state.reciept=[...state.reciept,{...payload,quantity:1}]
            state.totalPrice+=payload.actual_price
        }
       }
    }
})

export const{addtoReciept}=recieptSlice.actions
export default recieptSlice.reducer

