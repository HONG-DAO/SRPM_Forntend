"use client";
import * as React from "react";
import MainLayout from "../layouts/MainLayout";
import { LoginForm } from "../components/Sign In/LoginForm";

export default function LoginPage() {
  return (
    <MainLayout>
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#f8f9fa] px-2">
        {/* Logo */}
        <div className="w-full flex justify-center mt-8 mb-6">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/68061d1f8c1bc27abf08860af7de53ebd548d464"
            alt="UTH Logo"
            className="h-[45px] object-contain"
          />
        </div>

        {/* Khung chính */}
        <div className="flex w-full max-w-6xl min-h-[440px] rounded-2xl shadow-lg bg-white overflow-hidden">
          {/* Bên trái: Hình ảnh */}
          <div className="w-1/2 bg-white">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/453e0ca17db5de0e06bb80753c9fe9f400687d8e"
              alt="UTH"
              className="w-full h-full object-cover rounded-l-2xl"
            />
          </div>

          {/* Bên phải: Form đăng nhập */}
          <div className="w-1/2 flex items-center justify-center bg-white p-8">
            <div className="w-full max-w-xs">
              <LoginForm />
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}