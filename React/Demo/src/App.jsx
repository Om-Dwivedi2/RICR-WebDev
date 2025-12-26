import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./component/footer";
import Header from "./component/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import About from "./pages/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Contact />} />
        <Route path="/" element={<Product />} />
        <Route path="/" element={<About />} />

      </Routes>

      
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
