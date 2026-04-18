import React, { useEffect, useState } from "react";
import logo from "/logo.png";
import { FaRegUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import Modal from "./Modal";
import Profile from "./Profile";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const { user } = useAuth();
  const [cart] = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li>
        <NavLink to="/" className="hover:text-green">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/menu" className="hover:text-green">
          Menu
        </NavLink>
      </li>

      <li>
        <NavLink to="/orders" className="hover:text-green">
          Orders
        </NavLink>
      </li>

      <li>
        <a href="#offers" className="hover:text-green">
          Offers
        </a>
      </li>

      <li>
        <a href="#services" className="hover:text-green">
          Services
        </a>
      </li>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`max-w-screen-2xl container mx-auto transition-all duration-300 ${
          isSticky ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="navbar xl:px-24 px-4">
          {/* Left */}
          <div className="navbar-start">
            {/* Mobile Menu */}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white rounded-box w-64 space-y-2"
              >
                {navItems}
              </ul>
            </div>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="QuickBite Logo" className="w-14 h-14" />
              <span className="text-2xl font-bold hidden sm:block text-green">
                QuickBite
              </span>
            </Link>
          </div>

          {/* Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">{navItems}</ul>
          </div>

          {/* Right */}
          <div className="navbar-end gap-2">
            {/* Search */}
            <button className="btn btn-ghost btn-circle hidden lg:flex">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Cart */}
            <Link to="/cart">
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5"
                    />
                  </svg>

                  <span className="badge badge-sm indicator-item">
                    {cart.length || 0}
                  </span>
                </div>
              </button>
            </Link>

            {/* Auth */}
            {user ? (
              <Profile user={user} />
            ) : (
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="btn rounded-full px-6 bg-green text-white hover:bg-green-700 border-none"
              >
                <FaRegUser />
                Login
              </button>
            )}

            <Modal />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
