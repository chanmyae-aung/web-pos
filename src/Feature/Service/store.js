import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authApi } from "../API/authApi";
import authSlice from "./authSlice";

export const store= configureStore({
    reducer:{
        [authApi.reducerPath]:authApi.reducer,
        authSlice:authSlice
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(authApi.middleware)
    
})