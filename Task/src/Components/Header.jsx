import React from "react";
import task1 from "../../public/task1.png";
import { FaTwitter } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";

export default function Header() {
  return (
    <>
      <div className="px-4 md:px-8" id="head">
        <img src={task1} alt="Logo" />
      </div>
      <div className=" flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-8 bg-gray-800">
        <div className="flex items-center space-x-6 text-white mb-4 md:mb-0">
          <FaTwitter size={20} /> <SiFacebook size={20} />
          <PiInstagramLogoFill size={20} /> <FaLinkedinIn size={20} />
        </div>
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-5 text-yellow-300">
          <a
            href="#"
            className="flex items-center gap-2 hover:underline mb-4 md:mb-0"
          >
            <MdEmail size={20} /> support@excise.com
          </a>
          <a href="#" className="flex items-center gap-1 hover:underline">
            <MdCall size={20} /> +919889989897
          </a>
        </div>
      </div>
    </>
  );
}
