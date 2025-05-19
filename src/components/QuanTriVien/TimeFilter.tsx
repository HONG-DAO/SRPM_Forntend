"use client";
import * as React from "react";

export const TimeFilter: React.FC = () => {
  return (
    <div className="flex gap-5 justify-between py-2.5 pr-16 pl-4 mt-12 max-w-full text-base rounded-lg border border-solid border-slate-200 w-[456px] max-md:pr-5 max-md:mt-10">
      <div className="flex gap-4 my-auto text-slate-600">
        <span>Thời gian</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ab69d73d717cbc6050076b3bf3e3e159135cde2?placeholderIfAbsent=true&apiKey=348dfa5857644c228c3e6010a2ab82ee"
          alt=""
          className="object-contain shrink-0 aspect-[1.12] w-[19px]"
        />
      </div>

      <div className="flex gap-7 justify-center items-center font-medium text-black">
        <button className="self-stretch my-auto hover:text-blue-600">
          Hôm nay
        </button>
        <button className="self-stretch my-auto hover:text-blue-600">
          7 ngày
        </button>
        <button className="self-stretch my-auto hover:text-blue-600">
          30 ngày
        </button>
      </div>
    </div>
  );
};
