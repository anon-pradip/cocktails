import React from "react";
import { NavLink } from "react-router-dom";

let activeStyle = {
  color: "blue"
};

let activeStyleAbout = {
  color: "green"
};

const Navbar = () => {
  return (
    <nav className="flex space-x-4 text-lg bg-white justify-between px-4 pr-10 py-5 shadow-xl border-b-4 border-b-slate-400">
      <div className="pl-4 text-xl font-bold">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          TheCocktailDB
        </NavLink>
      </div>
      <div className=" space-x-4">
        <NavLink
          to="/"
          className="font-medium"
          style={({ isActive }) => (isActive ? activeStyleAbout : undefined)}
        >
          Home
        </NavLink>

        <NavLink
          to="about"
          className="font-medium"
          style={({ isActive }) => (isActive ? activeStyleAbout : undefined)}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
