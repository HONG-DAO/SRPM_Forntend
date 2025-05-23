"use client";
import React from "react";
import { SearchBar } from "./SearchBar";
import { ProjectCard } from "./ProjectCard";
import { AddIcon } from "./Icons";

export const ProjectList: React.FC = () => {
  return (
    <main className="flex flex-col flex-1 gap-6 px-24 py-12 max-md:p-6 max-sm:p-4">
      <h1 className="mb-10 text-3xl font-bold text-center text-gray-700 max-sm:mb-6 max-sm:text-2xl">
        Dự án của tôi
      </h1>
      <div className="flex justify-between items-center mb-3.5 max-md:flex-col max-md:gap-4">
        <SearchBar className="w-96 max-md:w-full" />
        <button className="flex gap-1.5 justify-center items-center bg-teal-500 rounded-lg cursor-pointer h-[50px] w-[150px] max-md:w-full">
          <AddIcon />
          <span className="text-base font-bold text-white">Tạo dự án</span>
        </button>
      </div>
      <section className="flex flex-col gap-6">
        <ProjectCard
          projectName="Hệ thống giao dịch tự động"
          groupName="CNTT22"
          supervisor="ThS. Nguyễn Văn Hồng"
        />
        <ProjectCard
          projectName="Bác Sĩ AI"
          groupName="CNTT3"
          supervisor="TS. Nguyễn Văn Minh"
        />
        <ProjectCard
          projectName="Ứng dụng Quản lý tiền trợ"
          groupName="KHDL"
          supervisor="TS. Nguyễn Hồ Ngọc"
        />
      </section>
    </main>
  );
};
