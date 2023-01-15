import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, alcohol, glass, image }) => {
  return (
    <div className="flex flex-col justify-center items-center p-2 rounded-md bg-slate-300 m-2">
      <img src={image} alt={name} className="h-52 w-52 rounded-md" />
      <h1 className="font-bold text-lg">{name}</h1>
      <h3 className="font-semibold">{glass}</h3>
      <h3>{alcohol}</h3>
      <Link
        to={`/cocktail/${id}`}
        className="bg-green-500 rounded-sm px-2 py-1 tracking-widest mt-2"
      >
        Details
      </Link>
    </div>
  );
};

export default Cocktail;
