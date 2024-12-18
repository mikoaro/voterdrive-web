"use client";

import React from "react";
import Sidebar from "../../../components/Sidebar";
import CreateActions from "../../../components/CreateActions";
import { ActionsProvider } from "@/context/ActionsContext";

export default function Page() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 ml-12">
        <div className="p-6">
          <ActionsProvider>
          <CreateActions />
          </ActionsProvider>
        </div>
      </main>
    </div>
  );
}
