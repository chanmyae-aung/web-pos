import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addAddress,
  addBirthDate,
  addEmail,
  addGender,
  addName,
  addPhone,
} from "../../Feature/Service/userSlice";
import { useGetSingleUserQuery } from "../../Feature/API/userApi";

export default function StepOne({ userEdit, token, id }) {
  const { data } = useGetSingleUserQuery({ token, id });
  console.log(data);
  console.log(userEdit);
  const dispatch = useDispatch();
  const [editUser, setEditUser] = useState({
    name: "",
    email: '',
    phone: '',
    gender: '',
    address: '',
    date_of_birth: '',
  });

  useEffect(() => {
    setEditUser({
      name: data?.user.name,
      email: data?.user.email,
      phone: data?.user.phone,
      gender: data?.user.gender,
      address: data?.user.address,
      date_of_birth: data?.user.date_of_birth,
    });
  }, [data]);
  return (
    <div>
      <section className={`flex flex-col gap-5 bg-[#161618] p-10 w-full`}>
        <div className="flex">
          <label className="w-[30%]">Name</label>
          <input
            value={editUser?.name}
            onChange={(e) => setEditUser({ name: e.target.value })}
            placeholder="Enter your name"
            className={`w-[70%] outline-none border rounded px-5 py-2`}
            type="text"
            name=""
            id=""
          />
        </div>
        {editUser && (
          <div className="flex">
            <label className="w-[30%]">Email</label>
            <input
              value={editUser?.email}
              onChange={(e) => setEditUser({ email: e.target.value })}
              placeholder="Enter your phone number"
              className={`w-[70%] outline-none border rounded px-5 py-2`}
              type="email"
              name=""
              id=""
            />
          </div>
        )}
        <div className="flex">
          <label className="w-[30%]">Phone</label>
          <input
            value={editUser?.phone}
            onChange={(e) => setEditUser({ phone: e.target.value })}
            placeholder="Enter your phone number"
            className={`w-[70%] outline-none border rounded px-5 py-2`}
            type="phone"
            name=""
            id=""
          />
        </div>
        <div className="flex">
          <label className="w-[30%]">Date of Birth</label>
          <input
            value={editUser?.date_of_birth}
            onChange={(e) => setEditUser({ date_of_birth: e.target.value })}
            placeholder="Enter your birth date"
            className={`w-[70%] outline-none border rounded px-5 py-2`}
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="flex">
          <label className="w-[30%]">Gender</label>
          <div className={`w-[70%] flex items-center gap-10`}>
            <div className={`flex items-center gap-2`}>
              <input
                value={editUser?.gender}
                onChange={(e) =>
                  setEditUser({
                    name: e.target.textContent.toLocaleLowerCase(),
                  })
                }
                className={``}
                type="radio"
                name="gender"
                id="male"
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className={`flex items-center gap-2`}>
              <input
                value={editUser?.gender}
                onChange={(e) =>
                  setEditUser({
                    name: e.target.textContent.toLocaleLowerCase(),
                  })
                }
                className={``}
                type="radio"
                name="gender"
                id="female"
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>
        <div className="flex">
          <label className="w-[30%]">Address</label>
          <textarea
            value={editUser?.address}
            onChange={(e) => setEditUser({ address: e.target.value })}
            rows={3}
            placeholder="Enter your address"
            className={`w-[70%] bg-[#202124] outline-none border rounded px-5 py-2`}
            type="text"
            name=""
            id=""
          />
        </div>
      </section>
    </div>
  );
}
