import React from "react";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { FaCartShopping } from "react-icons/fa6";
import { TbPigMoney } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import api from "../../config/Api";
import toast from "react-hot-toast";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const UserSideBar = ({ active, setActive, isCollapsed, setIsCollapsed }) => {
  const { setUser, setIsLogin } = useAuth();
  const navigate = useNavigate();
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

  // Om Ka Code
  // const items = [
  //   { setActive: "overview", content: "Overview" },
  //   { setActive: "profile", content: "Profile" },
  //   { setActive: "order", content: "Order" },
  //   { setActive: "transaction", content: "Transaction" },
  //   { setActive: "helpDesk", content: "HelpDesk" },
  // ];

  const handleLogout = async () => {
    try {
      const res = await api.get("/auth/logout");
      toast.success(res.data.message);
      setUser("");
      setIsLogin(false);
      navigate("/");
      sessionStorage.removeItem("CravingUser");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };

  return (
    <>
      <div className="p-2 flex flex-col justify-between h-full">
        <div>
          <div className="h-10 text-xl font-bold flex gap-5 items-center mb-3">
            <button
              className="ms-2 hover:scale-105"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <GiHamburgerMenu />
            </button>{" "}
            {!isCollapsed && (
              <span className="overflow-hidden text-nowrap">
                User Dashboard
              </span>
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

        <div>
          <button
            className="flex gap-3 items-center text-lg ps-2 rounded-xl h-10 w-full text-nowrap overflow-hidden duration-300 hover:bg-red-500 hover:text-white text-red-600"
            onClick={handleLogout}
          >
            {" "}
            <MdLogout />
            {!isCollapsed && "Logout"}
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSideBar;
