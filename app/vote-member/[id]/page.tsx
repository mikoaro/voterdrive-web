"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Share2,
  Menu,
  Building2,
  Users,
  FlaskConical,
  AlertTriangle,
  SendHorizontal,
  MessageSquareText,
  Wallet,
} from "lucide-react";
import Link from "next/link";

export default function ReportPage() {
  return (
    <div className="min-h-screen bg-white my-auto justify-between flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 w-[950px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-medium">VoteGPT</h1>
              <span className="text-sm text-gray-500">by VoterDrive</span>
              <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full">
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
              <Link
                href="/vote-member/history"
                className="text-gray-600 hover:text-gray-900"
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

      {/* Main Content */}
      <main className="container mx-auto px-12 py-8 w-[1000px]">
        <div className="flex gap-8">
          {/* Left Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-gray-900">
                Home
              </Link>
              <span>/</span>
              <span>Report</span>
            </div>

            <h2 className="text-2xl font-bold mb-6">what do you do</h2>

            <div className="flex items-center justify-between mb-8">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
              >
                <Menu className="h-5 w-5" />
                <span>General perspective</span>
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <div className="prose max-w-none">
              <p className="mb-4">
                As a Voting/election expert, my role is to provide information,
                guidance, and support to individuals, organizations, and
                communities on vote-related issues. Here's a breakdown of
                what I do:
              </p>

              <ul className="space-y-4">
                <li>
                  <strong>
                    Stay up-to-date on vote and election research and developments:
                  </strong>{" "}
                  I continuously update my knowledge on the latest voting
                  research, policies, and technologies to provide accurate and
                  informed advice.
                </li>
                <li>
                  <strong>Analyze voting data and trends:</strong> I analyze
                  voting data, such as voters registration, voters public drive,
                  and voting events, to understand the current state of voting and identify emerging trends.
                </li>
                <li>
                  <strong>Assess election risks and vulnerabilities:</strong> I
                  help individuals and organizations assess their
                  voting-related risks and vulnerabilities.
                </li>
                <li>
                  <strong>
                    Develop voting and election strategies:
                  </strong>{" "}
                  Based on the analysis of voters risks and vulnerabilities, I
                  work with individuals and organizations to develop effective
                  voting adaptation and mitigation strategies.
                </li>
                <li>
                  <strong>Provide voters education and awareness:</strong> I
                  educate individuals and communities about voting change, its
                  impacts, and the importance of taking action.
                </li>
                <li>
                  <strong>Collaborate with stakeholders:</strong> I work with
                  governments, businesses, civil society organizations, and
                  other stakeholders to develop and implement voting policies
                  and programs.
                </li>
                <li>
                  <strong>Conduct voting impact assessments:</strong> I conduct
                  assessments to understand the potential impacts of voters
                  change on various sectors.
                </li>
                <li>
                  <strong>Develop voter-resilient plans:</strong> I help
                  individuals and organizations develop plans to build
                  resilience to vote-related hazards.
                </li>
                <li>
                  <strong>Stay engaged with the voters community:</strong> I
                  participate in vote-related conferences, workshops, and
                  online forums to stay informed about the latest developments.
                </li>
              </ul>

              <p className="mt-6">
                Overall, my goal is to provide accurate, reliable, and
                actionable voting information to support informed
                decision-making and voting action.
              </p>
            </div>
          </div>
        </div>

        {/* Conversation Input */}
        <div className="mt-8 max-w-full mx-auto">
          <div className="flex mb-2">
          <MessageSquareText /><h1 className="ml-2 font-bold">Conversation</h1>
          </div>
          <div className="flex gap-2 bg-white border p-1 rounded-md">
            <Input
              placeholder="Type to continue the conversation"
              className="flex-1 bg-opacity-0 border-none shadow-none"
            />
            <Button className="bg-primary hover:bg-gray-500 h-10">
              <SendHorizontal className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            VoterGPT can make mistakes. Always make sure to double-check
            important information in its answers.{" "}
            <Link href="/learn-more" className="underline">
              Learn more
            </Link>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="container px-4 py-4 w-[950px] mx-auto">
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
            <div>© VoterDrive 2024</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
