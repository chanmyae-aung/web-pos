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

export default function Path() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            index
            element={
              <Guard>
                <Dashboard />
              </Guard>
            }
          />
          <Route
            path="user-overview"
            element={
              <Guard>
                <UserList />
              </Guard>
            }
          />
          <Route
            path="user-detail"
            element={
              <Guard>
                <UserDetail />
              </Guard>
            }
          />
          <Route
            path="create-user"
            element={
              <Guard>
                <CreateUser />
              </Guard>
            }
          />
          <Route
            path="update-user"
            element={
              <Guard>
                <UpdateUser />
              </Guard>
            }
          />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}
