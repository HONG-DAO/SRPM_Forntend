import React from "react";

interface IconButtonProps {
  icon: React.ReactNode; // ⚠️ chuyển từ string SVG sang JSX React Element
  label?: string;
  onPress?: () => void;
  isActive?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  onPress,
  isActive = false,
}) => {
  return (
    <button
      onClick={onPress}
      className={`flex flex-row items-center p-3 rounded-lg w-full text-left transition-colors ${
        isActive ? "bg-blue-100" : "hover:bg-gray-100"
      }`}
    >
      <div className="w-6 h-6">{icon}</div>
      {label && (
        <span
          className={`ml-2 text-sm font-medium ${
            isActive ? "text-blue-600" : "text-gray-600"
          }`}
        >
          {label}
        </span>
      )}
    </button>
  );
};
