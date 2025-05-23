"use client";
import React from "react";
import Sidebar from "@cnpm/components/Profile/Sidebar";
import Header from "@cnpm/components/Header";
import { UserDetails } from "../components/Profile/UserDetails";
import { ResearchInfo } from "../components/Profile/ResearchInfo";

const ThongTinCaNhanThanhVienNghienCuu = () => {
  return (
    <main className="bg-slate-50 min-h-screen w-full">
      <div className="flex flex-row min-h-screen">
        {/* Sidebar */}
        <div className="w-[18%] border-r border-slate-200 bg-gray">
          <Sidebar />
        </div>
        {/* Main content */}
        <div className="w-[82%] flex flex-col">
          {/* Header */}
          <Header />
          {/* Content */}
          <section className="flex flex-col items-center pb-60 w-full max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8abed92c5361a5449f407906e028f52aee28e22?placeholderIfAbsent=true&apiKey=348dfa5857644c228c3e6010a2ab82ee"
              alt="Profile"
              className="object-contain mt-10 max-w-full aspect-square w-[150px] max-md:mt-10"
            />
            <div className="mt-16 w-full max-w-[984px] max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-6/12 max-md:ml-0 max-md:w-full">
                  <UserDetails />
                </div>
                <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <ResearchInfo />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ThongTinCaNhanThanhVienNghienCuu;
