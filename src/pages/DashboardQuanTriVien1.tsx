"use client";
import * as React from "react";
import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { MainContent } from "../components/QuanTriVien/MainContent";

export const DashboardLayout = () => {
  return (
    <MainLayout>
      <div className="min-h-screen w-screen bg-gray-50 flex">
        {/* Sidebar chiếm cố định 256px (w-64) */}
        <aside className="w-64 bg-gray-50 border-r border-gray-200">
          <Sidebar />
        </aside>

        {/* Main content flex-grow */}
        <section className="flex-1 flex flex-col">
          {/* Header - có thể bật nếu cần */}
          {/* <Header /> */}

          {/* Nội dung chính */}
          <main className="flex-1 bg-white p-6 overflow-auto">
            <MainContent />
          </main>
        </section>
      </div>
    </MainLayout>
  );
};

export default DashboardLayout;