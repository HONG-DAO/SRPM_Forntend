"use client";

import React from "react";

interface StatusIndicatorProps {
  status: "good" | "average" | "poor";
  label: string;
  showIcon?: boolean;
  className?: string;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status,
  label,
  showIcon = false,
  className = "",
}) => {
  const getStatusStyles = () => {
    switch (status) {
      case "good":
        return "bg-green-200";
      case "average":
        return "bg-yellow-100";
      case "poor":
        return "bg-rose-300";
      default:
        return "bg-zinc-300";
    }
  };

  return (
    <div className={`flex gap-3.5 ${className}`}>
      <div
        className={`flex shrink-0 rounded-full h-[23px] w-[23px] ${getStatusStyles()}`}
      />
      <div className="my-auto">{label}</div>
      {showIcon && (
        <img
          src="https://cdn.builder.io/api/v1/image/assets/823bf4beb2774bc99c68daa06d856dec/40274b722d9dbb54ac71371c7a7ba0ebfb894b86?placeholderIfAbsent=true"
          className="object-contain shrink-0 w-6 aspect-square"
          alt="status icon"
        />
      )}
    </div>
  );
};

export default StatusIndicator;
