"use client";
import * as React from "react";

export const TimeFilter: React.FC = () => {
  return (
    <div className="flex items-center gap-5 px-4 py-2 border border-slate-200 rounded-lg bg-white text-sm font-medium text-gray-700">
      <div className="flex items-center gap-2 text-slate-500">
        <span>Thời gian</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ab69d73d717cbc6050076b3bf3e3e159135cde2"
          alt="icon"
          className="w-4 h-4 object-contain"
        />
      </div>
      <div className="flex gap-4">
        <button className="hover:text-blue-600">Hôm nay</button>
        <button className="hover:text-blue-600">7 ngày</button>
        <button className="hover:text-blue-600">30 ngày</button>
      </div>
    </div>
  );
};
