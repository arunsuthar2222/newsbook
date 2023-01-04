import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  const handleMenu = () => {
    document.getElementById("menu").classList.toggle("hidden");
  };
  return (
    <div className="sticky top-0 z-20 bg-purple-600 shadow-lg">
      <div className="container mx-auto">
      <div className="min-h-[60px] flex justify-between items-center px-3 md:px-0">
        <div className="w-24">
          <h2 className="text-2xl cursor-pointer text-2xl text-white font-bold"><NavLink to='/'>News<span className=" text-[#333]">Book</span></NavLink></h2>
        </div>
        <div className="hidden lg:block">
          <ul className="flex text-white poppins space-x-2.5 font-medium">
            <li className="hover:text-gray-100">
              <NavLink to="/">All</NavLink>
            </li>
            <li className="hover:text-gray-100">
              <NavLink to="/business">Business</NavLink>
            </li>
            <li className="hover:text-gray-100">
              <NavLink to="/entertainment">Entertainment</NavLink>
            </li>
            <li className="hover:text-gray-100">
              <NavLink to="/health">Health</NavLink>
            </li>
            <li className="hover:text-gray-100">
              <NavLink to="/science">Science</NavLink>
            </li>
            <li className="hover:text-gray-100">
              <NavLink to="/sports">Sports</NavLink>
            </li>
            <li className="hover:text-gray-100">
              <NavLink to="/technology">Technology</NavLink>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-lg text-gray-200   focus:outline-none   dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={handleMenu}
          >
            <svg
              class="w-10 h-10"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div id="menu" className={`font-bold shadow-2xl hidden border-t-purple-700 border-t-[2px] bg-purple-600 py-1`}>
        <ul className="font-semibold text-white">
          <li>
            <NavLink
              className="p-2.5 px-4 cusor-pointer hover:text-gray-100 hover:bg-purple-700 block"
              to="/"
            >
              All
            </NavLink>
          </li>
          <li className="hover:text-gray-100">
            <NavLink
              className="p-2.5 px-4 cusor-pointer hover:text-gray-100 hover:bg-purple-700 block"
              to="/business"
            >
              Business
            </NavLink>
          </li>
          <li>
            <NavLink
              className="p-2.5 px-4 cusor-pointer hover:text-gray-100 hover:bg-purple-700 block"
              to="/entertainment"
            >
              Entertainment
            </NavLink>
          </li>
          <li>
            <NavLink
              className="p-2.5 px-4 cusor-pointer hover:text-gray-100 hover:bg-purple-700 block"
              to="/health"
            >
              Health
            </NavLink>
          </li>
          <li>
            <NavLink
              className="p-2.5 px-4 cusor-pointer hover:text-gray-100 hover:bg-purple-700 block"
              to="/science"
            >
              Science
            </NavLink>
          </li>
          <li>
            <NavLink
              className="p-2.5 px-4 cusor-pointer hover:text-gray-100 hover:bg-purple-700 block"
              to="/sports"
            >
              Sports
            </NavLink>
          </li>
          <li>
            <NavLink
              className="p-2.5 px-4 cusor-pointer hover:text-gray-100 hover:bg-purple-700 block"
              to="/technology"
            >
              Technology
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    </div> 
  );
}

export default Navbar;
