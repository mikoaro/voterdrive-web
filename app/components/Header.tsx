"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Chrome, CalendarPlus2, Search, MapPin } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-primary shadow-sm p-4">
      <div className="flex items-center text-white px-3">
        <Chrome className="w-8 h-8" />
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-medium text-white">
            <Link href="/">VoterDrive</Link>
          </h1>
          <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
            BETA
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-5 mr-4">
        <MapPin className="w-6 h-6 text-white" />
        <Search className="w-6 h-6 text-white" />
        <CalendarPlus2 className="w-6 h-6 text-white" />
        </div>
        <Avatar className="w-10 h-10">
          <AvatarImage src="/profile2.jpg" alt="User Avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="font-bold text-white">Jordan Voter</p>
          <p className="text-sm text-white">355 pts</p>
        </div>
      </div>
    </header>
  );
}
