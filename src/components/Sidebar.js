import React from "react";
import bevel from "../images/bevel-plexus.png";
import { Link } from "react-router-dom";
import accountimg from "../images/accou-icon.svg";
import recipi from "../images/recipi-icon.svg";
import dash from "../images/dash-icon.svg";
import paym from "../images/pay-icon.svg";
import transact from "../images/transact-icon.svg";

const Sidebar = () => {
  return (
    <section className="flex flex-col min-w-[250px] py-8 px-8 bg-white text-gray-700 text-sm border-r ">
      <img src={bevel} alt="" className="w-40" />
      <div className="capitalize flex flex-col gap-y-9 flex-1 mt-24">
        <Link to="/">
          <div className="flex gap-x-2 hover:font-semibold hover:text-blue-600">
            <img src={dash} alt="" />
            <p>dashboard</p>
          </div>
        </Link>
        <Link to="/payment">
          <div className="flex gap-x-2 hover:font-semibold hover:text-blue-600">
            <img src={paym} alt="" />
            <p>make payment</p>
          </div>
        </Link>
        <Link to="/transactions">
          <div className="flex gap-x-2 hover:font-semibold hover:text-blue-600">
            <img src={transact} alt="" />
            <p>transaction history</p>
          </div>
        </Link>
        <Link to="/recipients">
          <div className="flex gap-x-2 hover:font-semibold hover:text-blue-600">
            <img src={recipi} alt="" />
            <p>recipients</p>
          </div>
        </Link>
        <Link to="/accounts">
          <div className="flex gap-x-2 hover:font-semibold hover:text-blue-600">
            <img src={accountimg} alt="" />
            <p>my account</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Sidebar;
