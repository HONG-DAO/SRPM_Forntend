"use client";
import React from "react";
import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/Dự Án/Sidebar";
import Header from "../components/Header";
import { ProjectList } from "../components/Dự Án/ProjectList";

export const DashboardLayout: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex bg-slate-50 h-[1024px] w-[1440px] max-md:flex-col max-md:w-full">
        <Sidebar />
        <div className="flex flex-col flex-1 max-md:w-full">
          <Header />
          <ProjectList />
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardLayout;
