"use client";

import React from "react";
import Sidebar from "../../components/Sidebar";
import Tasks from "@/app/components/Tasks";
import { TasksProvider } from "@/context/TasksContext"; // Import the context provider


export default function Page() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-white ml-12">
        <div className="p-6">
        <TasksProvider>
          <Tasks />
        </TasksProvider>
        </div>
      </main>
    </div>
  );
}
