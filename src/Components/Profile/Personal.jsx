import React from "react";

export default function Personal() {
  return (
    <div className="px-10 py-5 flex flex-col gap-5 bg-[#1a1a1a]">
      <div className="flex">
        <p className="w-[30%]">Date of Birth</p>
        <p className="w-[70%]">: 11/11/1999</p>
      </div>
      <div className="flex">
        <p className="w-[30%]">Gender</p>
        <p className="w-[70%]">: Male</p>
      </div>
      <div className="flex">
        <p className="w-[30%]">Address</p>
        <p className="w-[70%]">: No.2, Baho Street, Bahan, Yangon</p>
      </div>
    </div>
  );
}
