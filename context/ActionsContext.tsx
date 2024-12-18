"use client";

import React, { createContext, useContext, useState } from "react";

interface Action {
  id: number;
  name: string;
  status: string;
  startDate: string;
  endDate: string;
  description: string;
  location:string;
  visibility: boolean;
}

interface ActionsContextType {
  actions: Action[];
  addAction: (newAction: Omit<Action, "id">) => void;
  editAction: (id: number, updatedAction: Partial<Omit<Action, "id">>) => void;
  deleteAction: (id: number) => void;
}

const ActionsContext = createContext<ActionsContextType | undefined>(undefined);

export const ActionsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [actions, setActions] = useState<Action[]>([
    {
      id: 1,
      name: "Louisiana - Hurricane Francine",
      status: "Draft",
      startDate: "09/11/2024",
      endDate: "09/25/2024",
      visibility: false,
      description: "Lorem",
      location: "Location 1",
    },
  ]);

  const addAction = (newAction: Omit<Action, "id">) => {
    setActions((prev) => [...prev, { ...newAction, id: prev.length + 1 }]);
  };

  const editAction = (id: number, updatedAction: Partial<Omit<Action, "id">>) => {
    setActions((prev) =>
      prev.map((action) => (action.id === id ? { ...action, ...updatedAction } : action))
    );
  };

  const deleteAction = (id: number) => {
    setActions((prev) => prev.filter((action) => action.id !== id));
  };

  return (
    <ActionsContext.Provider value={{ actions, addAction, editAction, deleteAction }}>
      {children}
    </ActionsContext.Provider>
  );
};

export const useActions = () => {
  const context = useContext(ActionsContext);
  if (!context) {
    throw new Error("useActions must be used within an ActionsProvider");
  }
  return context;
};
