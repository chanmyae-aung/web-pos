import React from "react";
import { Route, Routes } from "react-router-dom";
import Guard from "./Guard";
import Dashboard from "../Pages/Dashboard";
import UserList from "../Pages/user/UserList";
import UserDetail from "../Pages/user/UserDetail";
import CreateUser from "../Pages/user/CreateUser";
import UpdateUser from "../Pages/user/UpdateUser";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Mediapgwpic from "../Pages/Media/Mediapgwpic";
import AuthenticatedGuard from "./AuthenticatedGuard";
import Error from "../Pages/Error";
import Recent from "../Pages/Sale/Recent";
import InventoryOverview from "../Pages/Inventory/InventoryOverview";
import Cashier from "../Pages/Sale/Cashier";
//import MyAccount from "../Pages/Profile/MyAccount";
//import EditProfile from "../Pages/Profile/EditProfile";

export default function Path() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Guard>
              <Home />
            </Guard>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="user-overview" element={<UserList />} />
          <Route path="user-detail" element={<UserDetail />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="update-user" element={<UpdateUser />} />
          <Route path="media-gallery" element={<Mediapgwpic />} />
          <Route path="sale-recent" element={<Recent/>}/>
          <Route path="inventory-overview" element={<InventoryOverview/>}/>
        </Route>
        <Route path="sale-cashier" element={<Cashier/>}/>
        <Route path="login" element={<AuthenticatedGuard><Login /></AuthenticatedGuard>} />
        <Route path="/*" element={<Error/>}/>
      </Routes>
    </div>
  );
}
