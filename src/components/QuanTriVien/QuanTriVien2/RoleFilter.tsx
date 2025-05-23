"use client";
import * as React from "react";

export const RoleFilter: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 px-4 py-2.5 mt-4 w-full max-w-[420px] border border-slate-200 rounded-lg bg-white text-sm text-gray-700">
      {/* Label + icon */}
      <div className="flex items-center gap-2 text-slate-500">
        <span>Vai trò</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ab69d73d717cbc6050076b3bf3e3e159135cde2"
          alt="icon"
          className="w-4 h-4 object-contain"
        />
      </div>

      {/* Button group */}
      <div className="flex flex-wrap gap-3 font-medium text-black">
        <button className="hover:text-blue-700">Tất cả</button>
        <button className="hover:text-blue-700">Sinh viên</button>
        <button className="hover:text-blue-700">Giảng viên</button>
        <button className="hover:text-blue-700">Nhân viên</button>
      </div>
    </div>
  );
};