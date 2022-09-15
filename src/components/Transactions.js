import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Transactions = () => {
  return (
    <div className="flex gap-x-3">
      <Sidebar />
      Transactions
      <div className="flex flex-col">
        <Navbar />
      </div>
    </div>
  );
};

export default Transactions;
