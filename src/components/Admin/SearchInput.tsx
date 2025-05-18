import React from "react";

interface SearchInputProps {
  placeholder: string;
  onChangeText?: (text: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  onChangeText,
}) => {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-slate-400"
      >
        <path
          d="M13 6.5C13 7.93437 12.5344 9.25938 11.75 10.3344L15.7063 14.2937C16.0969 14.6844 16.0969 15.3188 15.7063 15.7094C15.3156 16.1 14.6812 16.1 14.2906 15.7094L10.3344 11.75C9.25938 12.5375 7.93437 13 6.5 13C2.90937 13 0 10.0906 0 6.5C0 2.90937 2.90937 0 6.5 0C10.0906 0 13 2.90937 13 6.5Z"
          fill="#94A3B8"
        />
      </svg>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChangeText?.(e.target.value)}
        className="ml-2 flex-1 bg-transparent text-gray-700 placeholder:text-slate-400 focus:outline-none"
      />
    </div>
  );
};
