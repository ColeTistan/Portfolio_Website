import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-base-100 px-14 shadow-md mb-10 z-[1] sticky top-0">
      <div className="navbar-start">
        <a className="btn btn-ghost rounded-md text-xl">Cole Tistan</a>
      </div>
      <div className="navbar-end md:gap-x-6 flex flex-end">
        <div className="dropdown dropdown-end">
          <button type="submit" className="btn btn-square btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <label className="flex cursor-pointer gap-2">
                <span className="label-text">Light</span>
                <input
                  type="checkbox"
                  value="business"
                  className="toggle rounded-full theme-controller"
                />
                <span className="label-text">Dark</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
