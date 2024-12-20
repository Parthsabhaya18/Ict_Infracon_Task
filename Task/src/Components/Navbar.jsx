import React, { useState } from "react";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className=" bg-blue-700 text-white ">
      <div className=" mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#home" className="flex items-center gap-2 hover:text-gray-300" >
            <FaHome size={20} />
            <h1 className="font-medium text-lg">Home</h1>
          </a>
          <a href="#services" className="flex items-center gap-2 hover:text-gray-300">
            <MdMiscellaneousServices size={20} />
            <h1 className="font-medium text-lg">Services</h1>
          </a>
          <a href="#dashboard" className="flex items-center gap-2 hover:text-gray-300">
            <RiDashboardFill size={20} />
            <h1 className="font-medium text-lg">Dashboard</h1>
          </a>
          <a href="#aboutUs" className="flex items-center gap-2 hover:text-gray-300">
            <IoPeopleSharp size={20} />
            <h1 className="font-medium text-lg">About Us</h1>
          </a>
        </div>
        <div className="hidden sm:block">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
            Register/Login
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full z-10 w-64 bg-blue-700 p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <button onClick={toggleMenu} className="text-white mb-4">
          <FaTimes size={24} />
        </button>
        <a href="#head" className="block px-4 py-2 hover:text-gray-300" onClick={closeMenu}>
          Home
        </a>
        <a href="#service" className="block px-4 py-2 hover:text-gray-300" onClick={closeMenu}>
          Services
        </a>
        <a href="#dashboard" className="block px-4 py-2 hover:text-gray-300" onClick={closeMenu}>
          Dashboard
        </a>
        <a href="#aboutUs" className="block px-4 py-2 hover:text-gray-300" onClick={closeMenu}>
          About Us
        </a>
        <input
          type="text"
          placeholder="Search"
          className="block w-full px-4 py-2 mt-2 rounded-md text-black focus:outline-none focus:ring focus:border-blue-300"
        />
        <button className="block w-full bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
          Register/Login
        </button>
      </div>
    </nav>
  );
}
