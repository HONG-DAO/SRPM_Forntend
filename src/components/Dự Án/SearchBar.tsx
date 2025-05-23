"use client";
import React from "react";
import { SearchIcon } from "./Icons";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  className = "w-96",
  placeholder = "Tìm kiếm",
}) => {
  return (
    <div className={`h-[42px] ${className}`}>
      <div className="flex relative items-center px-10 py-0 w-full rounded-lg border border-solid border-slate-200 h-[42px]">
        <div className="absolute left-3 w-4 h-4">
          <SearchIcon />
        </div>
        <span className="text-base leading-6 text-gray-400">{placeholder}</span>
      </div>
    </div>
  );
};
