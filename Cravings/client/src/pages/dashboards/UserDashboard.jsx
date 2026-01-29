import React, { useState, useEffect } from "react";
import UserSideBar from "../../components/userDashboard/UserSideBar";
import UserOverview from "../../components/userDashboard/UserOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrder from "../../components/userDashboard/UserOrder";
import UserTransaction from "../../components/userDashboard/UserTransaction";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";


const UserDashboard = () => {
  const { role, isLogin } = useAuth();
  const navigate = useNavigate();
  const [active, setActive] = useState("overview");
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  });

  if (role !== "customer") {
    return (
      <>
        <div className="p-3">
          <div className="border rounded shadow p-5 w-4xl mx-auto text-center bg-gray-100">
            <div className="text-5xl text-red-600">
              ⊗
            </div>
            <div className="text-xl">
              You are not login as Customer. Please Login again.
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className=" w-full h-[90vh] flex">
        <div className={`border border-green-500 duration-300 ${isCollapsed ? "w-3/60" : "w-12/60" }`}>
          {/* HTML me bataya gaya tha tag is like function so here UserSideBar is like function with parameter (active, setActive) */}

          <UserSideBar
            active={active}
            setActive={setActive}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        </div>
        <div className={`border border-amber-700 ${isCollapsed ? "w-57/60" : "w-48/60"}`}>
          {active === "overview" && <UserOverview />}
          {active === "profile" && <UserProfile />}
          {active === "order" && <UserOrder />}
          {active === "transaction" && <UserTransaction />}
          {active === "helpDesk" && <UserHelpDesk />}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
