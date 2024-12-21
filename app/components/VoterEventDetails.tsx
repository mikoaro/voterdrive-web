"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Chrome } from "lucide-react";
import { format } from "date-fns"; // Add `date-fns` library for formatting

const eventData = [
  {
    id: 1,
    title: "Student Organization Voter Registration Drive",
    description:
      "This event will be a collaboration with all Texas Law student organizations that are interested in registering voters. The event will take place in the law school atrium.",
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
    sponsoredBy: ["Digital Democracy Initiative", "Youth Advocates of Florida"],
    specificAudiences: "Young influencers and tech-savvy individuals under 30",
    ticketFee: 0.0,
    location: "TechHub Conference Center",
    city: "Miami",
    state: "FL",
    category: "Voter Registration",
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
    category: "Voter Education",
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
    category: "Voter Education",
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
    category: "Voter Registration",
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
    category: "Voter Registration",
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
];

export default function VoterEventDetails() {
  const { id } = useParams(); // Get the event ID from the URL
  const [event, setEvent] = useState<any | null>(null);
  const [ticketCounts, setTicketCounts] = useState({
    regular: 0,
    vip: 0,
    student: 0,
  });

  useEffect(() => {
    // Fetch the event data based on ID
    const fetchedEvent = eventData.find((e) => e.id === parseInt(id || ""));
    setEvent(fetchedEvent);
  }, [id]);

  if (!event) return <p>Loading...</p>;

  // Format start and end times
  const formatTime = (isoString: string) =>
    format(new Date(isoString), "hh:mm a");

  const handleIncrement = (type: string) => {
    setTicketCounts((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const handleDecrement = (type: string) => {
    setTicketCounts((prev) => ({
      ...prev,
      [type]: Math.max(prev[type] - 1, 0),
    }));
  };

  const calculateTotal = () => {
    return ticketCounts.regular * 0 + ticketCounts.vip * 0 + ticketCounts.student * 0;
  };

  return (
    <div>
      <main className="mt-8">
        <section className="pt-4 flex-1">
          <Card>
            <div>
              <div className="mt-56 z-10 absolute p-1 px-3 mx-auto justify-center">
                <h2 className="font-semibold text-lg text-white">
                  {event.title}
                </h2>
                <p className="text-white">{event.category}</p>
              </div>
              <img
                src={event.imageUrl}
                alt="event image"
                className="w-full h-72 object-cover"
              />
            </div>
          </Card>
        </section>

        <section className="flex justify-between max-w-[1000px] gap-4 bg-gray-50 p-5 pb-12">
          <div>
            <Card className="w-[500px] flex flex-col rounded-2xl shadow-none">
              <CardHeader className="text-xl font-bold">
                Event Details
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 flex gap-2">
                  <Calendar className="text-blue-500" />
                  {event.date}
                </p>
                <p className="text-sm text-gray-700 flex gap-2 mt-2">
                  <Clock className="text-blue-500" />{" "}
                  {formatTime(event.startTime)} - {formatTime(event.endTime)}
                </p>
                <p className="text-sm text-gray-700 flex gap-2 mt-2">
                  <MapPin className="text-blue-500" /> {event.location},{" "}
                  {event.city}, {event.state}
                </p>
              </CardContent>
            </Card>

            <Card className="w-[500px] flex flex-col rounded-2xl mt-6">
              <CardHeader className="text-xl font-bold">
                About the Event
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">{event.description}</p>
              </CardContent>
            </Card>

            <Card className="w-[500px] flex flex-col rounded-2xl mt-6">
              <CardHeader className="text-xl font-bold">Organizer</CardHeader>
              <CardContent className="flex gap-4">
                <Chrome className="w-12 h-12" />
                <div className="flex-1">
                  <p className="font-bold">VoterDrive</p>
                  <p className="text-sm text-gray-400">Event Organizer</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-2">
            <Card className="w-[300px] flex flex-col rounded-2xl">
              <CardHeader className="text-xl font-bold">
                Select Tickets
              </CardHeader>
              <CardContent>
                {["regular", "disabled", "student"].map((type) => (
                  <div key={type} className="mb-6">
                    <div className="flex justify-between gap-4">
                      <div>
                        <h1 className="capitalize">{type} Access</h1>
                        <h1 className="text-blue-500">$0</h1>
                      </div>
                      <div className="flex gap-3">
                        <Button
                          type="button"
                          onClick={() => handleDecrement(type)}
                          className="bg-white outline-4 text-blue-500 size-7 hover:text-white"
                        >
                          -
                        </Button>
                        <h1 className="mt-1">{ticketCounts[type]}</h1>
                        <Button
                          type="button"
                          onClick={() => handleIncrement(type)}
                          className="bg-white outline-4 text-blue-500 size-7 hover:text-white"
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">
                      {type === "regular"
                        ? "Regular access"
                        : type === "disabled"
                        ? "Disabled access"
                        : "Student access"}
                    </p>
                  </div>
                ))}
              </CardContent>
              <hr />
              <CardFooter className="flex flex-col mt-8">
                <div className="flex w-full justify-between">
                  <p>Total:</p>
                  <p>${calculateTotal()}</p>
                </div>
                <div className="flex-1 w-full mt-5">
                  <Button className="w-full bg-blue-500"> Checkout</Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
