"use client";

import React from "react";
import Sidebar from "../../components/Sidebar";
import Members from "../../components/Members";
import { MembersProvider } from "@/context/MembersContext"; // Import the context provider


export default function Page() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-white ml-12">
        <div className="p-6">
        <MembersProvider>
          <Members />
        </MembersProvider>
        </div>
      </main>
    </div>
  );
}
