// import React from 'react';
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ScrollToTop from "../ScrollToTop";

const MainLayouts = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <ScrollToTop/>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
