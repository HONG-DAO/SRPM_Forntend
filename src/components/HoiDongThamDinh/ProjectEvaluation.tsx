"use client";

import React from "react";
import StatusIndicator from "./StatusIndicator";

const ProjectEvaluation: React.FC = () => {
  return (
    <section className="flex flex-col py-10 pr-20 pl-5 text-base leading-none text-black rounded-none border border-solid border-slate-200 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:pr-5 max-md:max-w-full">
      <div className="flex flex-col self-center max-w-full w-[400px]">
        <div className="flex z-10 gap-16 self-end mt-0">
          <StatusIndicator status="good" label="Tốt" />
          <StatusIndicator status="average" label="Trung bình" />
          <StatusIndicator status="poor" label="Kém" />
        </div>
      </div>

      <div className="flex z-10 flex-col -mt-6 max-w-full w-[698px]">
        <div className="flex flex-col justify-center max-w-full font-medium text-slate-500 w-[281px]">
          <h3 className="overflow-hidden py-1.5 w-full">Lập kế hoạch</h3>
          <h3 className="overflow-hidden py-1.5 mt-12 w-full max-md:mt-10">
            Thực hiện
          </h3>
          <h3 className="overflow-hidden pt-px pb-2.5 mt-12 w-full max-md:mt-10">
            Hiệu quả
          </h3>
        </div>

        <div className="flex z-10 gap-3.5 self-center mt-0 whitespace-nowrap w-[62px]">
          <StatusIndicator status="good" label="Tốt" />
        </div>

        <div className="flex z-10 gap-10 self-end mt-0">
          <StatusIndicator status="average" label="Trung bình" />
          <StatusIndicator status="poor" label="Kém" />
        </div>

        <div className="flex gap-3.5 self-center mt-14 whitespace-nowrap w-[62px] max-md:mt-10">
          <StatusIndicator status="good" label="Tốt" />
        </div>

        <div className="flex z-10 gap-10 self-end mt-0">
          <StatusIndicator status="average" label="Trung bình" />
          <StatusIndicator status="poor" label="Kém" />
        </div>
      </div>
    </section>
  );
};

export default ProjectEvaluation;
