import React from "react";
import Logo from "../assets/logo.svg";

const Navbar = ({ onOpenModal }) => {
  return (
    <nav className="bg-white shadow flex justify-between items-center p-4">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="h-8 w-8" />
        <h1 className="text-lg font-bold">Creative Upaay Tasks</h1>
      </div>
      <button
        onClick={onOpenModal}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        + Add Task
      </button>
    </nav>
  );
};

export default Navbar;
