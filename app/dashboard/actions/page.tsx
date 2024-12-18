"use client";

import React from "react";
import Sidebar from "../../components/Sidebar";
import Actions from "../../components/Actions";
import { ActionsProvider } from "@/context/ActionsContext";

export default function Page() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-white ml-12">
        <div className="p-6">
        <ActionsProvider>
          <Actions />
        </ActionsProvider>
        </div>
      </main>
    </div>
  );
}
