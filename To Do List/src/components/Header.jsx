import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="flex justify-between items-center bg-green-900 px-10 py-4 shadow-lg rounded-b-2xl">
      
      <div className="text-white text-3xl font-bold tracking-wide">
        Quick<span className="text-amber-400">Note</span>
      </div>

      <ul className="flex gap-6 text-lg font-medium">
        {[
          { path: "/home", name: "Home" },
          { path: "/addnotes", name: "Add Task" },
        ].map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-amber-500 text-white shadow-md"
                    : "text-gray-200 hover:bg-green-700 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
