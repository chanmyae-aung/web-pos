import React from 'react'
import { Outlet } from 'react-router'

export default function Home() {
  return (
    <div className='flex w-screen bg-[#202124]'>
      <div className='w-[15%] text-white'>
        Sidebar
      </div>
        <div className='w-[85%] mt-20 px-12'>
        <Outlet />
        </div>
    </div>
  )
}
