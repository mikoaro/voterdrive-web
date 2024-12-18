"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Layers, ListTodo, Share2 } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const metrics = [
  {
    title: "Total Tasks",
    value: "20",
    icon: Share2,
  },
  {
    title: "Tasks Completed",
    value: "10",
    icon: ListTodo,
  },
  {
    title: "Categories",
    value: "5",
    icon: Layers,
  },
];

const performanceData = [
  { date: "12-05", value: 8 },
  { date: "13-05", value: 6 },
  { date: "14-05", value: 4 },
  { date: "15-05", value: 5 },
  { date: "16-05", value: 5 },
  { date: "17-05", value: 5 },
  { date: "18-05", value: 1 },
];

const chartConfig = {
  value: {
    label: "value",
    color: "#2563eb",
  },
 
} satisfies ChartConfig;

export default function DashboardMetrics() {
  const maxValue = Math.max(...performanceData.map((d) => d.value));

  return (
<div className="mt-5 space-y-6">
      <h1 className="font-bold text-xl">Overall Metrics</h1>
      {/* Metrics Cards */}
        <div className="grid gap-4 md:grid-cols-3">
            {metrics.map((metric, index) => (
          <Card key={index} className="bg-blue-500 text-white">
            <CardContent className="flex items-center justify-between p-6">
              <div className="space-y-1">
                <p className="text-4xl font-bold">{metric.value}</p>
                <p className="text-sm opacity-90">{metric.title}</p>
              </div>
              <div className="bg-white/20 p-3 rounded-full">
                <metric.icon className="w-6 h-6" />
              </div>
            </CardContent>
          </Card>
         ))}
        </div>

      {/* Performance Chart */}
    <div className="space-y-8">
        <Card className="p-8 mt-12">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl mb-3">Daily Performance</h1>
                <p className="text-sm text-muted-foreground">Last 7 days</p>
            </div>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full p-10">
                <BarChart accessibilityLayer data={performanceData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                    dataKey="date"
                    tickLine={true}
                    tickMargin={10}
                    axisLine={true}
                    />

                    <YAxis
                    dataKey="value"
                    tickLine={true}
                    tickMargin={10}
                    axisLine={true}
                    />
                    <Bar dataKey="value" fill="var(--color-value)" radius={4} />
                </BarChart>
            </ChartContainer>
        </Card>
    </div>
</div>
  );
}
