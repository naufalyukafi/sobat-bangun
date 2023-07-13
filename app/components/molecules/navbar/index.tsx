"use client";
import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

interface NavItem {
  text: string;
  href: string;
  dropdown?: NavItem[];
}

const Navbar: React.FC = () => {
  const navItems: NavItem[] = [
    {
      text: "Tentang Kami",
      href: "#",
      dropdown: [
        { text: "Tim Kami", href: "#" },
        { text: "Misi dan Visi", href: "#" },
        { text: "Testimoni", href: "#" },
      ],
    },
    {
      text: "Produk dan Layanan",
      href: "#",
      dropdown: [],
    },
    { text: "Blog", href: "#" },
    { text: "FAQ", href: "#" },
  ];

  const [openSidebar, setOpenSidebar] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleSidebarToggle = () => {
    setOpenSidebar(!openSidebar);
  };

  const handleDropdownClick = (index: number) => {
    setOpenDropdown((prevState) => (prevState === index ? null : index));
  };

  return (
    <nav className="bg-white w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-10">
        <a href="/" className="flex items-center">
          <img
            src="./images/logo.png"
            className="h-8 mr-3 object-cover"
            alt="Sobat Bangun"
          />
        </a>
        <div className="flex md:order-2 gap-3">
          <div className="hidden md:block">
            <button
              type="button"
              className={`text-black bg-white font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0  dark:hover:outline-primary-700`}
            >
              Daftar
            </button>
            <button
              type="button"
              className={`text-white bg-primary-700 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0  dark:hover:bg-primary-700`}
            >
              Masuk
            </button>
          </div>
          <button
            onClick={handleSidebarToggle}
            type="button"
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
            aria-controls="navbar-sticky"
            aria-expanded={openSidebar}
          >
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
        </div>
        <div
          className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                <a
                  href={item.href}
                  className={`block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 md:dark:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 hover:text-primary-700`}
                  onClick={() => handleDropdownClick(index)}
                >
                  {item.text}
                  {item.dropdown && item.dropdown.length > 0 && (
                    <span className="ml-1">
                      {index === openDropdown ? (
                        <FaAngleUp className="inline-block" />
                      ) : (
                        <FaAngleDown className="inline-block" />
                      )}
                    </span>
                  )}
                </a>
                {item.dropdown && item.dropdown.length > 0 && (
                  <ul
                    className={`absolute z-10 left-0 mt-2 w-48 bg-white rounded-lg shadow-lg ${
                      index === openDropdown ? "block" : "hidden"
                    }`}
                  >
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <li key={dropdownIndex}>
                        <a
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {dropdownItem.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 ease-in-out ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full py-6 px-4 bg-gray-50">
          <h3 className="text-xl font-semibold mb-4">Sidebar</h3>
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
