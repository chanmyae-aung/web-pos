import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import UserList from '../Pages/user/UserList'
import UserDetail from '../Pages/user/UserDetail'
import CreateUser from '../Pages/user/CreateUser'
import UpdateUser from '../Pages/user/UpdateUser'
import Home from '../Pages/Home'
import Mediapgwpic from '../Pages/Media/Mediapgwpic'

export default function Path() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}>
                <Route index element={<Dashboard/>}/>
                <Route path='user-overview' element={<UserList/>}/>
                <Route path='user-detail' element={<UserDetail/>}/>
                <Route path='create-user' element={<CreateUser/>}/>
                <Route path='update-user' element={<UpdateUser/>}/>
                <Route path='media-gallery' element={<Mediapgwpic/>}/>
            </Route>
        </Routes>
    </div>
  )
}
