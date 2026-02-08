import React from "react";
import Navbar from "./component/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UserDashboard from "./pages/dashboards/UserDashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
           <Route path='/user-dashboard' element={<UserDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
