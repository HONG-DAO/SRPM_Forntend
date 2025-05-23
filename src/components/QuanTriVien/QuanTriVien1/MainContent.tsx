import React from "react";
import Header from "../../Header";
import { UserRoleFilter } from "./UserRoleFilter";
import { UserList } from "../QuanTriVien2/UserList";

export const MainContent = () => {
  return (
    <main className="grow w-full border border-solid bg-black bg-opacity-0 border-slate-200 pb-[521px] max-md:pb-24 max-md:max-w-full">
      <Header />
      <div className="mt-6 ml-6 max-w-full w-[835px]">
        <UserRoleFilter />
        <UserList />
      </div>
    </main>
  );
};
