import React, { createContext, useContext, useState } from "react";

// Create the Members Context
const MembersContext = createContext();

export const MembersProvider = ({ children }) => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Jordan Voter",
      status: "Published",
      image: "/profile2.jpg",
      points: "355",
      visibility: true,
    },
  ]);

  // Add Member
  const addMember = (member) => {
    setMembers((prev) => [...prev, { ...member, id: Date.now() }]);
  };

  // Edit Member
  const editMember = (updatedMember) => {
    setMembers((prev) =>
      prev.map((member) =>
        member.id === updatedMember.id ? updatedMember : member
      )
    );
  };

  // Delete Member
  const deleteMember = (id) => {
    setMembers((prev) => prev.filter((member) => member.id !== id));
  };

  return (
    <MembersContext.Provider
      value={{ members, addMember, editMember, deleteMember }}
    >
      {children}
    </MembersContext.Provider>
  );
};

// Custom Hook for Using Context
export const useMembers = () => {
  return useContext(MembersContext);
};
