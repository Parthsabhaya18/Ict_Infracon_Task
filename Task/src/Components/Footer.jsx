import React from "react";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-800 text-gray-100 py-8 px-4 md:px-8" id="aboutUs">
      <div className=" mx-auto  grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold text-teal-400">Excise Department</h2>
          <p className="text-gray-400">
            Excise Department
            <br />
            State of Karnataka
          </p>
          <p className="mt-4 text-gray-400">Phone: +919898989897</p>
          <p className="text-gray-400">Email: support@excise.com</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-teal-400">Useful Links</h3>
          <ul className="mt-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-teal-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-teal-200">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-teal-200">
                Services
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-teal-400">Our Services</h3>
          <ul className="mt-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-teal-200">
                Manufacturer Related
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-teal-200">
                Export Related
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-teal-200">
                Retail Related
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-teal-200">
                Import Related
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-teal-200">
                NDPS Related
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-teal-400">
            Our Social Networks
          </h3>
          <div className="flex space-x-4 mt-2">
            <AiFillTwitterSquare className="text-gray-400 hover:text-teal-200  h-5 w-5" />
            <FaSquareFacebook className="text-gray-400 hover:text-teal-200  h-5 w-5" />
            <FaSquareInstagram className="text-gray-400 hover:text-teal-200  h-5 w-5" />
            <FaSkype className="text-gray-400 hover:text-teal-200  h-5 w-5" />
            <FaLinkedin className="text-gray-400 hover:text-teal-200  h-5 w-5" />
          </div>
        </div>
      </div>
    </footer>
    <div className="flex items-center justify-end py-5 px-4 md:px-8 bg-gradient-to-r from-teal-100 to-blue-200">
  <p className="text-gray-800 cursor-pointer">
    Designed & Developed by
    <a href="#" className="text-blue-600 hover:underline">
     <span> ICT Infracon</span>
    </a>
  </p>
</div>


      </>
  );
};

export default Footer;
