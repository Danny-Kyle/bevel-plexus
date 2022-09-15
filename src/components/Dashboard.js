import React, { useState } from "react";
import avatar from "../images/avatar.svg";
import wallet from "../images/wallet-icon-alt.svg";
import transaction from "../images/transaction-icon-alt.svg";
import Sidebar from "./Sidebar";
import cadflag from "../images/canada-flag.svg";
import brlflag from "../images/brazil-flag.svg";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import DashBar from "./dashboard/components/DashBar";

const Dashboard = () => {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  return (
    <main className="flex gap-x-5 relative justify-between">
      <Sidebar />
      <div className="flex flex-col mt-20">
        <h3 className="mb-3 text-gray-400 uppercase">dashboard</h3>
        <section className="gap-y-9 flex flex-col">
          <section className="bg-white rounded-lg shadow-xl py-6 px-7">
            <h3 className="capitalize text-xl mb-4">send again</h3>
            <div className="py-3">
              <div className="flex gap-x-12">
                <div className="flex gap-x-6">
                  <img src={avatar} alt="" className="h-12" />
                  <article>
                    <p className="capitalize">phillip mango</p>
                    <p className="text-sm text-gray-400">
                      phillipmango@email.com
                    </p>
                  </article>
                </div>
                <div>
                  <div className="flex">
                    <div className="flex gap-x-2">
                      <p>{1000} CAD</p>
                    </div>
                    <IoMdArrowDropright className="mt-2 pb-1" />
                    <div className="flex gap-x-2">
                      <p>{3900} BRL</p>
                    </div>
                  </div>
                  <p className="capitalize text-sm text-gray-400">
                    last transaction
                  </p>
                </div>
                <button className="bg-blue-600 rounded-lg text-white text-sm px-9">
                  Send Money
                </button>
              </div>
            </div>
          </section>
          <section className="flex justify-between">
            <div className="bg-white w-[47.5%] flex mb-[2rem] border-2 border-transparent shadow-md py-[4%] px-[3%] gap-x-3 rounded-lg">
              <div className="bg-blue-200 border-r-[6px] p-[0.7rem] mr-20px relative">
                <img
                  src={wallet}
                  alt="credit"
                  className="relative mx-auto -top-[2px]"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="uppercase text-gray-400 tracking-wider m-0 leading-[133.8%]">
                  available credit
                </p>
                <p className="text-blue-600 leading-[125%] mx-[5px] my-[0] tracking-tight text-[1.2rem]">
                  13,750.00 NGL
                </p>
              </div>
            </div>
            <div className="bg-white w-[47.5%] flex mb-[2rem] border-2 border-transparent shadow-md py-[4%] px-[3%] gap-x-3 rounded-lg">
              <div className="bg-blue-200 border-r-[6px] p-[0.7rem] mr-20px relative">
                <img
                  src={transaction}
                  alt=""
                  className="relative mx-auto -top-[2px]"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="uppercase text-gray-400 tracking-wider m-0 leading-[133.8%]">
                  total transactions
                </p>
                <p className="text-blue-600 leading-[125%] mx-[5px] my-[0] tracking-tight text-[1.2rem]">
                  1,133,750.00 NGL
                </p>
              </div>
            </div>
          </section>
          <section className="bg-white w-[100%] flex flex-col">
            <div>
              <h2 className="capitalize text-[#4a4b65] text-[22px] leading-[125%] tracking-tight mb-[2rem] items-center flex">
                recent transactions
                <Link
                  to="/transactions"
                  className="text-blue-600 ml-[1rem] text-[15px] mt-[3px] font-normal"
                >
                  View All
                </Link>
              </h2>
            </div>
            <div className="flex justify-between">
              <div className="w-[100%] overflow-x-auto">
                <table className="w-[100%] border-separate border-spacing-y-[10px] border-spacing-x-0">
                  <colgroup>
                    <col className="w-[30%]" />
                    <col className="w-[30%]" />
                    <col className="w-[15%]" />
                    <col className="w-[25%]" />
                  </colgroup>
                  <thead>
                    <tr className="uppercase text-[#818299]">
                      <td className="pb-[5px]">Recipient</td>
                      <td className="pb-[5px]">transaction</td>
                      <td className="pb-[5px]">date</td>
                      <td className="pb-[5px]">status</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-transparent border-spacing-0">
                      <td className="border-left-[1px] rounded-md">
                        <div className="flex items-center">
                          <img src={avatar} alt="" className="mr-[1rem]" />
                          <p className="capitalize mb-0 font-medium text-base">
                            phillip mango
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="text-[#879dad] flex items-center">
                          <span> 1000 CAD </span>
                          <span>
                            <IoMdArrowDropright />
                          </span>
                          <span> 3900 BRL </span>
                        </div>
                      </td>
                      <td>
                        <div className="justify-between">
                          <span> 2/4/2020 </span>
                        </div>
                      </td>
                      <td>
                        <div className="justify-between flex items-center">
                          <span className="w-[65%]">COMPLETED </span>
                          <button className="p-[0.2rem] flex justify-center items-center bg-[#edf2fc] rounded-md">
                            <span
                              className={`cursor-pointer `}
                              onClick={() => setDropdown1(!dropdown1)}
                            >
                              {dropdown1 === true ? (
                                <IoMdArrowDropup />
                              ) : (
                                <IoMdArrowDropdown />
                              )}
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr
                      className={`bg-white ${
                        dropdown1 === false ? "hidden" : "visible"
                      }`}
                    >
                      <td colspan="4">
                        <div className="flex justify-between items-center py-[1rem] px-[1.4rem] relative bg-[#f5f9ff] rounded-bl-md rounded-tl-md -top-[11px]">
                          <div className="justify-between flex items-center">
                            <span className="fit-content">
                              <img
                                src={cadflag}
                                alt="flag"
                              />
                            </span>
                            <span className="my-[0] mx-[5px]"><IoMdArrowDropright/></span>
                            <span className="fit-content">
                              <img
                                src={brlflag}
                                alt="flag"
                              />
                            </span>
                          </div>
                          <div className="flex flex-col items-start">
                            <small>Exchange Rate</small>
                            <p> 3.90 </p>
                          </div>
                          <div className="col-three">
                            <small>Amount (Before Fee)</small>
                            <p>970 CAD</p>
                          </div>
                          <div className="col-two">
                            <small>Amount (After Fee)</small>
                            <p>970 CAD</p>
                          </div>
                          {/* <div className="col-five">
                            <button>
                              <a href="/">View Details</a>
                            </button>
                          </div> */}
                        </div>
                      </td>
                    </tr>

                    <tr className="bg-transparent border-spacing-0"></tr>
                    <tr></tr>
                    <tr className="bg-transparent border-spacing-0"></tr>
                    <tr></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </section>
      </div>
      <div>
        <DashBar />
      </div>
    </main>
  );
};

export default Dashboard;
