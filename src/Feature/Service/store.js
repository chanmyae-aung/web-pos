import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authApi } from "../API/authApi";
import authSlice from "./authSlice";
import { userApi } from "../API/userApi";
import userSlice from "./userSlice";
import { api } from '../API/mediaSlice'
import { getallProductsApi } from "../API/getallProductsApi";
import { saleApi } from "../API/saleApi";
import recieptSlice from "./recieptSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    authSlice: authSlice,
    [userApi.reducerPath]: userApi.reducer,
    userSlice: userSlice,
    [getallProductsApi.reducerPath]:getallProductsApi.reducer,
    recieptSlice:recieptSlice,
    [saleApi.reducerPath]:saleApi.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware,api.middleware,getallProductsApi.middleware,saleApi.middleware),
});
