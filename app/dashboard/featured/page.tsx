"use client";

import React from "react";
import Sidebar from "../../components/Sidebar";
import Featured from "../../components/Featured";
import { FeaturedProvider } from "@/context/FeaturedContext"; // Import the context provider


export default function Page() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-white ml-12">
        <div className="p-6">
        <FeaturedProvider>
          <Featured />
        </FeaturedProvider>
        </div>
      </main>
    </div>
  );
}
