import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-gray-600 shadow-md">
      <ul className="flex justify-around items-center p-5">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#ccfd06] font-extrabold" : ""
            }
            to="/"
          >
            <img
              src={logo}
              alt=""
              className="invert w-10"
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#ccfd06] font-bold" : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#ccfd06] font-bold" : ""
            }
            to="/reservation"
          >
            Registration
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#ccfd06] font-bold" : ""
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#ccfd06] font-bold" : ""
            }
            to="/admin"
          >
            Admin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
