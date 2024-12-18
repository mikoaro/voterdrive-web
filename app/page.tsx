"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  ArrowLeft,
  ArrowRightCircle,
  SendHorizontal,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-medium text-white">
                <Link href="/">VoterDrive</Link>
              </h1>
              <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                BETA
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard"
                className="text-white hover:text-gray-200"
              >
                Dashboard
              </Link>
              <Link
                href="/vote-member"
                className="text-white hover:text-gray-200"
              >
                Vote-Member
              </Link>
              <Link
                href="/our-story"
                className="text-white hover:text-gray-200"
              >
                Our Story
              </Link>
              <Link
                href="/vote-member/history"
                className="text-white hover:text-gray-200"
              >
                Your History
              </Link>
              <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white">
                MI
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-black/20">
        <Image
          src="/montana.webp"
          alt="Wind turbines against blue sky"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <p className="text-white text-center mb-5 max-w-2xl px-12 drop-shadow-lg shadow-black">
            Enhance planning and democracy participation with robust voting and election information
            for America's youth, voters, officials, and community partners
          </p>
          <div className="w-full max-w-xl flex gap-2 bg-white bg-opacity-85 p-2 rounded-3xl">
            <Input
              placeholder="Type a voting and elections related question to start"
              className="bg-white border-none shadow-none bg-opacity-0"
            />
            <Button className="bg-primary hover:bg-blue-800 rounded-3xl">
              <SendHorizontal className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-white text-center mt-5 max-w-2xl px-12">
            or see{" "}
            <Link
              href="/vote-member/1"
              className="underline hover:no-underline"
            >
              what others are saying
            </Link>
          </p>
          <p className="text-white text-sm text-center max-w-2xl px-12 opacity-55">
            VoterDrive VoteGPT can make mistakes. Always make sure to
            double-check important information in its answers.
            <Link
              href="/vote-member/history"
              className="underline hover:no-underline"
            >
              learn more
            </Link>
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-7 bg-white">
        <div className="container mx-auto px-1 flex flex-col justify-center items-center gap-0">
          <h2 className="text-4xl font-bold mb-1 text-primary">How it works</h2>
          <div className="">
            <Image
              src="/home-screen.jpeg"
              alt="VoterDrive-Home"
              width={500}
              height={200}
            />
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t">
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
            <div>© VoterDrive.AI 2024</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
