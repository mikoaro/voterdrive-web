"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import Link from "next/link";

interface HistoryItem {
  id: string;
  question: string;
  createdAt: string;
}

export default function HistoryPage() {
  const historyItems: HistoryItem[] = [
    {
      id: "1",
      question: "Explain the voting process for a first-time voter...",
      createdAt: "40 minutes ago",
    },
    {
      id: "2",
      question: "How can I ensure my vote is counted and secure?",
      createdAt: "40 minutes ago",
    },
    {
      id: "3",
      question: "what do you do",
      createdAt: "about 1 hour ago",
    },
    {
      id: "4",
      question: "Summarize the key issues in the current political debate",
      createdAt: "about 8 hours ago",
    },
    {
      id: "5",
      question:
        "Provide a detailed profile of the candidates running in the upcoming election...",
      createdAt: "about 8 hours ago",
    },
  ];

  const handleDelete = (id: string) => {
    // Handle deletion logic here
    console.log("Delete item:", id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-medium">
                <Link href="/">VoteGPT</Link>
              </h1>
              <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                BETA
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/our-story"
                className="text-gray-600 hover:text-gray-900"
              >
                Our Story
              </Link>
              <div className="border-b-2 border-green-500">
                <span className="text-gray-900">Your History</span>
              </div>
              <div className="h-8 w-8 bg-purple-500 rounded-full flex items-center justify-center text-white">
                MI
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your History</h1>

        <div className="max-w-3xl mx-auto space-y-3">
          {historyItems.map((item) => (
            <Card key={item.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Link
                    href={`/conversation/${item.id}`}
                    className="text-lg font-medium hover:text-green-600 transition-colors"
                  >
                    {item.question}
                  </Link>
                  <p className="text-sm text-gray-500">
                    Created {item.createdAt}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  <Trash2 className="h-5 w-5" />
                  <span className="sr-only">Delete conversation</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:underline">
                Privacy policy
              </Link>
              <Link href="/disclaimer" className="hover:underline">
                Disclaimer
              </Link>
              <Link href="/terms" className="hover:underline">
                Terms of use
              </Link>
            </div>
            <div>© Erasmus.AI 2024</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
