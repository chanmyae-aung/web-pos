import React from "react";

export default function Personal({data}) {
  return (
    <div className="px-10 py-5 flex flex-col gap-5 bg-[#1a1a1a]">
      <div className="flex">
        <p className="w-[30%]">Date of Birth</p>
        <p className="w-[70%]">: {data?.user.date_of_birth}</p>
      </div>
      <div className="flex">
        <p className="w-[30%]">Gender</p>
        <p className="w-[70%]">: {data?.user.gender}</p>
      </div>
      <div className="flex">
        <p className="w-[30%]">Address</p>
        <p className="w-[70%]">: {data?.user.address}</p>
      </div>
    </div>
  );
}
