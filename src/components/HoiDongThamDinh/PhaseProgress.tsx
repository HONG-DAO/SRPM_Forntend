"use client";

import React from "react";

interface PhaseStatus {
  phase: string;
  status: "completed" | "in-progress" | "not-started";
}

const PhaseProgress: React.FC = () => {
  const phases: PhaseStatus[] = [
    { phase: "Giai đoạn 1", status: "completed" },
    { phase: "Giai đoạn 2", status: "in-progress" },
    { phase: "Giai đoạn 3", status: "not-started" },
  ];

  const getStatusStyles = (status: PhaseStatus["status"]) => {
    switch (status) {
      case "completed":
        return {
          bg: "bg-green-200",
          icon: "https://cdn.builder.io/api/v1/image/assets/823bf4beb2774bc99c68daa06d856dec/8b98aeff18797f45569e8536ad1c37ed402f4276?placeholderIfAbsent=true",
          text: "Hoàn Thành",
        };
      case "in-progress":
        return {
          bg: "bg-yellow-100",
          icon: "https://cdn.builder.io/api/v1/image/assets/823bf4beb2774bc99c68daa06d856dec/dbd1e3dfcb2a72321254ca452254c2d280ffc3c3?placeholderIfAbsent=true",
          text: "Đang thực hiện",
        };
      case "not-started":
        return {
          bg: "bg-rose-300",
          icon: "https://cdn.builder.io/api/v1/image/assets/823bf4beb2774bc99c68daa06d856dec/467d769626ecc4b4470459ea68ac3ebf8a893038?placeholderIfAbsent=true",
          text: "Chưa bắt đầu",
        };
    }
  };

  return (
    <div className="grow px-6 py-10 rounded-none border border-solid border-slate-200 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:pr-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[58%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center self-stretch my-auto text-base font-medium leading-none text-slate-500">
            {phases.map((phase, index) => (
              <h3
                key={index}
                className={`overflow-hidden py-1.5 w-full ${
                  index > 0 ? "mt-12 max-md:mt-10" : ""
                }`}
              >
                {phase.phase}
              </h3>
            ))}
          </div>
        </div>
        <div className="ml-5 w-[42%] max-md:ml-0 max-md:w-full">
          <div className="w-full font-medium text-black max-md:mt-10">
            {phases.map((phase, index) => {
              const status = getStatusStyles(phase.status);
              return (
                <div
                  key={index}
                  className={`flex gap-2.5 px-5 py-3.5 text-base leading-none ${
                    status.bg
                  } rounded-lg ${index > 0 ? "mt-7" : ""}`}
                >
                  <img
                    src={status.icon}
                    alt={status.text}
                    className="object-contain shrink-0 w-6 aspect-square"
                  />
                  <div className="my-auto">{status.text}</div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/823bf4beb2774bc99c68daa06d856dec/40274b722d9dbb54ac71371c7a7ba0ebfb894b86?placeholderIfAbsent=true"
                    alt="Additional icon"
                    className="object-contain shrink-0 w-6 aspect-square"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhaseProgress;
