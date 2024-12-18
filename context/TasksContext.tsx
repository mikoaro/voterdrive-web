import React, { createContext, useContext, useState } from "react";

// Create the Tasks Context
const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      category: "Voter Education",
      title: "Check ID Requirements - State ID Detective",
      description:
        "Texas requires you to show valid photo ID or an alternative form of ID when voting in person. Create a one-page infographic or poster listing acceptable IDs and the process for obtaining them. Earn points for creative visuals! Learn more here - https://www.votetexas.gov/mobile/id-faqs.htm",
      image: "",
      points: 50,
      assignee: "jordan@gmail.com",
      user: "admin@gmail.com",
      completed: false,
      published: false,
      createdAt: "2025-04-23T18:25:43.511Z",
      updatedAt: "2025-04-23T18:25:43.511Z",
      dueAt: "2024-12-23T12:26:10.202Z",
    },
    {
      id: 2,
      category: "Voter Pride",
      title: "I Voted! Sticker & Photo Upload",
      description:
        "Encourage voters to upload photos of themselves with their 'I Voted' stickers or pictures taken at polling stations (without showing marked ballots). Share your voter pride and inspire others to participate!",
      image: "",
      points: 50,
      assignee: "jordan@gmail.com",
      user: "admin@gmail.com",
      completed: false,
      published: false,
      createdAt: "2025-05-03T11:00:00.000Z",
      updatedAt: "2025-05-03T11:00:00.000Z",
      dueAt: "2024-12-23T12:26:10.202Z",
    },
    {
      id: 3,
      category: "Community Engagement",
      title: "Register & Win - Voter Registration Drive",
      description:
        "Organize a voter registration drive at your local community center in Georgia. Use games and a prize raffle to attract participants and make voter education fun!",
      imageUrl: "https://example.com/images/voter_drive_georgia.jpg",
      points: 100,
      assignee: "jordan@gmail.com",
      user: "admin@gmail.com",
      completed: false,
      published: false,
      createdAt: "2025-04-24T10:00:00.000Z",
      updatedAt: "2025-04-24T10:00:00.000Z",
      dueAt: "2025-07-15T10:00:00.000Z",
    },
  ]);

  // Add Task
  const addTask = (task) => {
    setTasks((prev) => [...prev, { ...task, id: Date.now() }]);
  };

  // Edit Task
  const editTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, editTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};

// Custom Hook for Using Context
export const useTasks = () => {
  return useContext(TasksContext);
};
