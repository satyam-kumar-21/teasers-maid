import React, { useState } from "react";
import { Link } from "react-router-dom";  // Ensure you're using the correct routing library
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoLogoApple } from "react-icons/io";
import clsx from "clsx";  // For conditional class names

export const Adminsidenav: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-64 h-full bg-gray-800 text-white p-4 fixed top-0 left-0">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <IoLogoApple size={24} />
        <p className="font-bold text-xl">Admin Panel</p>
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col gap-4">
        {/* About Link */}
        <div className="relative">
          <Link
            to="/about"
            className="text-white hover:text-gray-300 flex items-center"
          >
            <span>About</span>
          </Link>
        </div>

        {/* Services Link with Dropdown */}
        <div className="relative">
          <Link
            to="/services"
            className="text-white hover:text-gray-300 flex items-center"
            onClick={toggleDropdown}
          >
            <span>Services</span>
            <MdKeyboardArrowDown
              className={clsx(
                "ml-2 transition-transform",
                isDropdownOpen ? "rotate-180" : ""
              )}
            />
          </Link>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
              <ul className="flex flex-col">
                <li>
                  <Link
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    to="/services/service1"
                  >
                    Service 1
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    to="/services/service2"
                  >
                    Service 2
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* New Updates Link */}
        <div className="relative">
          <Link
            to="/new-updates"
            className="text-white hover:text-gray-300 flex items-center"
          >
            <span>New Updates</span>
          </Link>
        </div>

        {/* Gallery Link */}
        <div className="relative">
          <Link
            to="/gallery"
            className="text-white hover:text-gray-300 flex items-center"
          >
            <span>Gallery</span>
          </Link>
        </div>

        {/* Blogs Link */}
        <div className="relative">
          <Link
            to="/blogs"
            className="text-white hover:text-gray-300 flex items-center"
          >
            <span>Blogs</span>
          </Link>
        </div>

        {/* Contact Link */}
        <div className="relative">
          <Link
            to="/contact"
            className="text-white hover:text-gray-300 flex items-center"
          >
            <span>Contact</span>
          </Link>
        </div>
      </div>

      {/* Logout Button */}
      <div className="flex flex-col mt-auto">
        <Link
          to="/logout"
          className="text-sm font-normal text-white bg-black dark:bg-white dark:text-black mt-4 p-2 rounded"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};
