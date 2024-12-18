"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProgressCard from "./ProgressCard";


interface Leader {
  id: number;
  name: string;
  points: number;
  avatar: string;
}
interface Member {
  id: number;
  name: string;
  points: number;
  avatar: string;
}

interface Team {
  id: number;
  name: string;
  members: number;
  points: number;
  logo: string;
}

interface LeaderboardProps {
  leaders: Leader[];
  members: Member[];
  teams: Team[];
}
const tasks = [
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
];

const completedTasks = tasks.filter((task) => task.completed).length;
const progress = Math.round((completedTasks / tasks.length) * 100);

const Leaderboard: React.FC<LeaderboardProps> = ({
  leaders,
  members,
  teams,
}) => {
  return (
    <section className="py-12">
    <ScrollArea className="h-screen w-full rounded-md mr-5 mt-12">
    <div className="grid justify-center container mx-auto pr-5 gap-6 h-full overflow-y-auto">
    {/* Progress Section */}
      <div className="">
        <ProgressCard progress={progress} tasks={tasks} />
      </div>

          {/* Leaderboard Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold">Leaderboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaders.map((leader) => (
                  <div key={leader.id} className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={leader.avatar}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{leader.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        {leader.points} pts
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="w-full justify-center">
                View more Leaders
              </Button>
            </CardFooter>
          </Card>

          {/* Members Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold">Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {members.map((member) => (
                  <div key={member.id} className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{member.name}</p>
                      <p className="text-sm text-gray-500">
                        {member.points} pts
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="w-full justify-center">
                View more Members
              </Button>
            </CardFooter>
          </Card>

          {/* Teams Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold">Teams</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teams.map((team) => (
                  <div key={team.id} className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={team.logo}
                        alt={team.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{team.name}</p>
                      <p className="text-sm text-gray-500">
                        {team.members} members • {team.points} pts
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="w-full justify-center">
                View more Teams
              </Button>
            </CardFooter>
          </Card>
        </div>
      </ScrollArea>
    </section>
  );
};

export default Leaderboard;
