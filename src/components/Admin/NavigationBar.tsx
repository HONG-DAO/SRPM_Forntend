import React from "react";

interface NavigationItem {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const navigationItems: NavigationItem[] = [
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width="16" height="16" stroke="#E5E7EB" />
        <path
          d="M2 2C2 1.44687 1.55313 1 1 1C0.446875 1 0 1.44687 0 2V12.5C0 13.8813 1.11875 15 2.5 15H15C15.5531 15 16 14.5531 16 14C16 13.4469 15.5531 13 15 13H2.5C2.225 13 2 12.775 2 12.5V2Z"
          fill="#475569"
        />
      </svg>
    ),
    label: "Trang chủ",
  },
  {
    icon: (
      <svg
        width="18"
        height="21"
        viewBox="0 0 18 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.7037 11C11.4506 11 13.6772 8.76137 13.6772 6C13.6772 3.23863 11.4506 1 8.7037 1C5.95706 1 3.73016 3.23863 3.73016 6C3.73016 8.76137 5.95706 11 8.7037 11Z"
          fill="#2563EB"
        />
      </svg>
    ),
    label: "Quản lý người dùng",
    isActive: true,
  },
  // Thêm các mục khác nếu cần
];

export const NavigationBar: React.FC = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen p-4">
      <div className="mb-8">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/df96a84a40f0094d24945d32e2a889a7403ca83d"
          alt="Logo"
          className="w-32 h-8 object-contain"
        />
      </div>
      <nav className="flex flex-col space-y-2">
        {navigationItems.map((item, idx) => (
          <button
            key={idx}
            className={`flex items-center p-2 rounded ${
              item.isActive
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={item.onClick}
            type="button"
          >
            <div className="w-6 h-6">{item.icon}</div>
            <span className="ml-3 text-base font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};
