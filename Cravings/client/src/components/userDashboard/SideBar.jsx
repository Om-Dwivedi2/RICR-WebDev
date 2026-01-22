import React from "react";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { FaCartShopping } from "react-icons/fa6";
import { TbPigMoney } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";

const SideBar = ({ active, setActive, isCollapsed, setIsCollapsed }) => {
  
  const menuItems = [
    { key: "overview", title: "OverView", icon: <FaMagnifyingGlassChart /> },
    { key: "profile", title: "Profile", icon: <ImProfile /> },
    { key: "orders", title: "Orders", icon: <FaCartShopping /> },
    {
      key: "transactions",
      title: "Transactions",
      icon: <TbPigMoney />,
    },
    { key: "helpdesk", title: "Help Desk", icon: <FaHandsHelping /> },
  ];

  // const items = [
  //   { setActive: "overview", content: "Overview" },
  //   { setActive: "profile", content: "Profile" },
  //   { setActive: "order", content: "Order" },
  //   { setActive: "transaction", content: "Transaction" },
  //   { setActive: "helpDesk", content: "HelpDesk" },
  // ];

  return (
    <>
      
      <div className="p-2">
        <div className="h-10 text-xl font-bold flex gap-5 items-center mb-3">
          <button
            className="ms-2 hover:scale-105"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <GiHamburgerMenu />
          </button>{" "}
          {!isCollapsed && (
            <span className="overflow-hidden text-nowrap">User Dashboard</span>
          )}
        </div>
        <hr />

        <div className="py-6 space-y-5 w-full">
          {menuItems.map((item, idx) => (
            <button
              className={`flex gap-3 items-center text-lg ps-2 rounded-xl h-10 w-full text-nowrap overflow-hidden duration-300
                ${
                  active === item.key
                    ? "bg-(--color-secondary) text-white"
                    : "hover:bg-gray-100/70 "
                } 
              `}
              onClick={() => setActive(item.key)}
              key={idx}
            >
              {" "}
              {item.icon}
              {!isCollapsed && item.title}
            </button>
          ))}
        </div>
      </div>
      
      
      {/* <div className="p-3 ">
        <div className="text-xl font-bold flex gap-3">
          <button
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
          >
            <GiHamburgerMenu />
          </button>
          <span>{!isCollapsed ? "User Dashboard" : " "}</span>
        </div>
      </div>
      <hr />
      <div className="grid gap-3 bg-cyan-300 px-1 py-4">
        <button
          className={`flex gap-3 duration-300 items-center hover:bg-gray-100/70 p-3 rounded-xl ${!isCollapsed ? "w-100/100" : "w-30/100"} ${
            active === "overview"
              ? "bg-(--color-secondary) text-white"
              : "hover:bg-gray-100/70"
          }`}
          onClick={() => setActive("overview")}
        >
          <FaMagnifyingGlassChart /> {!isCollapsed ? "Overview" : ""}
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
        </button>
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
      </div> */}
    </>
  );
};

export default SideBar;
