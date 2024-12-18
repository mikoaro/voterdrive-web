import React from "react";

interface CircularProgressProps {
  value: number; // Progress value (0-100)
  size?: number; // Diameter of the circle
  strokeWidth?: number; // Thickness of the circle stroke
  color?: string; // Custom stroke color
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  size = 100,
  strokeWidth = 8,
  color = "stroke-green", // Default to primary Tailwind color
}) => {
  const radius = (size - strokeWidth) / 2; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Full circle length
  const offset = circumference - (value / 100) * circumference; // Calculate progress offset

  return (
    <div className="relative inline-flex" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90" // Rotate to start progress at the top
      >
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          className="stroke-gray-300" // Tailwind gray color for background
          strokeWidth={strokeWidth}
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          className={`transition-all duration-300 ${color}`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      {/* Centered Text */}
      <div
        className="absolute inset-0 flex items-center justify-center font-semibold"
        style={{ fontSize: size * 0.2 }}
      >
        {value}%
      </div>
    </div>
  );
};

export default CircularProgress;

