import React, { useState } from "react";
import { Table } from "@mantine/core";
import { BsArrowRight, BsDash } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";
import Breadcrumb from "../../Components/Breadcrumb";
import Pagination from "../../Components/Pagination";
import Cookies from "js-cookie";
import { useGetAllUsersQuery } from "../../Feature/API/userApi";
import { useNavigate } from "react-router-dom";
import ManageOverview from "../../Components/ManageOverview";
import { TableCell, TableHead, TableRow } from "@mui/material";

export default function UserList() {
  const token = Cookies.get("token");
  const nav = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useGetAllUsersQuery({ token, currentPage });
  const users = data?.users.data;
  console.log(data);

  const rows = users?.map((i, index) => (
    <tr key={i.id}>
      <td>{index + 1}</td>
      <td>{i.name}</td>
      <td>{i.role}</td>
      <td>{i.email}</td>
      <td className="flex gap-5">
        <BsDash className="text-3xl hover:bg-gray-50 hover:text-gray-500 rounded-full bg-gray-500 text-gray-50 p-1.5 cursor-pointer transition-all duration-200 ease-in" />
        <MdOutlineEdit
          onClick={() => nav(`/edit-user/${i.id}`)}
          className="text-3xl hover:bg-gray-50 hover:text-gray-500 rounded-full bg-gray-500 text-gray-50 p-1.5 cursor-pointer transition-all duration-200 ease-in"
        />
        <BsArrowRight
          onClick={() => nav(`/user-detail/${i.id}`)}
          className="text-3xl hover:bg-gray-50 hover:text-gray-500 rounded-full bg-gray-500 text-gray-50 p-1.5 cursor-pointer transition-all duration-200 ease-in"
        />
      </td>
    </tr>
  ));

  return (
    <>
      {/* path breadcrumbs */}
      <div>
        <Breadcrumb
           showBtn={true} createUser={true}
          icon={true}
          btnText={"Create user"}
          title={"User"}
          firstRoute={"User"}
          secondRoute={"Overview"}
        />
      </div>
      {/* path breadcrumbs */}
      <div>
        <ManageOverview tableType={"Staff Overview"} />
      </div>
      <main className="border border-b-0 rounded mt-7">
        <Table verticalSpacing={"md"} sx={{ color: "#F5F5F5" }}>
          <TableHead
            
          >
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Email</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <tbody>{rows}</tbody>
        </Table>
      </main>
      <div>
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          last_page={data?.users.to}
        />
      </div>
    </>
  );
}
