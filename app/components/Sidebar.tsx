"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Dock,
  Calendar,
  ScanLine,
  ShoppingBasket,
  Chrome,
  TicketPercent,
  Users,
  Feather,
  Wallet,
} from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <Home className="w-5 h-5" />,
    },
    {
      name: "Wallet",
      href: "/dashboard/wallet",
      icon: <Wallet className="w-5 h-5" />,
    },
    {
      name: "Featured",
      href: "/dashboard/featured",
      icon: <Feather className="w-5 h-5" />,
    },
    {
      name: "Members",
      href: "/dashboard/members",
      icon: <Users className="w-5 h-5" />,
    },
    {
      name: "Tasks",
      href: "/dashboard/tasks",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      name: "Events",
      href: "/dashboard/events",
      icon: <TicketPercent className="w-5 h-5" />,
    },
    {
      name: "Actions",
      href: "/dashboard/actions",
      icon: <Calendar className="w-5 h-5" />,
    },
  ];

  return (
    <aside className="bg-primary p-4 transition-all duration-300 group hover:w-64 w-20 fixed top-0 left-0 h-full shadow-md z-50">
      {/* Sidebar Header */}
      <div className="flex items-center text-white mb-8 px-3">
        <Chrome className="w-8 h-8" />
        <span className="ml-3 text-lg font-bold hidden group-hover:block transition-opacity">
        <div className="flex items-center gap-2">
              <h1 className="text-xl font-medium text-white">
                <Link href="/">VoterDrive</Link>
              </h1>
              <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                BETA
              </span>
        </div>
        </span>
       
      </div>

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
