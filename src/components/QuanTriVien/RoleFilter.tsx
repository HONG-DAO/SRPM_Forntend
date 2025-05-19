"use client";
import * as React from "react";

export const RoleFilter: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center py-2.5 pr-11 pl-4 mt-4 max-w-full text-base rounded-lg border border-solid border-slate-200 w-[561px] max-md:pr-5">
      <span className="grow self-stretch my-auto text-slate-600">Vai trò</span>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ab69d73d717cbc6050076b3bf3e3e159135cde2?placeholderIfAbsent=true&apiKey=348dfa5857644c228c3e6010a2ab82ee"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.12] w-[19px]"
      />

      <div className="flex gap-7 justify-center items-center self-stretch font-medium text-black">
        <button className="self-stretch my-auto hover:text-blue-600">
          Tất cả
        </button>
        <button className="self-stretch my-auto hover:text-blue-600">
          Sinh viên
        </button>
        <button className="self-stretch my-auto hover:text-blue-600">
          Giảng viên
        </button>
        <button className="self-stretch my-auto hover:text-blue-600">
          Nhân viên
        </button>
      </div>
    </div>
  );
};
