import React from "react";
import { CustomButton } from "./CustomButton";

interface Transaction {
  sender: string;
  requestType: string;
  date: string;
  status: string;
}

const transactions: Transaction[] = [
  {
    sender: "Nguyễn Văn A",
    requestType: "Đăng ký đề tài",
    date: "12/05/2025",
    status: "Chờ duyệt",
  },
  // Bạn có thể thêm các transaction khác ở đây
];

export const TransactionApproval: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mt-4 overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">Phê duyệt giao dịch & hoạt động</h2>
      <table className="min-w-full text-left">
        <thead className="bg-gray-100 text-sm font-medium text-gray-700">
          <tr>
            <th className="px-4 py-2 w-40">Người gửi</th>
            <th className="px-4 py-2 w-40">Loại yêu cầu</th>
            <th className="px-4 py-2 w-32">Ngày gửi</th>
            <th className="px-4 py-2 w-32">Trạng thái</th>
            <th className="px-4 py-2 w-40">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="border-b text-sm">
              <td className="px-4 py-2">{transaction.sender}</td>
              <td className="px-4 py-2">{transaction.requestType}</td>
              <td className="px-4 py-2">{transaction.date}</td>
              <td className="px-4 py-2">{transaction.status}</td>
              <td className="px-4 py-2">
                <div className="flex space-x-2">
                  <CustomButton title="Duyệt" />
                  <CustomButton title="Từ chối" variant="danger" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
