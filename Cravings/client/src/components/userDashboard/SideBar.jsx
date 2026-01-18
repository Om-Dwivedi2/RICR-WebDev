import React from "react";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { FaCartShopping } from "react-icons/fa6";
import { TbPigMoney } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";

const SideBar = ({ active, setActive }) => {
  return (
    <>
      <div className="p-3 ">
        <div className="text-xl font-bold flex gap-3">
          <button><GiHamburgerMenu/></button>
          <span>User Dashboard</span>
        </div>
      </div>
      <hr />
      <div className="grid gap-3 bg-cyan-300 px-5 py-4">
        <button
          className={`flex gap-3 items-center hover:bg-gray-100/70 p-3 rounded-xl ${
            active === "overview"
              ? "bg-(--color-secondary) text-white"
              : "hover:bg-gray-100/70"
          }`}
          onClick={() => setActive("overview")}
        >
          <FaMagnifyingGlassChart /> Overview
        </button>
        <button
          className={`flex gap-3 items-center hover:bg-gray-100/70 p-3 rounded-xl ${
            active === "profile"
              ? "bg-(--color-secondary) text-white"
              : "hover:bg-gray-100/70"
          }`}
          onClick={() => setActive("profile")}
        >
          <ImProfile /> Profile
        </button >
        <button
          className={`flex gap-3  hover:bg-gray-100/70 p-3 rounded-xl ${
            active === "order"
              ? "bg-(--color-secondary) text-white"
              : "hover:bg-gray-100/70"
          }`}
          onClick={() => setActive("order")}
        >
          <FaCartShopping /> Order
        </button>
        <button
          className={`flex gap-3 items-center hover:bg-gray-100/70 p-3 rounded-xl ${
            active === "transaction"
              ? "bg-(--color-secondary) text-white"
              : "hover:bg-gray-100/70"
          }`}
          onClick={() => setActive("transaction")}
        >
          <TbPigMoney /> Transactions
        </button>
        <button
          className={`flex gap-3 items-center hover:bg-gray-100/70 p-3 rounded-xl ${
            active === "helpDesk"
              ? "bg-(--color-secondary) text-white"
              : "hover:bg-gray-100/70"
          }`}
          onClick={() => setActive("helpDesk")}
        >
          <FaHandsHelping /> Help Desk
        </button>
      </div>
    </>
  );
};

export default SideBar;
