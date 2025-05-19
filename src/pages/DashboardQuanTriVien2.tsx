"use client";
import * as React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { UserPerformanceChart } from "../components/QuanTriVien/UserPerformanceChart";
import { UserInteractionChart } from "../components/QuanTriVien/UserInteractionChart";
import { TimeFilter } from "../components/QuanTriVien/TimeFilter";
import { RoleFilter } from "../components/QuanTriVien/RoleFilter";

const DashboardQuanTriVien2: React.FC = () => {
  return (
    <main className="overflow-hidden bg-white rounded-lg">
      <div className="w-full bg-black bg-opacity-0 max-md:max-w-full">
        <div className="py-0.5 w-full bg-slate-50 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[18%] max-md:ml-0 max-md:w-full">
              <Sidebar />
            </div>

            <div className="ml-5 w-[82%] max-md:ml-0 max-md:w-full">
              <div className="grow pb-28 w-full border border-solid bg-black bg-opacity-0 border-slate-200 max-md:pb-24 max-md:max-w-full">
                <Header />

                <div className="flex flex-col items-start px-6 mt-3.5 w-full max-md:px-5 max-md:max-w-full">
                  <div className="self-stretch max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                      <div className="w-6/12 max-md:ml-0 max-md:w-full">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/488d89fe7b2e7cd40a8ee8152b3048ee84cd22ed?placeholderIfAbsent=true&apiKey=348dfa5857644c228c3e6010a2ab82ee"
                          alt="Statistics"
                          className="object-contain grow w-full rounded-xl aspect-[1.6] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:mt-9 max-md:max-w-full"
                        />
                      </div>
                      <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <UserPerformanceChart />
                      </div>
                    </div>
                  </div>

                  <UserInteractionChart />
                  <TimeFilter />
                  <RoleFilter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardQuanTriVien2;
