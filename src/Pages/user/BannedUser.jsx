import React, { useState } from 'react'
import { Table } from '@mantine/core';
import {BsArrowRight, BsDash} from 'react-icons/bs'
import {MdOutlineEdit} from 'react-icons/md'
import Breadcrumb from '../../Components/Breadcrumb';
import Pagination from '../../Components/Pagination';
import Cookies from 'js-cookie';
import { useGetAllUsersQuery } from '../../Feature/API/userApi';
import { useNavigate } from 'react-router-dom';
import ManageOverview from '../../Components/ManageOverview';

export default function BannedUser() {
  const token = Cookies.get("token")
  const nav = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const {data} = useGetAllUsersQuery({token, currentPage})
  const users = (data?.users.data)
  console.log(data)

  const rows = users?.map((i, index) => (
    <tr key={i.id}>
      <td>{index +1}</td>
      <td>{i.name}</td>
      <td>{i.role}</td>
      <td>{i.email}</td>
      <td className="flex gap-5">
        <button className='text-[#f5f5f5] text-sm px-4 py-1 rounded border border-[#f5f5f5]'>
            RESTORE
        </button>
        </td>
    </tr>
  ));

  return (
    
    <>
    {/* path breadcrumbs */}
    <div>
      <Breadcrumb createUser={true} icon={true} btnText={"Create user"} title={"User"} firstRoute={"User"} secondRoute={"Banned"}/>
    </div>
    {/* path breadcrumbs */}
    <div>
      <ManageOverview tableType={"Banned User Overview"}/>
    </div>
    <main className='border border-b-0 rounded mt-7'>
      <Table verticalSpacing={"md"} sx={{color: "#F5F5F5"}}>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Position</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
    </main>
    <div>
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} last_page={data?.users.to}/>
    </div>
    </>
  );
}
