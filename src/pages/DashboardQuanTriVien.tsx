"use client";
import * as React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { SystemConfigCard } from "../components/QuanTriVien/SystemConfigCard";

export default function DashboardQuanTriVien() {
  return (
    <main className="overflow-hidden bg-white rounded-lg">
      <div className="w-full bg-black bg-opacity-0">
        <section className="py-0.5 w-full bg-slate-50">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[18%] max-md:ml-0 max-md:w-full">
              <Sidebar />
            </div>
            <div className="ml-5 w-[82%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center mx-auto w-full border border-solid bg-black bg-opacity-0 border-slate-200 pb-[621px] max-md:pb-24">
                <Header />
                <SystemConfigCard />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
