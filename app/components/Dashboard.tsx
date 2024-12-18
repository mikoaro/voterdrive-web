"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  return (
    <div className="p-8 space-y-6 flex flex-col mx-auto container">
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-600">
              Review useful metrics and generate summary reports for government agency officials and non-profit community organizations.
            </p>
          </div>

          <Avatar className="w-8 h-8">
            <AvatarImage src="/profile.jpg" alt="User Avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </header>

        {/* Metrics Section */}
        <section className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader></CardHeader>
            <CardContent>
              <p className="text-black text-sm font-bold">TOTAL TASKS</p>
              <p className="text-2xl font-bold">12,392</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader></CardHeader>
            <CardContent>
              <p className="text-black text-sm font-bold">PENDING TASKS</p>
              <p className="text-2xl font-bold">1,123</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader></CardHeader>
            <CardContent>
              <p className="text-black text-sm font-bold">PENDING ACTIONS</p>
              <p className="text-2xl font-bold">120</p>
            </CardContent>
          </Card>
        </section>

        {/* Weekly Summary */}
        <section className="grid grid-cols-2 gap-4 mb-8">
          <Card>
            <CardHeader></CardHeader>

            <CardHeader>
              <CardTitle>Weekly Summary</CardTitle>
              <p className="text-gray-500">You’re reviewing a 7-day summary</p>
            </CardHeader>

            <CardContent className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-gray-500 text-xs">ALLOCATED</p>
                <div className="flex gap-7 mt-1">
                  <p className="text-xl font-bold">45</p>
                  <Badge className="text-green-600 bg-green-100 h-4 mt-1">
                    5%
                  </Badge>
                </div>
              </div>

              <div>
                <p className="text-gray-500 text-xs">NEW TASKS</p>
                <div className="flex gap-7 mt-1">
                  <p className="text-xl font-bold">10</p>
                  <Badge className="text-red-600 bg-red-100 h-4 mt-1">
                    12%
                  </Badge>
                </div>
              </div>

              <div>
                <p className="text-gray-500 text-xs">NEW EVENTS</p>
                <div className="flex gap-7 mt-1">
                  <p className="text-xl font-bold">10</p>
                  <Badge className="text-green-600 bg-green-100 h-4 mt-1">
                    5%
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Remaining Balance</CardTitle>
              <p className="text-gray-500">
                You’re reviewing a total available balance
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$5,000</p>
              <Progress value={70} className="mt-2" />
            </CardContent>
          </Card>
        </section>

        {/* Map Section */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>State Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                {/* Replace with a map component */}
                <span>Map Placeholder</span>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
