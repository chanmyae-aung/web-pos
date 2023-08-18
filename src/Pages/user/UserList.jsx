import React from 'react'
import { Table } from '@mantine/core';
import {BsArrowRight, BsDash} from 'react-icons/bs'
import {MdOutlineEdit} from 'react-icons/md'
import Breadcrumb from '../../Components/Breadcrumb';

export default function UserList() {
  const elements = [
    { id: 1, name: "MMS", position: "Admin", email: "mms@gmial.com" },
    { id: 2, name: "MMS", position: "Admin", email: "mms@gmial.com" },
    { id: 3, name: "MMS", position: "Admin", email: "mms@gmial.com" },
    { id: 4, name: "MMS", position: "Admin", email: "mms@gmial.com" },
    { id: 5, name: "MMS", position: "Admin", email: "mms@gmial.com" },
  ];
  const rows = elements.map((element) => (
    <tr key={element.id}>
      <td>{element.id}</td>
      <td>{element.name}</td>
      <td>{element.position}</td>
      <td>{element.email}</td>
      <td className="flex gap-5">
        <BsDash className="text-3xl hover:bg-gray-50 hover:text-gray-500 rounded-full bg-gray-500 text-gray-50 p-1.5 cursor-pointer transition-all duration-200 ease-in" />
        <MdOutlineEdit className="text-3xl hover:bg-gray-50 hover:text-gray-500 rounded-full bg-gray-500 text-gray-50 p-1.5 cursor-pointer transition-all duration-200 ease-in" />
        <BsArrowRight className="text-3xl hover:bg-gray-50 hover:text-gray-500 rounded-full bg-gray-500 text-gray-50 p-1.5 cursor-pointer transition-all duration-200 ease-in" />
      </td>
    </tr>
  ));

  return (
    
    <>
    {/* path breadcrumbs */}
    <div>
      <Breadcrumb icon={true} btnText={"Create"} title={"User"} firstRoute={"User"} secondRoute={"Overview"}/>
    </div>
    {/* path breadcrumbs */}
    <main className='border mt-7'>
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
    </>
  );
}
