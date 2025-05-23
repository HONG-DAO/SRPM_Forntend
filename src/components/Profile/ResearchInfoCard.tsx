import * as React from "react";

interface ResearchDetail {
  label: string;
  value: string;
}

const researchDetails: ResearchDetail[] = [
  { label: "Vai trò", value: "Thành viên nghiên cứu" },
  { label: "Lĩnh vực nghiên cứu", value: "Công nghệ vi mạch bán dẫn" },
  { label: "Số dự án", value: "08" },
  { label: "Link Github", value: "" },
];

export const ResearchInfoCard: React.FC = () => {
  return (
    <section className="flex flex-col grow pt-12 pr-14 pb-16 pl-12 text-gray-700 rounded-xl border border-solid border-slate-200 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-center text-xl font-bold text-center">
        Thông tin nghiên cứu
      </h2>
      <div className="flex flex-col mt-10 text-sm">
        {researchDetails.map((detail, index) => (
          <div key={index} className={index > 0 ? "mt-3.5" : ""}>
            <span className="font-bold text-gray-700">{detail.label}:</span>
            <span className="text-gray-700"> {detail.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
