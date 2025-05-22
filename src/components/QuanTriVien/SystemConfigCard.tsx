"use client";

import React, { useState } from "react";

export function SystemConfigCard() {
  const [defaultRole, setDefaultRole] = useState("Sinh viên");
  const [themeMode, setThemeMode] = useState("Sáng");

  const roles = ["Sinh viên", "Giảng viên", "Nhân viên", "Quản trị viên"];
  const modes = ["Sáng", "Tối"];

  return (
    <section className="flex flex-col gap-9 px-5 w-full max-w-[1095px]">
      {/* Tiêu đề */}
      <header className="flex items-center px-5 py-2.5 text-base font-semibold text-black rounded-xl border border-slate-200 shadow-sm min-h-[46px]">
        <h1 className="w-full">Cấu hình hệ thống</h1>
      </header>

      {/* Nội dung */}
      <div className="px-5 py-5 border border-slate-200 rounded-xl shadow-sm bg-white">
        <div className="flex gap-5 max-md:flex-col">
          {/* Cột trái - Nhãn */}
          <div className="w-[59%] max-md:w-full">
            <dl className="flex flex-col gap-7 text-base font-medium text-slate-500">
              <dt className="py-1.5">Thời hạn hệ thống</dt>
              <dt className="py-1.5">Email hệ thống</dt>
              <dt className="py-1.5">SMTP Server</dt>
              <dt className="py-1.5">Quyền hạn mặc định</dt>
              <dt className="pb-1.5">Giao diện hệ thống</dt>
            </dl>
          </div>

          {/* Cột phải - Giá trị */}
          <div className="w-[41%] max-md:w-full">
            <dl className="flex flex-col gap-7 mt-[6px] text-base text-black">
              <dd className="py-1.5">01/01/2025 - 30/06/2025</dd>
              <dd className="py-1.5">system@domain.edu.vn</dd>
              <dd className="py-1.5">smtp.domain.edu.vn</dd>

              {/* Dropdown quyền hạn */}
              <dd className="flex items-center py-1.5">
                <select
                  value={defaultRole}
                  onChange={(e) => setDefaultRole(e.target.value)}
                  className="border border-gray-300 px-3 py-2 rounded-md bg-white text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </dd>

              {/* Dropdown giao diện */}
              <dd className="flex items-center py-1.5">
                <select
                  value={themeMode}
                  onChange={(e) => setThemeMode(e.target.value)}
                  className="border border-gray-300 px-3 py-2 rounded-md bg-white text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {modes.map((mode) => (
                    <option key={mode} value={mode}>
                      {mode}
                    </option>
                  ))}
                </select>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}