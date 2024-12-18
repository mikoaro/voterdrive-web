"use client";

import React from "react";
import Sidebar from "@/app/components/VoteMemberSidebar";
import Header from "@/app/components/Header";
import VoterEvent from "@/app/components/VoterEvent"


export default function Page() {
  return (
    <div className="h-full">
      <div className="fixed top-0 left-0 w-full z-50 shadow-none">
        <Header />
      </div>

      <div className="flex h-full mt-12 ml-12">
        <div className="fixed top-12 left-0 h-full shadow-md">
          <Sidebar />
        </div>

        {/* <main className="flex-1">  */}
        <main className="flex mx-auto justify-center"> 
        <div className="mt-6">
            <VoterEvent/>
        </div>
        </main>
       
      </div>
    </div>
  );
} 
