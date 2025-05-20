import React from "react";
import { NavigationBar } from "@cnpm/components/Admin/NavigationBar";
import Header from "@cnpm/components/Header";
import { UserTable } from "@cnpm/components/Admin/UserTable";
import { UserForm } from "@cnpm/components/Admin/UserForm";
import { TransactionApproval } from "@cnpm/components/Admin/TransactionApproval";
import { SearchInput } from "@cnpm/components/Admin/SearchInput";

export const AdminDashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-[18%] bg-white shadow-md min-h-screen">
        <NavigationBar />
      </div>

      {/* Nội dung chính */}
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-y-auto p-4">
          <div className="mb-4">
            <SearchInput placeholder="Tìm kiếm người dùng..." />
          </div>
          <UserTable />
          <UserForm />
          <TransactionApproval />
        </div>
      </div>
    </div>
  );
};