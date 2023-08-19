import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authApi } from "../API/authApi";
import authSlice from "./authSlice";
import { userApi } from "../API/userApi";

export const store= configureStore({
    reducer:{
        [authApi.reducerPath]:authApi.reducer,
        authSlice:authSlice,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware)
})