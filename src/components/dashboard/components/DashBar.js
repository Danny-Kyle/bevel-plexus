import React from "react";
import Navbar from "../../Navbar";
import { MdArrowDropDown } from "react-icons/md";
import cadflag from "../../../images/canada-flag.svg";
import brlflag from "../../../images/brazil-flag.svg";

export const Box = ({ placeholder, small, src, currency }) => {
  return (
    <section className="flex flex-row justify-between rounded-lg items-center bg-white h-16 shadow-md px-2 py-3 w-[100%] text-black">
      <div className="flex flex-col">
        <small className="text-blue-400 capitalize">{small}</small>
        <input type="text" placeholder={placeholder} className="rounded-full border border-transparent p-2" />
      </div>
      <hr className="bg-black h-12 w-[1px]" />
      <p className="flex flex-row gap-x-1">
        <img src={src} alt="" />
        {currency}
        <span>
          <MdArrowDropDown />
        </span>
      </p>
    </section>
  );
};

const DashBar = () => {
  return (
    <section className="flex flex-col min-w-[370px] bg-gradient-to-b from-blue-400 to-blue-800 h-full py-4 px-8 border-l ">
      <nav className="flex flex-col items-end text-white">
        <Navbar />
      </nav>
      <section className="flex flex-col gap-y-4 my-9 text-white">
        <div className="flex flex-col gap-y-3">
          <h3 className="text-lg font-semibold">Quick Currency Converter</h3>
          <Box
            placeholder={1000}
            small="You send"
            src={cadflag}
            currency="CAD"
          />
          <div className="h-[140px] ml-[35px] border-l-white flex flex-col justify-around text-sm">
            <p className="flex items-center relative -left-[11px] m-0  text-white font-[13px] font-medium">
              <span className="h-[20px] w-[20px] pr-[0.03rem] bg-white flex justify-center items-center rounded-full text-[#015eff] font-bold mr-[10px]">
                <small>-</small>
              </span>
              20.20
                CAD
                <span className="opacity-[0.7] ml-[10px] font-normal">Fee (including IOF)</span>
            </p>
            <p className="flex items-center relative -left-[11px] m-0  text-white font-[13px] font-medium">
              <span className="h-[20px] w-[20px] pr-[0.03rem] bg-white flex justify-center items-center rounded-full text-[#015eff] font-bold mr-[10px]">
                <small>=</small>
              </span>
              970.80 
                CAD
                <span className="opacity-[0.7] ml-[10px] font-normal">Amount we'll convert</span>
            </p>
            <p className="flex items-center relative -left-[11px] m-0  text-white font-[13px] font-medium">
              <span className="h-[20px] w-[20px] pr-[0.03rem] bg-white flex justify-center items-center rounded-full text-[#015eff] font-bold mr-[10px]">
                <small>÷</small>
              </span>
              2,27361
                <span className="opacity-[0.7] ml-[10px] font-normal">Commercial rate (144 hrs)</span>
            </p>
          </div>
          <Box
            placeholder={3900}
            small="They receive"
            src={brlflag}
            currency="BRL"
          />
        </div>
        <p className="text-gray-300 text-sm">
          This page is refreshed every 60 seconds{" "}
        </p>
        <button className="py-5 font-semibold px-3 bg-green-400 rounded-md">
          Send this Amount
        </button>
        <section className="bg-blue-900"></section>
      </section>
    </section>
  );
};

export default DashBar;
