import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  const navItems = [
    { label: "Giới thiệu", path: "/" },
    { label: "Sơ yếu lý lịch", path: "/resume" },
    { label: "Dự án", path: "/projects" },
    { label: "Liên hệ", path: "/contact" }
  ];

  return (
    <nav className="fixed lg:absolute top-0 right-0 left-0 lg:left-auto z-40 bg-zinc-900/90 lg:bg-zinc-900/80 border-b lg:border border-zinc-800 lg:rounded-bl-2xl lg:rounded-tr-3xl px-6 py-3 backdrop-blur-md">
      <ul className="flex items-center justify-around lg:justify-end gap-2 sm:gap-6">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `text-xs sm:text-sm font-medium py-1.5 px-3 rounded-lg transition-colors ${
                  isActive
                    ? "text-amber-400 font-semibold bg-amber-400/10"
                    : "text-zinc-400 hover:text-zinc-200"
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
