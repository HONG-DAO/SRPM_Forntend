"use client";

import React from "react";
import Sidebar from "@cnpm/components/Sidebar";
import DashboardHeader from "@cnpm/components/Header";
import ProjectEvaluation from "@cnpm/components/HoiDongThamDinh/ProjectEvaluation";
import PhaseProgress from "@cnpm/components/HoiDongThamDinh/PhaseProgress";

const DashboardHoiOngThamInh: React.FC = () => {
  return (
    <main className="overflow-hidden bg-white rounded-lg">
      <div className="w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="py-0.5 w-full bg-slate-50 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <aside className="w-[18%] max-md:ml-0 max-md:w-full">
              <Sidebar />
            </aside>

            <section className="ml-5 w-[82%] max-md:ml-0 max-md:w-full">
              <div className="grow pb-52 w-full border border-solid border-slate-200 max-md:pb-24 max-md:max-w-full">
                <DashboardHeader />

                <div className="flex flex-col px-11 mt-9 w-full max-md:px-5 max-md:max-w-full">
                  <h2 className="flex flex-col justify-center px-5 py-2.5 text-base font-semibold leading-none text-black rounded-xl border border-solid border-slate-200 min-h-[46px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:max-w-full">
                    <span className="overflow-hidden py-1.5 w-full max-md:pr-5 max-md:max-w-full">
                      Đánh giá dự án
                    </span>
                  </h2>

                  <ProjectEvaluation />

                  <div className="flex flex-wrap gap-10 mt-6 text-base font-semibold leading-none text-black">
                    <h3 className="flex flex-col flex-1 grow shrink-0 justify-center px-5 py-2.5 rounded-xl border border-solid basis-0 border-slate-200 min-h-[46px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] w-fit max-md:max-w-full">
                      <span className="overflow-hidden py-1.5 w-full max-md:pr-5 max-md:max-w-full">
                        Đánh giá mốc tiến độ
                      </span>
                    </h3>
                    <h3 className="flex flex-col flex-1 grow shrink-0 justify-center px-5 py-2.5 rounded-xl border border-solid basis-0 border-slate-200 min-h-[46px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] w-fit max-md:max-w-full">
                      <span className="overflow-hidden py-1.5 w-full max-md:pr-5 max-md:max-w-full">
                        Phản hồi tổng quan
                      </span>
                    </h3>
                  </div>

                  <div className="w-full max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                      <div className="w-6/12 max-md:ml-0 max-md:w-full">
                        <PhaseProgress />
                      </div>
                      <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <textarea
                          placeholder="Nhập phản hồi tổng quan..."
                          className="grow px-5 pt-4 pb-64 text-base font-medium leading-none rounded-none border border-solid border-slate-200 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] text-zinc-500 w-full max-md:pb-24 max-md:mt-10 max-md:max-w-full"
                        />
                      </div>
                    </div>
                  </div>

                  <button className="self-end px-5 py-3 mt-6 mr-48 text-base font-medium leading-none text-black bg-sky-300 rounded-lg shadow-[0px_2px_2px_rgba(0,0,0,0.25)] max-md:mr-2.5">
                    Gửi đánh giá
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardHoiOngThamInh;
