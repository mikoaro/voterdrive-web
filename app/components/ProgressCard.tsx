"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProgressCardProps {
  progress: number; // Progress percentage (0-100)
  tasks: { title: string; completed: boolean }[]; // Task list
}

const ProgressCard: React.FC<ProgressCardProps> = ({ progress, tasks }) => {
  const remainingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <Card className="p-4 w-full max-w-md mx-auto">
      {/* Header */}
      <CardHeader className="flex justify-between items-center">
        <div>
          <CardTitle>Task completion status.</CardTitle>
        </div>
        <Badge variant="outline">Tasks Left: {remainingTasks}</Badge>
      </CardHeader>

      {/* Circular Progress */}
      <CardContent>
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            {/* Circular Progress */}
            <svg
              className="transform -rotate-90"
              width="120"
              height="120"
              viewBox="0 0 120 120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="60"
                cy="60"
                r="54"
                stroke="#e5e7eb"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="60"
                cy="60"
                r="54"
                stroke="blue"
                strokeWidth="12"
                fill="none"
                strokeDasharray={2 * Math.PI * 54}
                strokeDashoffset={2 * Math.PI * 54 - (progress / 100) * 2 * Math.PI * 54}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
              {progress}%
            </div>
          </div>
        </div>

        {/* Task List */}
        <ul className="space-y-3">
          {tasks.map((task, index) => (
            <li key={index} className="flex items-center space-x-2">
              <div
                className={`w-5 h-5 flex items-center justify-center rounded-full ${
                  task.completed ? "bg-blue-500" : "bg-gray-300"
                } text-white text-sm`}
              >
                {task.completed && "✓"}
              </div>
              <p>
                {task.title}
              </p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProgressCard;
