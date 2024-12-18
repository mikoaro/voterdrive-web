"use client";

import React from "react";
import Sidebar from "../../components/Sidebar";
import Events from "../../components/Events";
import { EventsProvider } from "@/context/EventsContext";

export default function Page({ Component, pageProps }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 ml-12">
        <div className="p-6">
          <EventsProvider>
            <Events {...pageProps} />
          </EventsProvider>
        </div>
      </main>
    </div>
  );
}
