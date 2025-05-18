import React from "react";
import { RoleActionButton } from "./RoleActionButton";

interface User {
  name: string;
  email: string;
  role: string;
}

const users: User[] = [
  { name: "Nguyên Văn A", email: "fe@ut.edu.vn", role: "Sinh viên" },
  { name: "Trần Thị B", email: "b@gv.ut.edu.vn", role: "Giảng viên" },
  { name: "Lê Văn C", email: "c@st.ut.edu.vn", role: "Chưa phân quyền" },
];

export const UserList = () => {
  return (
    <section className="pt-6 mt-6 max-w-full rounded-xl border border-solid border-slate-200 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] w-[793px]">
      <h2 className="z-10 pb-3.5 ml-5 max-w-full text-lg font-medium leading-none text-black bg-black bg-opacity-0 w-[221px] max-md:pr-5 max-md:ml-2.5">
        Danh sách
      </h2>
      <div className="py-5 mt-2.5 rounded-none border border-solid border-slate-200 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:max-w-full">
        <div className="flex flex-col px-7 w-full font-medium max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-center self-start text-base leading-none text-slate-500 max-md:max-w-full">
            <span className="self-stretch my-auto">Họ tên</span>
            <span className="self-stretch my-auto">Email</span>
            <span className="self-stretch my-auto">Vai trò</span>
            <span className="self-stretch my-auto">Thao tác</span>
          </div>
          <hr className="shrink-0 mt-5 h-0.5 border border-solid border-slate-500 border-opacity-50 max-md:max-w-full" />

          {users.map((user, index) => (
            <div key={index} className="mt-2.5">
              <div className="flex flex-wrap gap-24 justify-between items-start max-w-full text-black w-[680px]">
                <span>{user.name}</span>
                <span>{user.email}</span>
                <span>{user.role}</span>
                <div className="flex flex-col gap-2.5">
                  <RoleActionButton type="assign" />
                  <RoleActionButton type="revoke" />
                </div>
              </div>
              <hr className="shrink-0 mt-3 h-0.5 border border-solid border-slate-500 border-opacity-50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
