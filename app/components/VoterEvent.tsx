"use client";

import React, { useState } from "react";
import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Grid, List, Star, Edit, Trash, Calendar, MapPin } from "lucide-react";

interface Event {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  startTime: string;
  endTime: string;
  sponsoredBy: "";
  specificAudiences: string;
  ticketFee: number;
  location: string;
  city: string;
  state: string;
  category: string;
  onoffType: string;
}

export default function Header() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Student Organization Voter Registration Drive",
      description:
        "This event will be a collaboration with all Texas Law student organizations that are interested in registering voters. The event will take place in the law school atrium. Interested student organization can sign up to table here: https://docs.google.com/spreadsheets/d/1n5AeF4l_noE2xPNxUvdRknM8Ad8ZaJp735iu1PD5pPk/edit?gid=650339494#gid=650339494.",
      imageUrl:
        "https://checkout.request.network/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1470229722913-7c0e2dbbafd3&w=1920&q=75",
      date: "September 25, 2025",
      startTime: "2025-04-23T18:25:43.511Z",
      endTime: "2025-04-23T18:25:43.511Z",
      sponsoredBy: [
        "Student Affairs Office",
        "Thurgood Marshall Legal Society",
        "Law Students For Black Lives",
      ],
      specificAudiences: "Texas Law students",
      ticketFee: 0.0,
      location: "The Law School Atrium",
      city: "Austin",
      state: "Texas",
      category: "Voter Education",
      onoffType: "In Person",
    },
    {
      id: 2,
      title: "Youth Music Festival for Voter Awareness",
      description:
        "A live music event featuring local artists to promote voter registration among young people. Free voter education resources and registration booths will be available.",
      imageUrl:
        "https://checkout.request.network/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1470229722913-7c0e2dbbafd3&w=1920&q=75",
      date: "October 3, 2025",
      startTime: "2025-10-03T16:00:00.000Z",
      endTime: "2025-10-03T20:00:00.000Z",
      sponsoredBy: ["Civic Engagement Alliance", "Local Artists Guild"],
      specificAudiences: "Young voters under 30 in New York City",
      ticketFee: 0.0,
      location: "Central Park",
      city: "New York",
      state: "NY",
      category: "Voter Registration",
      onoffType: "In Person",
    },
    {
      id: 3,
      title: "College Voter Registration Carnival",
      description:
        "A fun-filled carnival with games, food, and voter registration drives aimed at college students. Learn how to register to vote and participate in democracy.",
      imageUrl:
        "https://checkout.request.network/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1470229722913-7c0e2dbbafd3&w=1920&q=75",
      date: "September 30, 2025",
      startTime: "2025-09-30T12:00:00.000Z",
      endTime: "2025-09-30T18:00:00.000Z",
      sponsoredBy: ["University Student Union", "State Election Office"],
      specificAudiences: "Students from Michigan universities",
      ticketFee: 0.0,
      location: "University of Michigan Campus Green",
      city: "Ann Arbor",
      state: "MI",
      category: "Voter Education",
      onoffType: "In Person",
    },
    {
      id: 4,
      title: "Social Media & Voter Advocacy Workshop",
      description:
        "A workshop to teach youth how to leverage social media to advocate for voter registration and participation. Includes voter registration stations on-site.",
      imageUrl:
        "https://checkout.request.network/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1470229722913-7c0e2dbbafd3&w=1920&q=75",
      date: "October 10, 2025",
      startTime: "2025-10-10T14:00:00.000Z",
      endTime: "2025-10-10T17:00:00.000Z",
      sponsoredBy: [
        "Digital Democracy Initiative",
        "Youth Advocates of Florida",
      ],
      specificAudiences:
        "Young influencers and tech-savvy individuals under 30",
      ticketFee: 0.0,
      location: "TechHub Conference Center",
      city: "Miami",
      state: "FL",
      category: "Technology & Advocacy",
      onoffType: "In Person",
    },
    {
      id: 5,
      title: "Sports for Votes: Basketball Tournament & Registration",
      description:
        "A community basketball tournament encouraging youth voter registration. Teams must have at least 75% registered voters to participate.",
      imageUrl:
        "https://checkout.request.network/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1470229722913-7c0e2dbbafd3&w=1920&q=75",
      date: "October 15, 2025",
      startTime: "2025-10-15T09:00:00.000Z",
      endTime: "2025-10-15T17:00:00.000Z",
      sponsoredBy: [
        "City Parks and Recreation",
        "National Voter Engagement Program",
      ],
      specificAudiences: "Youth under 30 in the Chicago area",
      ticketFee: 0.0,
      location: "United Center",
      city: "Chicago",
      state: "IL",
      category: "Sports & Recreation",
      onoffType: "In Person",
    },
    {
      id: 6,
      title: "High School Senior Voter Day",
      description:
        "An event for high school seniors to learn about voter registration and the importance of civic participation. Includes a keynote by a prominent civic leader.",
      imageUrl:
        "https://checkout.request.network/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1470229722913-7c0e2dbbafd3&w=1920&q=75",
      date: "October 20, 2025",
      startTime: "2025-10-20T10:00:00.000Z",
      endTime: "2025-10-20T15:00:00.000Z",
      sponsoredBy: [
        "National Civic Education Foundation",
        "Local School Districts",
      ],
      specificAudiences: "High school seniors in Los Angeles County",
      ticketFee: 0.0,
      location: "Los Angeles Convention Center",
      city: "Los Angeles",
      state: "LA",
      category: "Youth Education",
      onoffType: "In Person",
    },
    {
      id: 7,
      title: "Community Block Party for Voter Awareness",
      description:
        "A vibrant block party featuring food trucks, live DJs, and voter registration stations. Attendees can learn about their voting rights in a fun, relaxed setting.",
      imageUrl:
        "https://checkout.request.network/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1470229722913-7c0e2dbbafd3&w=1920&q=75",
      date: "October 7, 2025",
      startTime: "2025-10-07T16:00:00.000Z",
      endTime: "2025-10-07T20:00:00.000Z",
      sponsoredBy: [
        "Neighborhood Civic Action Group",
        "Local Businesses Coalition",
      ],
      specificAudiences: "Youth in urban neighborhoods, including non-students",
      ticketFee: 0.0,
      location: "Downtown Square",
      city: "Atlanta",
      state: "GA",
      category: "Community Event",
      onoffType: "In Person",
    },
    {
      id: 8,
      title: "Young Workers' Voter Fair",
      description:
        "An event for young workers and trade apprentices to learn about voter registration and the issues that affect them. Includes guest speakers and live demonstrations.",
      imageUrl:
        "https://checkout.request.network/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1470229722913-7c0e2dbbafd3&w=1920&q=75",
      date: "October 14, 2025",
      startTime: "2025-10-14T13:00:00.000Z",
      endTime: "2025-10-14T17:00:00.000Z",
      sponsoredBy: ["State Labor Department", "Young Professionals Network"],
      specificAudiences:
        "Youth employed in trades, services, and other industries",
      ticketFee: 0.0,
      location: "Union Hall",
      city: "Cleveland",
      state: "OH",
      category: "Employment & Workforce",
      onoffType: "In Person",
    },
    {
      id: 9,
      title: "Rural Community Cookout and Voter Drive",
      description:
        "A community cookout aimed at engaging young people in rural areas. Includes voter education, registration stations, and discussions on rural issues.",
      imageUrl:
        "https://checkout.request.network/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1470229722913-7c0e2dbbafd3&w=1920&q=75",
      date: "October 21, 2025",
      startTime: "2025-10-21T11:00:00.000Z",
      endTime: "2025-10-21T15:00:00.000Z",
      sponsoredBy: ["Farmers for Democracy", "Local Agricultural Cooperatives"],
      specificAudiences: "Rural youth, including those who are non-students",
      ticketFee: 0.0,
      location: "Community Park",
      city: "Des Moines",
      state: "IA",
      category: "Voter Registration",
      onoffType: "In Person",
    },
    {
      id: 10,
      title: "Voter Rights Open Mic Night",
      description:
        "An open mic night for poetry, storytelling, and music centered around civic engagement. Includes voter registration tables and information about local elections.",
      imageUrl:
        "https://checkout.request.network/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1470229722913-7c0e2dbbafd3&w=1920&q=75",
      date: "October 28, 2025",
      startTime: "2025-10-28T18:00:00.000Z",
      endTime: "2025-10-28T21:00:00.000Z",
      sponsoredBy: [
        "Arts for Change Collective",
        "Local Voting Rights Advocates",
      ],
      specificAudiences: "Young creatives, including non-students",
      ticketFee: 0.0,
      location: "Civic Arts Center",
      city: "Phoenix",
      state: "AZ",
      category: "Voter Education",
      onoffType: "In Person",
    },
  ]);

  return (
    <div>
      <main className="mt-8">
        <section className="py-4 flex-1">
          <Card className="">
            <div>
            <div className="mt-56 z-10 absolute p-1 px-3 mx-auto justify-center">
                <h2 className="font-semibold text-lg text-white">
                  Young creatives, including non-students
                </h2>
                <p className="text-white">Featured Event</p>
            </div>
              <img
                src="/eventHero.jpg"
                alt="event image"
                className="w-full h-72 object-cover"
              />
            </div>
            
          </Card>
        </section>

        <section className="gap-4 mb-8 grid md:grid-cols-3">
          {events.map((event) => (
            <Card
              key={event.id} // Ensure all IDs are unique
              className="w-[350px] flex flex-col justify-between shadow-sm border rounded-2xl"
            >
              <div>
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-36 object-cover rounded-t-xl"
                />
              </div>
              <span
                  className={`text-sm capitalize mx-5 z-10 absolute mt-5 p-1 px-3 rounded-md ${
                    event.category === "Voter Education"
                      ? "bg-green-500 text-white"
                      : event.category === "Voter Registration"
                      ? "bg-yellow-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {event.category}
                </span>
              <CardHeader>
                <h2 className="font-semibold text-lg">{event.title}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 flex gap-2">
                  {" "}
                  <Calendar className="mt-1 text-blue-500" /> {event.date} .{" "}
                  {event.startTime}
                </p>
                <p className="text-sm text-gray-700 flex gap-2 mt-2">
                  {" "}
                  <MapPin className=" text-blue-500" /> {event.location} .{" "}
                  {event.city}, {event.state}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div>
                    <span className="">$ {event.ticketFee}</span>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" className="">
                    View Details
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
}
