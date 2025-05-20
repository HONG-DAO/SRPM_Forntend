"use client";
import * as React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { MainContent } from "../components/QuanTriVien/MainContent";

export const DashboardLayout = () => {
  return (
    <div className="min-h-screen w-screen bg-white flex">
      {/* Sidebar chiếm 18% */}
      <div className="w-[18%]">
        <Sidebar />
      </div>

      {/* Main content chiếm 82% */}
      <div className="w-[82%] flex flex-col">
        {/* Nếu muốn dùng Header, bỏ comment dòng dưới */}
        {/* <Header /> */}
        {/* Nội dung chính */}
        <div className="flex-grow bg-slate-50 p-4 overflow-auto">
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;