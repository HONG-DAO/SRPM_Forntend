"use client";
import * as React from "react";
import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/Profile/Sidebar";
import Header from "../components/Header";
import { UserDetailsCard } from "../components/Profile/UserDetailsCard";
import { ResearchInfoCard } from "../components/Profile/ResearchInfoCard";

const ProfilePage: React.FC = () => {
  return (
    <MainLayout>
      <main className="overflow-hidden bg-white rounded-lg">
        <div className="w-full bg-black bg-opacity-0 max-md:max-w-full">
          <div className="py-0.5 w-full border border-solid bg-slate-50 border-slate-200 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-[18%] max-md:ml-0 max-md:w-full">
                <Sidebar />
              </div>

              <div className="ml-5 w-[82%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-center pb-52 mx-auto mb-52 w-full bg-slate-200 bg-opacity-0 max-md:pb-24 max-md:max-w-full">
                  <Header />

                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8abed92c5361a5449f407906e028f52aee28e22?placeholderIfAbsent=true&apiKey=348dfa5857644c228c3e6010a2ab82ee"
                    alt="Profile"
                    className="object-contain mt-10 max-w-full aspect-square w-[150px] max-md:mt-10"
                  />

                  <div className="mt-16 w-full max-w-[984px] max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                      <div className="w-6/12 max-md:ml-0 max-md:w-full">
                        <UserDetailsCard />
                      </div>
                      <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <ResearchInfoCard />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default ProfilePage;
