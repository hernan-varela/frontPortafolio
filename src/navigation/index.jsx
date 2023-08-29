import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../components/home/Home";
import Navbar2 from "../layouts/navbar/Navbar2";
import Footer from "../layouts/footer/footer";
import AboutMe from "../components/aboutMe/AboutMe";

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/about-me" element={<AboutMe />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Navigation;
