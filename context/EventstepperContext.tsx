"use client";
import React, { createContext, useContext, useState } from "react";

// Create the Events Context
const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Event 1",
      startDate: "2024-01-01",
      endDate: "2024-01-02",
      description: "Description 1",
      status: "Draft",
      visibility: true,
    },
  ]);

  // Add Event
  const addEvent = (newEvent) => {
    console.log("Adding new event:", newEvent); // Log the event being added
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    console.log("Updated events:", [...events, newEvent]); // Log the updated events array
  };

  // Edit Event
  const updateEvent = (id, updatedData) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === id ? { ...event, ...updatedData } : event
      )
    );
  };

  // Delete Event
  const deleteEvent = (id) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  return (
    <EventsContext.Provider
      value={{ events, addEvent, updateEvent, deleteEvent }}
    >
      {children}
    </EventsContext.Provider>
  );
};

// Custom Hook for Using Context
export const useEvents = () => {
  return useContext(EventsContext);
};
