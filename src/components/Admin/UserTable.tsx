import React from "react";
import { User } from "./types";

interface UserTableProps {
  users: User[];
}

export const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <div className="bg-white rounded-xl border border-solid border-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      <div className="p-6 text-lg font-semibold border-b border-solid bg-slate-50 border-b-slate-200">
        Bảng danh sách người dùng
      </div>
      <div className="p-6 bg-slate-50">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 text-base font-medium text-left border-b border-solid border-b-slate-200 text-slate-500">
                Họ tên
              </th>
              <th className="px-4 py-2 text-base font-medium text-left border-b border-solid border-b-slate-200 text-slate-500">
                Email
              </th>
              <th className="px-4 py-2 text-base font-medium text-left border-b border-solid border-b-slate-200 text-slate-500">
                Số điện thoại
              </th>
              <th className="px-4 py-2 text-base font-medium text-left border-b border-solid border-b-slate-200 text-slate-500">
                Vai trò
              </th>
              <th className="px-4 py-2 text-base font-medium text-left border-b border-solid border-b-slate-200 text-slate-500">
                Trạng thái
              </th>
              <th className="px-4 py-2 text-base font-medium text-left border-b border-solid border-b-slate-200 text-slate-500">
                Hành động
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="p-4 text-sm text-black border-b border-solid border-b-slate-100">
                  {user.name}
                </td>
                <td className="p-4 text-sm text-black border-b border-solid border-b-slate-100">
                  {user.email}
                </td>
                <td className="p-4 text-sm text-black border-b border-solid border-b-slate-100">
                  {user.phone}
                </td>
                <td className="p-4 text-sm text-black border-b border-solid border-b-slate-100">
                  {user.role}
                </td>
                <td className="p-4 text-sm text-black border-b border-solid border-b-slate-100">
                  {user.status}
                </td>
                <td className="p-4 text-sm text-black border-b border-solid border-b-slate-100">
                  <div className="flex gap-2.5">
                    <button className="px-3 py-1 text-sm text-cyan-800 bg-blue-300 rounded-xl cursor-pointer border-[none]">
                      Sửa
                    </button>
                    <button className="px-3 py-1 text-sm text-red-800 bg-rose-400 rounded-xl cursor-pointer border-[none]">
                      Xoá
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
