"use client";

import React from "react";

const navigationItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/823bf4beb2774bc99c68daa06d856dec/eab83ce3769a682628746e736e2c44dbf0bdad9e?placeholderIfAbsent=true",
    label: "Trang chủ",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/823bf4beb2774bc99c68daa06d856dec/f3e88bfa9ae998efe3390d97326af3323f959e8e?placeholderIfAbsent=true",
    label: "Thông tin cá nhân",
  },
  {
    icon:'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 0C2.34375 0 1 1.34375 1 3V13C1 14.6562 2.34375 16 4 16H13H14C14.5531 16 15 15.5531 15 15C15 14.4469 14.5531 14 14 14V12C14.5531 12 15 11.5531 15 11V1C15 0.446875 14.5531 0 14 0H13H4ZM4 12H12V14H4C3.44688 14 3 13.5531 3 13C3 12.4469 3.44688 12 4 12ZM5 4.5C5 4.225 5.225 4 5.5 4H11.5C11.775 4 12 4.225 12 4.5C12 4.775 11.775 5 11.5 5H5.5C5.225 5 5 4.775 5 4.5ZM5.5 6H11.5C11.775 6 12 6.225 12 6.5C12 6.775 11.775 7 11.5 7H5.5C5.225 7 5 6.775 5 6.5C5 6.225 5.225 6 5.5 6Z" fill="#2563EB"/></svg>',
    label: "Dự án",
    active: true,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dae94ba2cd9a9672a4bd4c0e474ec122f58df427?placeholderIfAbsent=true&apiKey=348dfa5857644c228c3e6010a2ab82ee",
    label: "Tài trợ",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/823bf4beb2774bc99c68daa06d856dec/08232af02813e185a2f8fc37b028087b250d5b28?placeholderIfAbsent=true",
    label: "Đăng Xuất",
  },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="w-[240px] h-screen bg-gray-50 border-r border-gray-200 flex flex-col">
      {/* Header logo */}
      <header className="flex justify-center items-center h-[80px] border-b border-gray-200">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/823bf4beb2774bc99c68daa06d856dec/f97f13d9cd69d09e5640a65bf4466139ca5ca8ae?placeholderIfAbsent=true"
          alt="Logo"
          className="w-[150px] object-contain"
        />
      </header>

      {/* Navigation */}
      <nav className="mt-4 px-3 flex-1">
        <ul className="space-y-1">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <div
                className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition-all ${
                  item.active
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : "text-slate-600 hover:bg-gray-100"
                }`}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-5 h-5 object-contain"
                />
                <span className="text-sm">{item.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;