"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DashboardMetrics from "./DashboardMetrics";
import { Grid, List, Star, Edit, Trash, Calendar, MapPin } from "lucide-react";
// import ProgressCard from "./ProgressCard";

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

interface Task {
  id: number;
  category: string;
  title: string;
  imageUrl: string;
  points: number;
  assignee: string;
  user: string;
  completed: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  dueAt: string;
  description: string;
}

const events1: Event[] = [
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
];

const tasks1: Task[] = [
  {
    id: 1,
    category: "Voter Education",
    title: "Check ID Requirements - State ID Detective",
    description:
      "Texas requires you to show valid photo ID or an alternative form of ID when voting in person. Create a one-page infographic or poster listing acceptable IDs and the process for obtaining them. Earn points for creative visuals! Learn more here - https://www.votetexas.gov/mobile/id-faqs.htm",
    imageUrl:
      "https://gray-fancy-rattlesnake-26.mypinata.cloud/ipfs/QmSH7x2gowDoJ4JCBQUv8QEhDvnfxarUWESt1cxRcki52T",
    points: 50,
    assignee: "miko@gmail.com",
    user: "new@gmail.com",
    completed: false,
    published: false,
    createdAt: "2025-04-23T18:25:43.511Z",
    updatedAt: "2025-04-23T18:25:43.511Z",
    dueAt: "2025-06-01T18:25:43.511Z",
  },
  {
    id: 2,
    category: "Voter Pride",
    title: "I Voted! Sticker & Photo Upload",
    description:
      "Encourage voters to upload photos of themselves with their 'I Voted' stickers or pictures taken at polling stations (without showing marked ballots). Share your voter pride and inspire others to participate!",
    imageUrl: "https://example.com/images/i_voted_sticker.jpg",
    points: 50,
    assignee: "olivia@gmail.com",
    user: "voter10@gmail.com",
    completed: false,
    published: false,
    createdAt: "2025-05-03T11:00:00.000Z",
    updatedAt: "2025-05-03T11:00:00.000Z",
    dueAt: "2025-11-10T11:00:00.000Z",
  },
  {
    id: 3,
    category: "Media Production",
    title: "Create a Voter FAQ Video",
    description:
      "Film a short video explaining how to register and vote in California, including key deadlines. Make it engaging and shareable for social media.",
    imageUrl: "https://example.com/images/voter_faq_video.jpg",
    points: 75,
    assignee: "alex@gmail.com",
    user: "creator2@gmail.com",
    completed: false,
    published: false,
    createdAt: "2025-04-25T14:00:00.000Z",
    updatedAt: "2025-04-25T14:00:00.000Z",
    dueAt: "2025-08-01T14:00:00.000Z",
  },
];

export default function Header() {
  const [tasks, setTasks] = useState(tasks1);
  const [events, setEvents] = useState(events1);

  useEffect(() => {
    try {
      const fetchTasks = async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_NODE_URL}/tasks`
        );
        const tasks = (await response.json()) || [];
        setTasks(tasks);
      };

      fetchTasks();
    } catch (error) {
      console.log("error is:", error);
    }
  }, []);

  useEffect(() => {
    try {
      const fetchEvents = async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_NODE_URL}/events`
        );
        const events = (await response.json()) || [];
        setEvents(events);
      };

      fetchEvents();
    } catch (error) {
      console.log("error is:", error);
    }
  }, []);

  if (!tasks) {
    return <div>Loading...</div>;
  }

  if (!events) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Metrics section */}

      <main className="flex-1 px-8 py-5">
        <section className="grid grid-cols-1 mb-8">
          <DashboardMetrics />
        </section>
        <section className="py-4">
          <h1 className="font-bold text-xl">Featured Tasks</h1>
        </section>

        {/* Featured Tasks Section */}
        <section className="mb-8 mx-auto flex justify-center gap-5">
          {tasks.map((task) => (
            <Card
              key={task.id} // Ensure all IDs are unique
              className="w-96 flex flex-col justify-between shadow-sm border"
            >
              {task.image && (
                <div>
                  <img
                    src={task.image}
                    alt={task.title}
                    className="w-full h-36 object-cover rounded-t-xl"
                  />
                </div>
              )}
              <CardHeader>
                <h2 className="font-semibold text-lg">{task.title}</h2>
                <p className="text-gray-500 text-sm">{task.description}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">{task.createdAt}</p>
              </CardContent>
              <CardContent>
                <p className="text-sm text-gray-400">{task.points} points</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span
                  className={`text-sm capitalize ${
                    task.category === "Voter Education"
                      ? "text-blue-500"
                      : task.category === "Voter Pride"
                      ? "text-yellow-500"
                      : "text-lime-500"
                  }`}
                >
                  {task.category}
                </span>
                <div className="flex gap-2">
                  <Button size="icon" variant="ghost">
                    <Star size={16} />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Edit size={16} />
                  </Button>
                  <Button size="icon" variant="ghost" className="text-red-500">
                    <Trash size={16} />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </section>

        <section className="py-4">
          <h1 className="font-bold text-xl">Featured Events</h1>
        </section>

        {/* Featured Events Section */}
        <section className="mb-8 mx-auto flex justify-center gap-8">
          {events.map((event) => (
            <Card
              key={event.id} // Ensure all IDs are unique
              className="w-96 flex flex-col justify-between shadow-sm border rounded-2xl"
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
