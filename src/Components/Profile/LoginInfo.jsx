import React from "react";

export default function LoginInfo({data}) {
  return (
    <div className="px-10 py-5 flex flex-col gap-5 bg-[#1a1a1a]">
      <div className="flex">
        <p className="w-[30%]">Phone</p>
        <p className="w-[70%]">: {data?.user.phone}</p>
      </div>
      <div className="flex">
        <p className="w-[30%]">Position</p>
        <p className="w-[70%]">: {data?.user.role}</p>
      </div>
      <div className="flex">
        <p className="w-[30%]">Email</p>
        <p className="w-[70%]">: {data?.user.email}</p>
      </div>
    </div>
  );
}
