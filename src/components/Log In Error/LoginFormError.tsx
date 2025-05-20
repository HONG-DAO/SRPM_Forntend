"use client";
import React, { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import { FormInput } from "./FormInput";
import { UserIcon, GoogleIcon } from "./Icons";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showError, setShowError] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="px-8 py-8 bg-white rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1),0_10px_15px_rgba(0,0,0,0.1)] w-[448px] max-md:w-full max-md:max-w-md max-sm:p-5">
      <div className="flex flex-col gap-5 items-center mb-6 max-sm:gap-4">
        <div className="flex justify-center items-center w-12 h-12">
          <UserIcon />
        </div>
        <h1 className="text-3xl font-bold text-gray-700 max-sm:text-2xl">
          XIN CHÀO !
        </h1>
      </div>

      {showError && (
        <ErrorMessage message="Đăng nhập không hợp lệ, vui lòng thử l���i" />
      )}

      <div className="flex flex-col gap-6">
        <FormInput
          label="Email"
          type="email"
          placeholder="fe@ut.edu.vn"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormInput
          label="Mật Khẩu"
          type="password"
          placeholder="Nhập Mật Khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-2 items-center text-sm text-gray-700">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember">Ghi nhớ</label>
          </div>
          <button type="button" className="text-sm font-semibold text-teal-700 cursor-pointer">
            Quên mật khẩu
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-6 max-sm:gap-2">
        <button
          type="submit"
          className="p-3.5 w-full text-base font-bold text-white bg-teal-500 rounded-lg cursor-pointer border-[none]"
        >
          Đăng nhập
        </button>

        <button
          type="button"
          className="flex gap-2 justify-center items-center p-3.5 text-base font-bold text-gray-700 bg-white rounded-lg border border-gray-300 border-solid cursor-pointer max-sm:text-sm"
        >
          <GoogleIcon />
          <span>Tiếp tục với Google</span>
        </button>
      </div>

      <div className="flex flex-col gap-2 items-center pt-4 mt-8 border-t border-solid">
        <p className="text-sm text-gray-600">Bạn có tài khoản chưa ?</p>
        <button
          type="button"
          className="p-3.5 w-full text-base font-bold text-teal-700 rounded-lg border border-teal-500 border-solid cursor-pointer max-sm:text-sm"
        >
          Tạo tài khoản
        </button>
      </div>
    </form>
  );
};
