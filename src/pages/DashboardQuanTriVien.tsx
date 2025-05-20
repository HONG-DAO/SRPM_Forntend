"use client";
import * as React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { SystemConfigCard } from "../components/QuanTriVien/SystemConfigCard";

export default function DashboardQuanTriVien() {
  return (
    <div className="flex min-h-screen w-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-[18%] bg-white border-r border-slate-200">
        <Sidebar />
      </aside>

      {/* Main content */}
      <section className="w-[82%] flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          <SystemConfigCard />
        </main>
      </section>
    </div>
  );
}