"use client";
import * as React from "react";

export const UserInteractionChart: React.FC = () => {
  return (
    <section className="flex flex-col items-start pt-6 pr-12 pb-3.5 pl-5 mt-8 max-w-full rounded-xl border border-solid border-slate-200 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] w-[541px] max-md:pr-5">
      <h2 className="z-10 pb-2.5 max-w-full text-lg font-medium leading-none text-black w-[221px] max-md:pr-5">
        Tương tác người dùng
      </h2>

      <div className="px-4 pt-8 pb-4 mt-1.5 ml-5 w-full text-xs text-black min-h-[254px] max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/05590de6f85e16c8d0c8b316c3dbaf89dacbee1b?placeholderIfAbsent=true&apiKey=348dfa5857644c228c3e6010a2ab82ee"
          alt="Interaction Chart"
          className="object-contain flex-1 w-full aspect-[2.32] max-md:max-w-full"
        />

        <div className="flex overflow-hidden flex-wrap justify-center items-start w-full max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap gap-2 justify-center items-center px-2">
            <div className="flex overflow-hidden gap-1 items-center self-stretch p-1 my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/07a945ed3e085f09938a9c6e84e701d277235af7?placeholderIfAbsent=true&apiKey=348dfa5857644c228c3e6010a2ab82ee"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              />
              <span className="self-stretch my-auto">Sinh viên</span>
            </div>
            <div className="flex overflow-hidden gap-1 items-center self-stretch p-1 my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/46f7f9a683b363f27d820d9d44a9bfc3fc5643ae?placeholderIfAbsent=true&apiKey=348dfa5857644c228c3e6010a2ab82ee"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              />
              <span className="self-stretch my-auto">Giảng viên</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
