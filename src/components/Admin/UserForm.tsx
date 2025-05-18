import React from "react";
import { CustomButton } from "./CustomButton";

export const UserForm: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-4 max-w-md">
      <div className="mb-6">
        <h2 className="text-xl font-bold">Thêm mới tài khoản</h2>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block mb-2">Họ tên:</label>
          <input
            type="text"
            placeholder="Nhập họ tên"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            placeholder="Nhập email"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block mb-2">Số điện thoại:</label>
          <input
            type="tel"
            placeholder="Nhập số điện thoại"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block mb-2">Mật khẩu:</label>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block mb-2">Loại tài khoản</label>
          <div className="flex flex-wrap gap-2">
            <CustomButton title="Sinh viên" variant="secondary" />
            <CustomButton title="Giảng viên" variant="secondary" />
            <CustomButton title="Nhân viên" variant="secondary" />
            <CustomButton title="Quản trị viên" variant="secondary" />
          </div>
        </div>

        <CustomButton title="Tạo tài khoản" />
      </form>
    </div>
  );
};
