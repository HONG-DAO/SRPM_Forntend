import React from "react";
import { ApprovalRequest } from "./types";

interface ApprovalSectionProps {
  requests: ApprovalRequest[];
}

export const ApprovalSection: React.FC<ApprovalSectionProps> = ({
  requests,
}) => {
  return (
    <div className="flex-1 p-6 rounded-xl border border-solid bg-slate-50 border-slate-200 max-sm:w-full">
      <h2 className="mb-6 text-lg font-medium">
        Phê duyệt giao dịch &amp; hoạt động
      </h2>
      <div>
        <div className="flex gap-20 px-0 py-4 text-base border-b border-solid border-b-slate-500 border-b-opacity-50 text-slate-500">
          <span>Người gửi</span>
          <span>Loại yêu cầu</span>
          <span>Ngày gửi</span>
          <span>Trạng thái</span>
          <span>Hành động</span>
        </div>
        <div>
          {requests.map((request, index) => (
            <div
              key={index}
              className="flex gap-20 px-0 py-4 text-base text-black border-b border-solid border-b-slate-500 border-b-opacity-50"
            >
              <span>{request.sender}</span>
              <span>{request.requestType}</span>
              <span>{request.date}</span>
              <span>{request.status}</span>
              <div className="flex flex-col gap-2">
                <button className="text-sm text-cyan-800 bg-blue-300 rounded-xl cursor-pointer border-[none] h-[21px] w-[70px]">
                  Duyệt
                </button>
                <button className="text-sm text-red-800 bg-rose-400 rounded-xl cursor-pointer border-[none] h-[21px] w-[70px]">
                  Từ chối
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
