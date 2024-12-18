"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Dock,
  Calendar,
  ScanLine,
  Users,
  Feather,
  Settings,
  Wallet,
} from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    {
      name: "Dashboard",
      href: "/vote-member",
      icon: <Home className="w-5 h-5" />,
    },
    {
      name: "Tasks",
      href: "/vote-member/tasks",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      name: "Events",
      href: "/vote-member/events",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      name: "Actions",
      href: "/actions",
      icon: <Dock className="w-5 h-5" />,
    },
    {
      name: "Members",
      href: "/members",
      icon: <Users className="w-5 h-5" />,
    },
    {
      name: "Teams",
      href: "/teams",
      icon: <ScanLine className="w-5 h-5" />,
    },
    {
      name: "Wallet",
      href: "/wallet",
      icon: <Wallet className="w-5 h-5" />,
    },
    // {
    //   name: "I Voted!",
    //   href: "/i-voted",
    //   icon: <Users className="w-5 h-5" />,
    // },
    {
      name: "Team Settings",
      href: "/team-settings",
      icon: <Settings className="w-5 h-5" />,
    },
  ];

  return (
    <aside className="h-screen bg-primary p-4 transition-all duration-300 group hover:w-64 w-20 pt-12">
      {/* Sidebar Navigation */}
      <nav>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`flex items-center rounded-md px-4 py-2 ${
                  pathname === link.href
                    ? "bg-white text-primary"
                    : "text-white hover:bg-white hover:text-primary"
                }`}
              >
                {link.icon}
                <span
                  className={`ml-3 hidden group-hover:block transition-opacity`}
                >
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
