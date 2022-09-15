import React, { useState } from "react";
import avatar from "../images/avatar.svg";
import { FaRegBell } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isHoveringUser, setIsHoveringUser] = useState(false);
  const [messagehover, setMessageHover] = useState(false);

  const handleOver = () => {
    setMessageHover(true);
  };

  const handleOut = () => {
    setMessageHover(false);
  };

  const handleMouseOver = () => {
    setIsHoveringUser(true);
  };

  const handleMouseOut = () => {
    setIsHoveringUser(false);
  };

  return (
    <div className="flex gap-x-6 items-end">
      <div onMouseOver={handleOver} onMouseOut={handleOut}>
        <FaRegBell className="relative inline-block mt-1" />
        {messagehover && (
          <div className="absolute text-gray-600 right-52 z-20 mt-2 overflow-hidden bg-white rounded-md shadow-lg w-80 dark:bg-gray-800">
            <ul className="p-5 text-xs">
              <li className="mb-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit nostrud amet.
              </li>
              <hr />
              <li className="mb-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit
              </li>
              <hr />
              <li className="mb-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit
              </li>
              <hr />
              <li className="mb-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit
              </li>
              <hr />
              <li className="mb-2">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit
              </li>
            </ul>
          </div>
        )}
      </div>
      <div
        className="gap-x-3 relative inline-block"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="flex">
          <div className="flex gap-x-2 text-sm">
            <img src={avatar} alt="" />
            <p>Jordyn Workman</p>
          </div>
          <MdArrowDropDown className="mt-1" />
        </div>

        {isHoveringUser && (
          <div className="bg-white text-gray-600 absolute right-0 z-20 mt-2 px-4 py-5 text-sm rounded-lg shadow-md ">
            <ul className="capitalize flex flex-col gap-y-3">
              <Link to="/accounts">View my account</Link>
              <Link to="/transactions" className="mb-4">
                transaction history
              </Link>
              <hr className="h-3 " />
              <li>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
