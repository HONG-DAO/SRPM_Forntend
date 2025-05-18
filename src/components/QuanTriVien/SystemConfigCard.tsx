import React from "react";

export function SystemConfigCard() {
  return (
    <section className="flex flex-col gap-9 px-5 w-full max-w-[1095px]">
      <header className="flex flex-col justify-center px-5 py-2.5 w-full text-base font-semibold leading-none text-black rounded-xl border border-solid border-slate-200 min-h-[46px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
        <h1 className="overflow-hidden py-1.5 w-full">Cấu hình hệ thống</h1>
      </header>

      <div className="px-5 py-5 rounded-none border border-solid border-slate-200 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[59%] max-md:w-full">
            <dl className="flex flex-col gap-5 text-base font-medium leading-none text-slate-500">
              <dt className="py-1.5">Thời hạn hệ thống</dt>
              <dt className="py-1.5">Email hệ thống</dt>
              <dt className="py-1.5">SMTP Server</dt>
              <dt className="py-1.5">Quyền hạn mặc định</dt>
              <dt className="pb-2.5">Giao diện hệ thống</dt>
            </dl>
          </div>

          <div className="ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <dl className="flex flex-col gap-8 mt-2 text-base leading-none text-black">
              <dd>01/01/2025 - 30/06/2025</dd>
              <dd>system@domain.edu.vn</dd>
              <dd>smtp.domain.edu.vn</dd>
              <dd className="flex gap-1 items-center">
                Sinh viên
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bc55a0eda57ee4494986a2e5da0f0b8533532f6?placeholderIfAbsent=true&apiKey=348dfa5857644c228c3e6010a2ab82ee"
                  alt=""
                  className="w-3.5 aspect-square"
                />
              </dd>
              <dd className="flex gap-3.5 items-center">
                Sáng / Tối
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bc55a0eda57ee4494986a2e5da0f0b8533532f6?placeholderIfAbsent=true&apiKey=348dfa5857644c228c3e6010a2ab82ee"
                  alt=""
                  className="w-3.5 aspect-square"
                />
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
