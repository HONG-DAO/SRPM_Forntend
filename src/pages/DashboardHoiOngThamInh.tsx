"use client";

import React from "react";
import MainLayout from "../layouts/MainLayout";
import Sidebar from "@cnpm/components/Sidebar";
import DashboardHeader from "@cnpm/components/Header";
import ProjectEvaluation from "@cnpm/components/HoiDongThamDinh/ProjectEvaluation";
import PhaseProgress from "@cnpm/components/HoiDongThamDinh/PhaseProgress";

const DashboardHoiOngThamInh: React.FC = () => {
  return (
    <div className="flex min-h-screen w-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-[18%] bg-white border-r border-slate-200">
        <Sidebar />
      </aside>

      {/* Main content */}
      <section className="w-[82%] flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Tiêu đề */}
          <h2 className="px-5 py-2.5 text-base font-semibold text-black border rounded-xl shadow border-slate-200 mb-6">
            Đánh giá dự án
          </h2>

          <ProjectEvaluation />

          {/* Đánh giá mốc & phản hồi */}
          <div className="flex flex-wrap gap-10 mt-6 text-base font-semibold text-black">
            <div className="flex-1 px-5 py-2.5 rounded-xl border border-slate-200 shadow min-h-[46px]">
              Đánh giá mốc tiến độ
            </div>
            <div className="flex-1 px-5 py-2.5 rounded-xl border border-slate-200 shadow min-h-[46px]">
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
                className="w-full px-5 pt-4 pb-64 text-base font-medium text-zinc-500 border border-slate-200 shadow rounded"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-5 py-3 text-base font-medium text-black bg-sky-300 rounded-lg shadow">
              Gửi đánh giá
            </button>
          </div>
        </main>
      </section>
    </div>
  );
};

export default DashboardHoiOngThamInh;
