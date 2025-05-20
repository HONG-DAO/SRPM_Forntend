"use client";
import * as React from "react";
import MainLayout from "../layouts/MainLayout";
import { LoginForm } from "../components/Log In Error/LoginFormError";

export default function LoginPage() {
  return (
    <MainLayout>
      <main className="flex flex-col items-center w-full min-h-screen bg-gray-50">
        <header className="mt-20 mb-7">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e7eade11a486dd7ef55e3dcec2ac4a35f5e26e6"
            className="h-[62px] w-[357px] max-sm:w-4/5 max-sm:h-auto"
            alt="Logo"
          />
        </header>
        <section className="flex gap-10 justify-between items-center px-24 py-0 max-md:flex-col max-md:px-5 max-md:py-0">
          <div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/453e0ca17db5de0e06bb80753c9fe9f400687d8e"
              className="object-cover rounded-lg h-[694px] w-[925px] max-md:w-full max-md:h-auto"
              alt="Login background"
            />
          </div>
          <LoginForm />
        </section>
      </main>
    </MainLayout>
  );
}