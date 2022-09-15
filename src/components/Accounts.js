import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Accounts = () => {
  return (
    <div className="flex gap-x-3">
      <Sidebar />
      Accounts
      <div className="flex flex-col">
        <Navbar />
      </div>
    </div>
  );
};

export default Accounts;
