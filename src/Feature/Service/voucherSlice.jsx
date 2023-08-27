import { createSlice } from "@reduxjs/toolkit";





export const voucherSlice=createSlice({
    name:"voucher",
    initialState:[],
    reducers:{
        updateVoucherItemQty:(state,action)=>{
            const {productId,newQuantity}=action.payload;
            const item=state.find(item=> item.product_id === productId);
            if(item){
                item.quantity=newQuantity;
            }

        }

    }
})

export const {updateVoucherItemQty}=voucherSlice.actions;
export default voucherSlice.reducer;