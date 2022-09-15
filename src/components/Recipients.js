import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Recipients = () => {
  return (
    <div className="flex gap-x-3">
      <Sidebar />
      Recipients
      <div className="flex flex-col">
        <Navbar />
      </div>
    </div>
  );
};

export default Recipients;
