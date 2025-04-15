import React from 'react'

const Navigation = () => {
  return (
    <nav className=" w-full lg:px-[120px] px-10 py-5 border-[#000000] border-b-[1px]">
    <div className="flex flex-wrap items-center justify-between mx-auto ">
      <a
        href="#"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img src="/images/logo.png" className="h-8" alt="Logo" />
      </a>
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className="hidden w-full md:block md:w-auto"
        id="navbar-dropdown"
      >
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
          <li>
            <a
              href="#"
              className="block py-2 px-3 md:bg-transparent md:p-0"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 md:bg-transparent md:p-0"
              aria-current="page"
            >
              About Us
            </a>
          </li>
          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              className="flex items-center justify-between w-full py-2 px-3 md:p-0 md:w-auto"
            >
              Service
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdownNavbar"
              className="z-10 hidden font-normal shadow-sm w-44"
            >
              <ul
                className="py-2 text-sm text-gray-700"
                aria-labelledby="dropdownLargeButton"
              >
                <li>
                  <a href="#" className="block px-4 py-2">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2">
                    Earnings
                  </a>
                </li>
              </ul>
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Sign out
                </a>
              </div>
            </div>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3  rounded-sm md:hover:bg-transparent md:p-0"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3  rounded-sm md:hover:bg-transparent md:p-0"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3  rounded-sm md:hover:bg-transparent md:p-0"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navigation
