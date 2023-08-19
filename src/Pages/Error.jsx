import React from "react";
import { Link, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const Error = () => {
    const token=Cookies.get("token");
    

  return (
    <div>
      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center  lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            404 NOT FOUND !
          </h1>

          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link to={token? "/" :"/login"}   className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg bg-primary-700 hover:bg-gray-200  ">
              Go Back
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
