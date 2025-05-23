"use client";
import * as React from "react";
import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/QuanTriVien/QuanTriVien1/Sidebar";
import Header from "../components/Header";
import { MainContent } from "@cnpm/components/QuanTriVien/QuanTriVien1/MainContent";

export const DashboardLayout = () => {
  return (
    <MainLayout>
      <div className="min-h-screen w-screen bg-gray-50 flex">
        {/* Sidebar cố định 256px */}
        <aside className="w-64 bg-gray-50 border-r border-gray-100">
          <Sidebar />
        </aside>

        {/* Nội dung chính */}
        <section className="flex-1 flex flex-col">
          {/* <Header /> nếu bạn muốn bật */}
          <main className="flex-1 bg-white overflow-auto pt-6 pb-10">
            <div className="w-full max-w-[1280px] mx-auto px-6">
              {/* Render nội dung ở đây */}
              <MainContent />
            </div>
          </main>
        </section>
      </div>
    </MainLayout>
  );
};

export default DashboardLayout;