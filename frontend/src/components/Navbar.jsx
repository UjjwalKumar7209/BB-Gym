import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Registration", path: "/reservation" },
    { name: "About", path: "/about" },
    { name: "Admin", path: "/admin" },
  ];

  return (
    <nav className="fixed top-6 left-0 w-full z-50 px-8">
      <div className="relative flex items-center justify-center">

        {/* LOGO */}
        <div className="absolute left-0 flex items-center">
          <NavLink to="/" className="group">
            <img
              src={logo}
              alt="BB Gym"
              className="
                w-12 h-12 invert
                transition-transform duration-300
                group-hover:scale-110
              "
            />
          </NavLink>
        </div>

        {/* NAV BAR */}
        <div
          className="
            flex items-center gap-12
            px-10 py-4
            bg-black
            border border-white/10
            shadow-[0_10px_40px_rgba(0,0,0,0.8)]
          "
        >
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `
                  relative text-xs font-extrabold uppercase tracking-widest
                  transition-colors duration-300
                  ${
                    isActive
                      ? "text-[#ccfd06]"
                      : "text-white/70 hover:text-[#ccfd06]"
                  }

                  after:content-['']
                  after:absolute after:left-0 after:-bottom-2
                  after:h-[2px] after:w-full
                  after:bg-[#ccfd06]
                  after:scale-x-0
                  after:origin-left
                  after:transition-transform after:duration-300
                  hover:after:scale-x-100
                  ${isActive ? "after:scale-x-100" : ""}
                `
              }
            >
              {item.name}

              {/* ACTIVE DOT */}
              <span
                className={`
                  absolute -top-2 left-1/2 -translate-x-1/2
                  h-1.5 w-1.5 rounded-full bg-[#ccfd06]
                  transition-opacity duration-300
                  ${item.path === location.pathname ? "opacity-100" : "opacity-0"}
                `}
              />
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
