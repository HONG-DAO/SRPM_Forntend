import React from "react";
import { CustomButton } from "./CustomButton";

interface UserData {
  name: string;
  email: string;
  phone: string;
  role: string;
  status: string;
}

const userData: UserData[] = [
  {
    name: "Nguyễn Văn A",
    email: "fe@ut.edu.vn",
    phone: "0000000001",
    role: "Sinh viên",
    status: "Hoạt động",
  },
  // Thêm dữ liệu khác nếu muốn
];

export const UserTable: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 overflow-auto">
      <h2 className="text-xl font-bold mb-4">Bảng danh sách người dùng</h2>
      <div className="min-w-[800px]">
        {/* Header row */}
        <div className="flex bg-gray-100 p-3 font-medium">
          <div className="w-40">Họ tên</div>
          <div className="w-40">Email</div>
          <div className="w-32">Số điện thoại</div>
          <div className="w-32">Vai trò</div>
          <div className="w-32">Trạng thái</div>
          <div className="w-32">Hành động</div>
        </div>

        {/* User rows */}
        <div className="max-h-96 overflow-y-auto">
          {userData.map((user, index) => (
            <div
              key={index}
              className="flex border-b border-gray-200 p-3 items-center"
            >
              <div className="w-40">{user.name}</div>
              <div className="w-40">{user.email}</div>
              <div className="w-32">{user.phone}</div>
              <div className="w-32">{user.role}</div>
              <div className="w-32">{user.status}</div>
              <div className="w-32 flex space-x-2">
                <CustomButton title="Sửa" variant="secondary" />
                <CustomButton title="Xoá" variant="danger" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
