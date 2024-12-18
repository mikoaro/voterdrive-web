'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Clock, Search, Trash2 } from 'lucide-react'
import Link from "next/link"

interface HistoryItem {
  id: string
  query: string
  date: string
}

export default function HistoryPage() {
  const historyItems: HistoryItem[] = [
    {
      id: "1",
      query: "What are the main causes of global warming?",
      date: "2024-01-15"
    },
    {
      id: "2",
      query: "How does carbon capture technology work?",
      date: "2024-01-14"
    },
    {
      id: "3",
      query: "What is the impact of deforestation on climate change?",
      date: "2024-01-13"
    },
    {
      id: "4",
      query: "Explain the Paris Agreement goals and progress",
      date: "2024-01-12"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-medium">History</h1>
              <Clock className="h-5 w-5 text-gray-500" />
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search history..."
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                Clear All
                <Trash2 className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-4">
          {historyItems.map((item) => (
            <Card key={item.id} className="hover:bg-gray-50 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Link 
                      href={`/dashboard/${item.id}`}
                      className="text-lg font-medium hover:text-green-600 transition-colors"
                    >
                      {item.query}
                    </Link>
                    <p className="text-sm text-gray-500">
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <ArrowRight className="h-4 w-4" />
                    <span className="sr-only">View conversation</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}