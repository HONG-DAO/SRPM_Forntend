"use client";
import * as React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { MainContent } from "../components/QuanTriVien/MainContent";

export const DashboardLayout = () => {
  return (
    <div className="overflow-hidden bg-white rounded-lg">
      <div className="w-full bg-black bg-opacity-0">
        <div className="py-0.5 w-full bg-slate-50">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[18%] max-md:ml-0 max-md:w-full">
              <Sidebar />
            </div>
            <div className="ml-5 w-[82%] max-md:ml-0 max-md:w-full">
              <MainContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
