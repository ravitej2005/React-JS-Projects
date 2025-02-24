import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Install lucide-react for icons

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-green-900 px-6 py-4 shadow-lg rounded-b-2xl relative z-50">
      {/* Navbar Container */}
      <div className="flex items-center justify-between">
        
        {/* Left Section - Logo & Hamburger (Only on Small Screens) */}
        <div className="flex items-center gap-3">
          {/* Hamburger Button - Only visible on small screens */}
          <button 
            className="sm:block md:hidden text-white focus:outline-none transition-transform duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} className="transform rotate-90" /> : <Menu size={28} />}
          </button>

          {/* Logo */}
          <div className="text-white text-3xl font-bold tracking-wide">
            Quick<span className="text-amber-400">Note</span>
          </div>
        </div>

        {/* Navigation Links */}
        <ul 
          className={`sm:hidden absolute top-16 left-0 w-full bg-green-900 text-lg font-medium transition-all duration-300 ease-in-out 
          ${isOpen ? "opacity-100 visible py-4" : "opacity-0 invisible"}`}
        >
          {[
            { path: "/home", name: "Home" },
            { path: "/addnotes", name: "Add Task" },
          ].map((link) => (
            <li key={link.name} onClick={closeMenu} className="text-center">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition-all duration-300 
                  ${isActive ? "bg-amber-500 text-white shadow-md" : "text-gray-200 hover:bg-green-700 hover:text-white"}`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Nav Links - Left aligned for md+ screens */}
        <ul className="hidden sm:flex md:flex gap-6 text-lg font-medium">
          {[
            { path: "/home", name: "Home" },
            { path: "/addnotes", name: "Add Task" },
          ].map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-all duration-300 
                  ${isActive ? "bg-amber-500 text-white shadow-md" : "text-gray-200 hover:bg-green-700 hover:text-white"}`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
