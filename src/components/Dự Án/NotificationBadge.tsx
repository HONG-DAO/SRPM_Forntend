"use client";
import React from "react";

interface NotificationBadgeProps {
  count: number;
  className?: string;
}

export const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  count,
  className = "",
}) => {
  return (
    <div
      className={`absolute w-4 h-4 text-xs text-white bg-red-500 rounded-full flex items-center justify-center ${className}`}
    >
      {count}
    </div>
  );
};
