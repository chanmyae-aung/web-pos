import React from 'react'

export default function StepOne() {
  return (
    <div>
        <section
              className={`flex flex-col gap-5 bg-[#161618] p-10 w-full`}
            >
              <div className="flex">
                <label className="w-[30%]">Name</label>
                <input
                  placeholder="Enter your name"
                  className={`w-[70%] outline-none border rounded px-5 py-2`}
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex">
                <label className="w-[30%]">Phone</label>
                <input
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
                  placeholder="Enter your birth date"
                  className={`w-[70%] outline-none border rounded px-5 py-2`}
                  type="phone"
                  name=""
                  id=""
                />
              </div>
              <div className="flex">
                <label className="w-[30%]">Gender</label>
                <div className={`w-[70%] flex items-center gap-10`}>
                  <div className={`flex items-center gap-2`}>
                    <input
                      className={``}
                      type="radio"
                      name="gender"
                      id="male"
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className={`flex items-center gap-2`}>
                    <input
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
                  rows={3}
                  placeholder="Enter your address"
                  className={`w-[70%] bg-[#202124] outline-none border rounded px-5 py-2`}
                  type="phone"
                  name=""
                  id=""
                />
              </div>
            </section>
    </div>
  )
}
