import React from "react";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bg-blue-500 flex justify-evenly">
        <div>Company Name</div>
        <div className="flex gap-5">
          <Link to={"/"} className="text-decoration: none text-white">Home</Link>
          <Link to={"/About"} className="text-decoration: none text-white">About</Link>
          <Link to={"/Contact"} className="text-decoration: none text-white">Contact</Link>
          <Link to={"/Product"} className="text-decoration: none text-white">Product</Link>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Header;
