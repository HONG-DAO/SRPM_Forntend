import React from "react";
import { NavigationBar } from "@cnpm/components/Admin/NavigationBar";
import Header from "@cnpm/components/Header";
import { UserTable } from "@cnpm/components/Admin/UserTable";
import { UserForm } from "@cnpm/components/Admin/UserForm";
import { TransactionApproval } from "@cnpm/components/Admin/TransactionApproval";
import { SearchInput } from "@cnpm/components/Admin/SearchInput";

export const AdminDashboard: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-1">
        <NavigationBar />
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
    </div>
  );
};
