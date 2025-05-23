"use client";
import * as React from "react";

export const UserPerformanceChart: React.FC = () => {
  return (
    <section className="flex flex-col py-5 pr-10 pl-5 w-full rounded-xl border border-solid border-slate-200 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:pr-5 max-md:mt-9 max-md:max-w-full">
      <h2 className="pb-2 max-w-full text-lg font-medium leading-none text-black w-[221px] max-md:pr-5">
        Hiệu suất người dùng
      </h2>

      <div className="flex gap-2 self-end px-2 pt-6 pb-2 max-w-full text-xs bg-white min-h-[270px] w-[459px]">
        <div className="flex flex-col flex-1 shrink py-11 font-semibold text-red-300 whitespace-nowrap basis-0 min-w-60">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0562e3e66608ab8d83741955682a784b7fdca516?placeholderIfAbsent=true&apiKey=348dfa5857644c228c3e6010a2ab82ee"
            alt="Performance Chart"
            className="object-contain w-full rounded-full aspect-[2.26]"
          />
          <span className="self-start">800</span>
        </div>

        <div className="flex overflow-hidden flex-col justify-center text-black">
          <div className="flex overflow-hidden gap-1 items-center p-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/22588eea0d0b8380ea4f6f53c78bca5076328a2c?placeholderIfAbsent=true&apiKey=348dfa5857644c228c3e6010a2ab82ee"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            />
            <span className="self-stretch my-auto">Số phiên (phiên)</span>
          </div>
          <div className="flex overflow-hidden gap-1 items-center p-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbf6108ba61014ed93bbd3a242cc54580dc600cd?placeholderIfAbsent=true&apiKey=348dfa5857644c228c3e6010a2ab82ee"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            />
            <span className="self-stretch my-auto">Phản hồi TB (ms)</span>
          </div>
          <div className="flex overflow-hidden gap-1 items-center self-start p-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9380112703b3bbad932791ab64ea4fe20cd89fd3?placeholderIfAbsent=true&apiKey=348dfa5857644c228c3e6010a2ab82ee"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            />
            <span className="self-stretch my-auto">Tỷ lệ lỗi (%)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
