"use client";
import * as React from "react";
<<<<<<< HEAD
import MainLayout from "@cnpm/layouts/MainLayout";
import Sidebar from "@cnpm/components/QuanTriVien/QuanTriVien1/Sidebar";
import Header from "@cnpm/components/Header";
import { UserRoleFilter } from "@cnpm/components/QuanTriVien/QuanTriVien1/UserRoleFilter";
import { UserList } from "@cnpm/components/QuanTriVien/QuanTriVien1/UserList";
=======
import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/QuanTriVien/QuanTriVien1/Sidebar";
import Header from "../components/Header";
import { MainContent } from "@cnpm/components/QuanTriVien/QuanTriVien1/MainContent";
>>>>>>> a1b7d63de158f78babe3a12a91009ecbc5b150d0

export const DashboardLayout = () => {
  return (
    <MainLayout>
      <div className="min-h-screen w-screen bg-gray-50 flex">
        {/* Sidebar cố định 256px */}
<<<<<<< HEAD
        <aside className="w-64 bg-gray-50 border-r border-gray-200">
=======
        <aside className="w-64 bg-gray-50 border-r border-gray-100">
>>>>>>> a1b7d63de158f78babe3a12a91009ecbc5b150d0
          <Sidebar />
        </aside>

        {/* Nội dung chính */}
<<<<<<< HEAD
        <section className="flex-1 flex flex-col bg-white">
          <div className="border-b border-gray-200">
            <Header />
          </div>
          <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
            <div className="w-full max-w-[1280px] mx-auto px-6">
              <div className="w-[830px] mb-4">
                <UserRoleFilter />
              </div>
              <UserList />
=======
        <section className="flex-1 flex flex-col">
          {/* <Header /> nếu bạn muốn bật */}
          <main className="flex-1 bg-white overflow-auto pt-6 pb-10">
            <div className="w-full max-w-[1280px] mx-auto px-6">
              {/* Render nội dung ở đây */}
              <MainContent />
>>>>>>> a1b7d63de158f78babe3a12a91009ecbc5b150d0
            </div>
          </main>
        </section>
      </div>
    </MainLayout>
  );
};

export default DashboardLayout;