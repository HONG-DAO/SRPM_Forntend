import React from "react";

interface CustomButtonProps {
  title: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onClick,
  variant = "primary",
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-600 hover:bg-blue-700";
      case "secondary":
        return "bg-gray-500 hover:bg-gray-600";
      case "danger":
        return "bg-red-600 hover:bg-red-700";
      default:
        return "bg-blue-600 hover:bg-blue-700";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-white font-medium ${getButtonStyle()}`}
    >
      {title}
    </button>
  );
};
