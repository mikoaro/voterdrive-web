"use client";

import React, { createContext, useContext, useState } from "react";

// Create the Events Context
const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
      id: 1,
      event: "Student Organization Voter Registration Drive",
      name: "This event will be a collaboration with all Texas Law student organizations that are interested in registering voters. The event will take place in the law school atrium. Interested student organization can sign up to table here: https://docs.google.com/spreadsheets/d/1n5AeF4l_noE2xPNxUvdRknM8Ad8ZaJp735iu1PD5pPk/edit?gid=650339494#gid=650339494.",
      image:
        "https://checkout.request.network/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1470229722913-7c0e2dbbafd3&w=1920&q=75",
      Date: "September 25, 2025",
      startTime: "2025-04-23T18:25:43.511Z",
      endTime: "2025-04-23T18:25:43.511Z",
      sponsoredBy: [
        "Student Affairs Office",
        "Thurgood Marshall Legal Society",
        "Law Students For Black Lives",
      ],
      specificAudiences: "Texas Law students",
      ticketfee: 0.0,
      address: "The Law School Atrium, Austin, TX",
      location: "The Law School Atrium",
      city: "Austin",
      state: "Texas",
      category: "Student Engagement",
      onofftype: "In Person",
      status: "Published",
      email: "admin@gmail.com",
    },
    {
      id: 2,
      event: "Youth Music Festival for Voter Awareness",
      name:
        "A live music event featuring local artists to promote voter registration among young people. Free voter education resources and registration booths will be available.",
      image:
        "https://checkout.request.network/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1470229722913-7c0e2dbbafd3&w=1920&q=75",
      Date: "October 3, 2025",
      startTime: "2025-10-03T16:00:00.000Z",
      endTime: "2025-10-03T20:00:00.000Z",
      sponsoredBy: ["Civic Engagement Alliance", "Local Artists Guild"],
      specificAudiences: "Young voters under 30 in New York City",
      ticketfee: 0.0,
      address: "Central Park, New York, NY",
      location: "Central Park",
      city: "New York",
      state: "NY",
      category: "Entertainment & Awareness",
      onofftype: "In Person",
      status: "Published",
      email: "admin@gmail.com",
    },
    {
      id: 3,
      event: "College Voter Registration Carnival",
      name:
        "A fun-filled carnival with games, food, and voter registration drives aimed at college students. Learn how to register to vote and participate in democracy.",
      imageUrl:
        "https://checkout.request.network/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1470229722913-7c0e2dbbafd3&w=1920&q=75",
      Date: "September 30, 2025",
      startTime: "2025-09-30T12:00:00.000Z",
      endTime: "2025-09-30T18:00:00.000Z",
      sponsoredBy: ["University Student Union", "State Election Office"],
      specificAudiences: "Students from Michigan universities",
      ticketfee: 0.0,
      address: "University of Michigan Campus Green, Ann Arbor, MI",
      location: "University of Michigan Campus Green",
      city: "Ann Arbor",
      state: "MI",
      category: "Student Engagement",
      onofftype: "In Person",
      status: "Published",
      email: "admin@gmail.com",
    },
    // {
    //   id: 4,
    //   event: "Event 1",
    //   name: "Test Username",
    //   address: "",
    //   email: "admin@gmail.com",
    //   category: "All",
    //   status: "Published",
    //   image:
    //     "https://checkout.request.network/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1470229722913-7c0e2dbbafd3&w=1920&q=75",
    // },
  ]);

  // Add Event
  const addEvent = (event) => {
    setEvents((prev) => [...prev, { ...event, id: Date.now() }]);
  };

  // Edit Event
  const editEvent = (updatedEvent) => {
    setEvents((prev) =>
      prev.map((event) => (event.id === updatedEvent.id ? updatedEvent : event))
    );
  };

  // Delete event
  const deleteEvent = (id) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  return (
    <EventsContext.Provider
      value={{ events, addEvent, editEvent, deleteEvent }}
    >
      {children}
    </EventsContext.Provider>
  );
};

// Custom Hook for Using Context
export const useEvents = () => {
  return useContext(EventsContext);
};
