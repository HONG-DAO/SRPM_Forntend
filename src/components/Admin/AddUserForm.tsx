import React from "react";

export const AddUserForm: React.FC = () => {
  return (
    <div className="p-6 rounded-xl border border-solid bg-slate-50 border-slate-200 w-[317px] max-sm:w-full">
      <div className="flex gap-3 items-center mb-6 text-lg font-medium">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.1666 10.984C20.1666 11.5669 19.6929 12.0399 19.109 12.0399H12.0577V19.0787C12.0577 19.6616 11.5839 20.1346 11 20.1346C10.416 20.1346 9.94229 19.6616 9.94229 19.0787V12.0399H2.89101C2.30707 12.0399 1.83331 11.5669 1.83331 10.984C1.83331 10.4011 2.30707 9.92819 2.89101 9.92819H9.94229V2.88933C9.94229 2.30642 10.416 1.8335 11 1.8335C11.5839 1.8335 12.0577 2.30642 12.0577 2.88933V9.92819H19.109C19.6929 9.92819 20.1666 10.4011 20.1666 10.984Z"
            fill="black"
          />
        </svg>
        <span>Thêm mới tài khoản</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5643 13.875H9.83571C6.06042 13.875 3 16.953 3 20.75C3 21.4403 3.55641 22 4.24286 22H19.1571C19.8436 22 20.4 21.4403 20.4 20.75C20.4 16.953 17.3396 13.875 13.5643 13.875ZM4.90289 20.125C5.20976 17.6619 7.30495 15.75 9.83571 15.75H13.5643C16.0951 15.75 18.1902 17.6619 18.4971 20.125H4.90289ZM11.7 12C14.4457 12 16.6714 9.76137 16.6714 7C16.6714 4.23855 14.4457 2 11.7 2C8.95433 2 6.72857 4.23855 6.72857 7C6.72857 9.76137 8.95433 12 11.7 12ZM11.7 3.875C13.4132 3.875 14.8071 5.27684 14.8071 7C14.8071 8.72309 13.4132 10.125 11.7 10.125C9.98676 10.125 8.59286 8.72309 8.59286 7C8.59286 5.27684 9.98676 3.875 11.7 3.875Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-base text-black">
          Họ tên:.................................................
        </div>
        <div className="text-base text-black">
          Email:...................................................
        </div>
        <div className="text-base text-black">
          Số điện thoại:......................................
        </div>
        <div className="text-base text-black">
          Mật khẩu:.............................................
        </div>
      </div>
      <div className="mt-6">
        <div className="p-2 text-base text-center text-black bg-teal-400 rounded-[8px_8px_0_0]">
          Loại tài khoản
        </div>
        <div className="p-4 bg-blue-400 rounded-none">
          <div className="flex justify-around mb-2.5">
            <button className="p-2.5 text-sm text-black bg-teal-200 rounded-lg cursor-pointer border-[none] shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
              Sinh viên
            </button>
            <button className="p-2.5 text-sm text-black bg-teal-200 rounded-lg cursor-pointer border-[none] shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
              Giảng viên
            </button>
          </div>
          <div className="flex justify-around mb-2.5">
            <button className="p-2.5 text-sm text-black bg-teal-200 rounded-lg cursor-pointer border-[none] shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
              Nhân viên
            </button>
            <button className="p-2.5 text-sm text-black bg-teal-200 rounded-lg cursor-pointer border-[none] shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
              Quản trị viên
            </button>
          </div>
        </div>
        <button className="mx-auto mt-4 mb-0 text-sm bg-blue-400 rounded-xl cursor-pointer border-[none] h-[38px] shadow-[0_2px_2px_rgba(0,0,0,0.25)] text-blue-950 w-[153px]">
          Tạo tài khoản
        </button>
      </div>
    </div>
  );
};
