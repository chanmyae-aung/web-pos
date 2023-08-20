import React from "react";

export default function LoginInfo() {
  return (
    <div className="px-10 py-5 flex flex-col gap-5 bg-[#1a1a1a]">
      <div className="flex">
        <p className="w-[30%]">Phone</p>
        <p className="w-[70%]">: 0987654321</p>
      </div>
      <div className="flex">
        <p className="w-[30%]">Position</p>
        <p className="w-[70%]">: Sale Executive</p>
      </div>
      <div className="flex">
        <p className="w-[30%]">Email</p>
        <p className="w-[70%]">: ethan@gmail.com</p>
      </div>
    </div>
  );
}
