import React from "react";
import bars from "./assets/bars.svg";
import profile from "./assets/profile.svg";

function Navbar() {
  return (
    <nav className="navbar py-4 px-0">
      <div className="navbar-start">
        <h1 className="text-3xl font-bold">Todo</h1>
      </div>
      <ul className="navbar-center hidden md:flex md:items-center md:space-x-4">
        <li>
          <a href="#" className="hover:opacity-65">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:opacity-65">
            Shop
          </a>
        </li>
        <li>
          <a href="#" className="hover:opacity-65">
            Contact
          </a>
        </li>
      </ul>
      <div className="navbar-end justify-end">
        <div className="dropdown md:hidden">
          <div
            tabIndex="0"
            role="button"
            className="btn btn-ghost btn-circle md:hidden"
          >
            <img src={bars} alt="bars" />
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-6 w-52 p-2 shadow -ml-[160px]"
          >
            <li>
              <a href="#" className="hover:opacity-65">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-65">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:opacity-65">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <a href="#" className="hover:opacity-65 hidden md:inline">
          <img src={profile} alt="profile" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
