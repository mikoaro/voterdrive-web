import { title } from "process";
import React, { createContext, useContext, useState } from "react";

// Create the Members Context
const FeaturedContext = createContext();

export const FeaturedProvider = ({ children }) => {
  const [featured, setFeatured] = useState([
    {
      id: 1,
      title: "US Congress Most Viewed Bills",
      status: "Draft",
      image: "/card.jpeg",
      link: "https://www.congress.gov/most-viewed-bills",
      visibility: false,
    },
  ]);

  // Add Featured
  const addFeatured = (featured) => {
    setFeatured((prev) => [...prev, { ...featured, id: Date.now() }]);
  };

  // Edit Featured
  const editFeatured = (updatedFeatured) => {
    setFeatured((prev) =>
      prev.map((featured) =>
        featured.id === updatedFeatured.id ? updatedFeatured : featured
      )
    );
  };

  // Delete Featured
  const deleteFeatured = (id) => {
    setFeatured((prev) => prev.filter((featured) => featured.id !== id));
  };

  return (
    <FeaturedContext.Provider value={{ featured, addFeatured, editFeatured, deleteFeatured }}>
      {children}
    </FeaturedContext.Provider>
  );
};

// Custom Hook for Using Context
export const useFeatured = () => {
  return useContext(FeaturedContext);
};
