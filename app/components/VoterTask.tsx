"use client";

import React, { useState } from "react";
import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AddTaskDialog from "./AddTaskDialog";
import { Grid, List, Star, Edit, Trash } from "lucide-react";

interface Event {
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

export default function Header() {
  const [events, setEvents] = useState<Event[]>([
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
    {
      id: 4,
      category: "Youth Outreach",
      title: "Host a High School Voter Assembly",
      description:
        "Plan an assembly at a local high school in Florida to teach seniors about voter registration. Use interactive polls and guest speakers to keep them engaged.",
      imageUrl: "https://example.com/images/high_school_assembly.jpg",
      points: 150,
      assignee: "jordan@gmail.com",
      user: "organizer3@gmail.com",
      completed: false,
      published: false,
      createdAt: "2025-04-26T09:00:00.000Z",
      updatedAt: "2025-04-26T09:00:00.000Z",
      dueAt: "2025-09-01T09:00:00.000Z",
    },
    {
      id: 5,
      category: "Creative Expression",
      title: "Design Voting Rights Posters",
      description:
        "Create visually appealing posters about voting rights in Ohio. Focus on making them understandable for first-time voters.",
      imageUrl: "https://example.com/images/voting_rights_poster.jpg",
      points: 50,
      assignee: "emily@gmail.com",
      user: "artist4@gmail.com",
      completed: false,
      published: false,
      createdAt: "2025-04-27T16:00:00.000Z",
      updatedAt: "2025-04-27T16:00:00.000Z",
      dueAt: "2025-07-20T16:00:00.000Z",
    },
    {
      id: 6,
      category: "Technology and Outreach",
      title: "Voter Education Text Campaign",
      description:
        "Send educational text messages about voter deadlines and registration to young voters in Arizona. Scripts and tools will be provided.",
      imageUrl: "https://example.com/images/text_campaign.jpg",
      points: 125,
      assignee: "sam@gmail.com",
      user: "coordinator5@gmail.com",
      completed: false,
      published: false,
      createdAt: "2025-04-28T12:00:00.000Z",
      updatedAt: "2025-04-28T12:00:00.000Z",
      dueAt: "2025-09-30T12:00:00.000Z",
    },
    {
      id: 7,
      category: "Interactive Events",
      title: "Trivia Night: Democracy Edition",
      description:
        "Host a trivia night in Illinois centered on U.S. voting laws and history. Include voter registration stations and prizes for winners.",
      imageUrl: "https://example.com/images/trivia_night.jpg",
      points: 200,
      assignee: "paul@gmail.com",
      user: "host6@gmail.com",
      completed: false,
      published: false,
      createdAt: "2025-04-29T15:00:00.000Z",
      updatedAt: "2025-04-29T15:00:00.000Z",
      dueAt: "2025-08-15T15:00:00.000Z",
    },
    {
      id: 8,
      category: "Digital Tools",
      title: "Develop a Voting App Guide",
      description:
        "Write a step-by-step guide for using popular voting apps to register, find polling locations, and track ballots in Pennsylvania.",
      imageUrl: "https://example.com/images/voting_app_guide.jpg",
      points: 100,
      assignee: "taylor@gmail.com",
      user: "developer7@gmail.com",
      completed: false,
      published: false,
      createdAt: "2025-04-30T18:00:00.000Z",
      updatedAt: "2025-04-30T18:00:00.000Z",
      dueAt: "2025-07-30T18:00:00.000Z",
    },
    {
      id: 9,
      category: "Social Media Engagement",
      title: "Social Media Challenge: Why I Vote",
      description:
        "Create a viral challenge where young voters share videos on why voting is important to them. Target youth in Nevada and use hashtags like #MyVoteCounts.",
      imageUrl: "https://example.com/images/social_media_challenge.jpg",
      points: 150,
      assignee: "sarah@gmail.com",
      user: "promoter8@gmail.com",
      completed: false,
      published: false,
      createdAt: "2025-05-01T10:00:00.000Z",
      updatedAt: "2025-05-01T10:00:00.000Z",
      dueAt: "2025-09-10T10:00:00.000Z",
    },
    {
        id: 10,
        category: "Community Engagement",
        title: "Register & Win - Voter Registration Drive",
        description:
          "Organize a voter registration drive at your local community center in Georgia. Use games and a prize raffle to attract participants and make voter education fun!",
        imageUrl: "https://example.com/images/voter_drive_georgia.jpg",
        points: 100,
        assignee: "karen@gmail.com",
        user: "volunteer1@gmail.com",
        completed: false,
        published: false,
        createdAt: "2025-04-24T10:00:00.000Z",
        updatedAt: "2025-04-24T10:00:00.000Z",
        dueAt: "2025-07-15T10:00:00.000Z",
      },
  ]);

  const addNewEvent = (event: Event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };

  return (
    <div>
      <main className="mt-8">
        <section className="py-4 flex justify-between">
          <div>
            <h1 className="font-bold text-xl">All Tasks</h1>
            <p className="text-green-500">
              You have {events.length} active tasks
            </p>
          </div>

          <div className="flex gap-2">
            <Grid className="mt-2" />
            <List className="mt-2" />
            <AddTaskDialog onAddEvent={addNewEvent} />
          </div>
        </section>

        <section className="gap-4 mb-8 grid md:grid-cols-3">
          {events.map((event) => (
            <Card
              key={event.id} // Ensure all IDs are unique
              className="w-[300px] flex flex-col justify-between shadow-sm border"
            >
              <CardHeader>
                <h2 className="font-semibold text-lg">{event.title}</h2>
                <p className="text-gray-500 text-sm">{event.description}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">{event.createdAt}</p>
              </CardContent>
              <CardContent>
                <p className="text-sm text-gray-400">{event.points} points</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span
                  className={`text-sm capitalize ${
                    event.category === "Voter Education"
                      ? "text-green-500"
                      : event.category === "Voter Pride"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {event.category}
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

          {/* Add New Task Placeholder */}
          <Card
            key="add-new-task" // Add a unique key
            className="flex items-center justify-center border-2 border-dashed rounded-lg w-[300px]"
          >
            <span className="text-gray-400">Add New Task</span>
          </Card>
        </section>
      </main>
    </div>
  );
}
