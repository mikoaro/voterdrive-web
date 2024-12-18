"use client";

import React from "react";
import Sidebar from "../components/VoteMemberSidebar";
import Header from "../components/Header";
import VoteMember from "../components/VoteMember";
import Leaderboard from "../components/LeaderBoard";

const leaders = [
  {
    id: 1,
    name: "Sarah Ballot",
    points: 395,
    avatar: "/profile1.png",
  },
  {
    id: 2,
    name: "Jordan Voter",
    points: 355,
    avatar: "/profile2.jpg",
  },
  {
    id: 3,
    name: "Alex Register",
    points: 320,
    avatar: "/profile3.jpeg",
  },
];
const members = [
  {
    id: 1,
    name: "Sarah Ballot",
    points: 355,
    avatar: "/profile1.png",
  },
  {
    id: 2,
    name: "Jordan Voter",
    points: 355,
    avatar: "/profile2.jpg",
  },
  {
    id: 3,
    name: "Alex Register",
    points: 355,
    avatar: "/profile3.jpeg",
  },
];

const teams = [
  {
    id: 1,
    name: "Team 1",
    members: 11,
    points: 3900,
    logo: "/team1.png",
  },
  {
    id: 2,
    name: "Team 2",
    members: 11,
    points: 3625,
    logo: "/team2.png",
  },
  {
    id: 3,
    name: "Team 3",
    members: 10,
    points: 3495,
    logo: "/team3.jpeg",
  },
];

export default function Page() {
  return (
    <div className="h-screen">
      <div className="fixed top-0 left-0 w-full z-50 shadow-none">
        <Header />
      </div>

      <div className="flex h-screen mt-12 ml-12">
        <div className="fixed top-12 left-0 h-full shadow-md">
          <Sidebar />
        </div>

        {/* <main className="flex-1">  */}
        <main className="flex mx-auto"> 
          <div className="pt-12">
            <VoteMember />
          </div>
          <aside className="mt-12">
          <Leaderboard leaders={leaders} members={members} teams={teams} />
        </aside>
        </main>
       
      </div>
    </div>
  );
}
