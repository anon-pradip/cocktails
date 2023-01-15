import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col mt-7 space-y-7 items-center">
      <h1 className="uppercase text-black font-extrabold tracking-[5px] ">
        Oops! It's a dead end
      </h1>
      <Link
        to="/"
        className=" tracking-[5px] text-xs uppercase bg-green-700 rounded-sm px-2 py-2 text-white hover:bg-green-400 hover:text-green-800"
      >
        Back Home
      </Link>
    </div>
  );
};

export default Error;
