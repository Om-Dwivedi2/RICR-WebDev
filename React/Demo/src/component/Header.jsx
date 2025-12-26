import React from 'react'
import {Link} from "react-router-dom";

const Header = ()=>{
    return (
       <>
         <div className="container-fluid text-center text-white bg-primary my-3 d-flex gap-3 align-items-center  justify-content-around">
          <h3>RICR</h3>
          <div className="d-flex gap-3">
            <Link to={"/"} className="text-decoration-none text-light" >HOME</Link>
            <Link to={"/about"} className="text-decoration-none text-light" >About</Link>
            <Link to={"/product"} className="text-decoration-none text-light" >Product</Link>
            <Link to={"/contact"} className="text-decoration-none text-light" >Contact</Link>
            <Link to={"/product"} className="text-decoration-none text-light" >Product</Link>
            
            
          </div>
          
        </div>
       </>
    )
}

export default Header