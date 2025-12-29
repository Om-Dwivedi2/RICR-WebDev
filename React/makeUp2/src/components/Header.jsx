import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bg-blue-700 flex justify-around position: sticky top-0 w-100%">
        <div className="text-white">MakeUp</div>
        <div className="flex gap-4">
            <Link to={"/"} className="text-decoration: none text-white" >Home</Link>
            <Link to={"/Contact"} className="text-decoration: none text-white" >Contact</Link>
            <Link to={"/About"} className="text-decoration: none text-white" >About</Link>
            <Link to={"/Product"} className="text-decoration: none text-white" >Product</Link>
        </div>
        <div className="flex gap-4">
            <Link to={"/Login"} className="text-decoration: none text-white">Login Now</Link>
            <Link to={"/SignUp"} className="text-decoration: none text-white">Sign Up</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
