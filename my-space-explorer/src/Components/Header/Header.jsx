import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <div className='flex justify-start items-center flex-wrap text-white shadow-md mb-4'>
      <div className='flex justify-start items-center gap-4 grow'>
        <img src="https://i.postimg.cc/4xbwtFM4/Logo.png" alt="logo" className='h-18 filter invert brightness-125' />
        <h2 className='font-extrabold text-2xl px-4 text-center'>Let&apos;s Explore The Space..!!</h2>
      </div>
      <nav className='flex justify-center items-center mr-20 text-md font-bold ml-3'>
        <ul className='flex gap-10'>
          <li>
            <NavLink
              to='/planets'
              className={({ isActive }) =>
                `${isActive ? "text-amber-500" : "text-white"}`
              }
            >
              Planets
            </NavLink>
          </li>
          <li>
            <NavLink to='/moons' className={({ isActive }) => `${isActive ? "text-amber-500" : "text-white"}`}>Moons</NavLink>
          </li>
          <li>
            <NavLink to='/otherBodies' className={({ isActive }) => `${isActive ? "text-amber-500" : "text-white"}`}>Other Bodies</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
