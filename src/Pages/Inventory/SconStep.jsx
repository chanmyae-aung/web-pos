import React from 'react'
import { BiChevronDown } from 'react-icons/bi';
const SconStep = () => {
  return (
    <div>
    <section
          className={`flex flex-col gap-5 bg-[#161618] p-10 w-full`}
        >
        
          <div className="flex">
            <label className="w-[30%]">actual-price</label>
            <input
              placeholder="Enter actual price of the product"
              className={`w-[70%] outline-none border rounded px-5 py-2`}
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex">
            <label className="w-[30%]">sale-price</label>
            <input
              placeholder="Enter the price that you want to sell "
              className={`w-[70%] outline-none border rounded px-5 py-2`}
              type="text"
              name=""
              id=""
            />
          </div>
        
        </section>
</div>
  )
}

export default SconStep
