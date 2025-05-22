"use client";

import React from "react";
import MainLayout from "../layouts/MainLayout";
import Sidebar from "@cnpm/components/Sidebar";
import DashboardHeader from "@cnpm/components/Header";
import ProjectEvaluation from "@cnpm/components/HoiDongThamDinh/ProjectEvaluation";
import PhaseProgress from "@cnpm/components/HoiDongThamDinh/PhaseProgress";

const DashboardHoiDongThamDinh: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex min-h-screen w-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-50 border-r border-gray-200">
          <Sidebar />
        </aside>

        {/* Main content */}
        <section className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 p-6 overflow-y-auto bg-white">
            {/* Tiêu đề */}
            <h2 className="px-5 py-2.5 text-base font-semibold text-black border rounded-xl shadow border-gray-200 mb-6">
              Đánh giá dự án
            </h2>

            <ProjectEvaluation />

            {/* Đánh giá mốc & phản hồi */}
            <div className="flex flex-wrap gap-6 mt-6 text-base font-semibold text-black">
              <div className="flex-1 px-5 py-2.5 rounded-xl border border-gray-200 shadow min-h-[46px] bg-gray-50">
                Đánh giá mốc tiến độ
              </div>
              <div className="flex-1 px-5 py-2.5 rounded-xl border border-gray-200 shadow min-h-[46px] bg-gray-50">
                Phản hồi tổng quan
              </div>
            </div>

            <div className="flex gap-5 mt-6 max-md:flex-col">
              <div className="w-1/2 max-md:w-full">
                <PhaseProgress />
              </div>
              <div className="w-1/2 max-md:w-full">
                <textarea
                  placeholder="Nhập phản hồi tổng quan..."
                  className="w-full px-5 pt-4 pb-64 text-base font-medium text-gray-700 border border-gray-200 shadow rounded resize-none"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-5 py-3 text-base font-medium text-white bg-sky-500 rounded-lg shadow hover:bg-sky-600 transition">
                Gửi đánh giá
              </button>
            </div>
          </main>
        </section>
      </div>
    </MainLayout>
  );
};

export default DashboardHoiDongThamDinh;