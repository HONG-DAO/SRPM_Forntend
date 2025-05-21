"use client";
import React from "react";
import Sidebar from "@cnpm/components/Sidebar";
import Header from "@cnpm/components/Header";
import { UserTable } from "../components/Admin/UserTable";
import { AddUserForm } from "../components/Admin/AddUserForm";
import { ApprovalSection } from "../components/Admin/ApprovalSection";
import { User, ApprovalRequest } from "../components/Admin/types";

const mockUsers: User[] = [
  {
    name: "Nguyễn Văn A",
    email: "fe@ut.edu.vn",
    phone: "0000000001",
    role: "Sinh viên",
    status: "Hoạt động",
  },
  {
    name: "Trần Thị B",
    email: "b@gv.ut.edu.vn",
    phone: "0000000002",
    role: "Giảng viên",
    status: "Hoạt động",
  },
  {
    name: "Lê Văn C",
    email: "c@st.ut.edu.vn",
    phone: "0000000003",
    role: "Nhân viên",
    status: "Hoạt động",
  },
  {
    name: "Bùi Bảo D",
    email: "d@it.ut.edu.vn",
    phone: "0000000004",
    role: "Quản trị viên",
    status: "Hoạt động",
  },
];

const mockRequests: ApprovalRequest[] = [
  {
    sender: "Nguyên Văn A",
    requestType: "Đăng ký đề tài",
    date: "12/05/2025",
    status: "Chờ duyệt",
  },
  {
    sender: "Trần Thị B",
    requestType: "Cập nhật hồ sơ",
    date: "13/05/2025",
    status: "Chờ duyệt",
  },
];

export const InputDesign: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 max-sm:flex-col">
      <Sidebar />
      <div className="flex-1 bg-slate-50 max-md:p-4">
        <Header />
        <main className="p-6">
          <div className="flex gap-8 mb-6 max-md:flex-col">
            <div className="relative w-96 max-md:w-full">
              <div className="mr-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 6.5C13 7.93437 12.5344 9.25938 11.75 10.3344L15.7063 14.2937C16.0969 14.6844 16.0969 15.3188 15.7063 15.7094C15.3156 16.1 14.6812 16.1 14.2906 15.7094L10.3344 11.75C9.25938 12.5375 7.93437 13 6.5 13C2.90937 13 0 10.0906 0 6.5C0 2.90937 2.90937 0 6.5 0C10.0906 0 13 2.90937 13 6.5ZM6.5 11C7.09095 11 7.67611 10.8836 8.22208 10.6575C8.76804 10.4313 9.26412 10.0998 9.68198 9.68198C10.0998 9.26412 10.4313 8.76804 10.6575 8.22208C10.8836 7.67611 11 7.09095 11 6.5C11 5.90905 10.8836 5.32389 10.6575 4.77792C10.4313 4.23196 10.0998 3.73588 9.68198 3.31802C9.26412 2.90016 8.76804 2.56869 8.22208 2.34254C7.67611 2.1164 7.09095 2 6.5 2C5.90905 2 5.32389 2.1164 4.77792 2.34254C4.23196 2.56869 3.73588 2.90016 3.31802 3.31802C2.90016 3.73588 2.56869 4.23196 2.34254 4.77792C2.1164 5.32389 2 5.90905 2 6.5C2 7.09095 2.1164 7.67611 2.34254 8.22208C2.56869 8.76804 2.90016 9.26412 3.31802 9.68198C3.73588 10.0998 4.23196 10.4313 4.77792 10.6575C5.32389 10.8836 5.90905 11 6.5 11Z"
                    fill="#94A3B8"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm người dùng..."
                className="px-10 py-0 w-full text-base rounded-lg border border-solid border-slate-200 h-[42px]"
              />
            </div>
            <div className="flex gap-4 items-center max-md:w-full">
              <span className="text-base text-slate-600">Loại tài khoản</span>
              <div className="flex gap-7 text-base text-black">
                <span>Tất cả</span>
                <span>Sinh viên</span>
                <span>Giảng viên</span>
                <span>Nhân viên</span>
                <span>Quản trị viên</span>
              </div>
            </div>
          </div>
          <UserTable users={mockUsers} />
          <div className="flex gap-6 mt-6 bottom-[section] max-sm:flex-col">
            <AddUserForm />
            <ApprovalSection requests={mockRequests} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default InputDesign;