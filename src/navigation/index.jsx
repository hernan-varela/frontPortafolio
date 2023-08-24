import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../components/home/Home"
import Navbar2 from "../layouts/navbar/Navbar2";
import Footer from "../layouts/footer/footer";

const Navigation = () => {
  return (
    <>
 
      <BrowserRouter>
        <Navbar2 />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Navigation;
