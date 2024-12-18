"use client";

import React from "react";
import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";
import Dashboard from "../components/Dashboard";

export default function Page() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-50 ml-12">
        {/* <Header /> */}
        <div className="p-6">
          <Dashboard />
        </div>
      </main>
    </div>
  );
}
