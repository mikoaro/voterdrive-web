"use client";

import React from "react";
import Sidebar from "../../components/Sidebar";
import Events from "../../components/Events";
import { EventsProvider } from "@/context/EventsContext"; // Import the context provider


export default function Page() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-white ml-12">
        <div className="p-6">
        <EventsProvider>
          <Events />
        </EventsProvider>
        </div>
      </main>
    </div>
  );
}
