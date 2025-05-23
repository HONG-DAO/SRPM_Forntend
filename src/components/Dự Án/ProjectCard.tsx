"use client";
import React from "react";
import { CircleProgress } from "./CircleProgress";

interface ProjectCardProps {
  projectName: string;
  groupName: string;
  supervisor: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  groupName,
  supervisor,
}) => {
  return (
    <article className="flex gap-7 items-center p-5 bg-white rounded-xl border border-solid shadow-sm border-slate-200 h-[163px] w-[992px] max-md:flex-col max-md:p-4 max-md:w-full max-md:h-auto">
      <div className="shrink-0 rounded-lg bg-zinc-300 h-[139px] w-[165px]" />
      <div className="flex flex-col flex-1 gap-5 pl-2.5 max-md:w-full">
        <div className="flex gap-2 items-center max-sm:flex-col max-sm:gap-1 max-sm:items-start">
          <span className="text-xl font-bold text-slate-600 max-sm:text-base">
            Tên dự án:
          </span>
          <span className="text-xl text-slate-600 max-sm:text-base">
            {projectName}
          </span>
        </div>
        <div className="flex gap-2 items-center max-sm:flex-col max-sm:gap-1 max-sm:items-start">
          <span className="text-xl font-bold text-slate-600 max-sm:text-base">
            Nhóm:
          </span>
          <span className="text-xl text-slate-600 max-sm:text-base">
            {groupName}
          </span>
        </div>
        <div className="flex gap-2 items-center max-sm:flex-col max-sm:gap-1 max-sm:items-start">
          <span className="text-xl font-bold text-slate-600 max-sm:text-base">
            Người hướng dẫn:
          </span>
          <span className="text-xl text-slate-600 max-sm:text-base">
            {supervisor}
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center h-[70px] w-[70px]">
        <CircleProgress />
      </div>
    </article>
  );
};
