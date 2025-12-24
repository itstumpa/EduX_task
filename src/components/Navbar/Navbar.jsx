import { NavLink, useLocation } from "react-router";
import { useEffect, useState } from "react";
import "../../App.css";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    if (isHome) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHome]);

  const navbarClasses = `navbar px-4 md:px-8 lg:px-20 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isHome
      ? scrolled
        ? 'bg-slate-900/80 backdrop-blur-lg text-white shadow-md'
        : 'bg-slate-900 text-white'
      : 'bg-slate-900/80 backdrop-blur-lg text-white shadow-md'
  }`;

  return (
    <div className={navbarClasses}>
      
      {/* Navbar Start - Logo and Mobile Menu */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-sm lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box text-black z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition-colors duration-300 hover:text-indigo-400 ${
                    isActive ? "text-indigo-400 font-bold" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-courses"
                className={({ isActive }) =>
                  `transition-colors duration-300 hover:text-indigo-400 ${
                    isActive ? "text-indigo-400 font-bold" : ""
                  }`
                }
              >
                All Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-colors duration-300 hover:text-indigo-400 ${
                    isActive ? "text-indigo-400 font-bold" : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 ml-2">
          <img src="/logo.png" alt="EduX Logo" className="h-6 w-6 md:h-8 md:w-8" />
          <span className="text-lg md:text-xl font-bold">EduX</span>
        </NavLink>
      </div>

      {/* Navbar Center - Desktop Menu */}
      <div className="navbar-center  hidden md:flex">
        <ul className="menu menu-horizontal px-1 space-x-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors duration-300 hover:text-indigo-400 ${
                  isActive ? "text-indigo-400 font-bold" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-courses"
              className={({ isActive }) =>
                `transition-colors duration-300 hover:text-indigo-400 ${
                  isActive ? "text-indigo-400 font-bold" : ""
                }`
              }
            >
              All Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-colors duration-300 hover:text-indigo-400 ${
                  isActive ? "text-indigo-400 font-bold" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <NavLink
          to="/login"
          className="px-4 py-2 text-sm primary-btn transition-all duration-300"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;