import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Payment = () => {
  return (
    <div className="flex gap-x-3">
      <Sidebar />
      Payment
      <div className="flex flex-col">
        <Navbar />
      </div>
    </div>
  );
};

export default Payment;
