import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <Toaster position="bottom-center" />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
