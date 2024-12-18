"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input"; // Adjust import paths for ShadCN setup
import { Button } from "@/components/ui/button";
import { useEvents } from "@/context/EventsContext";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const CreateEvent = () => {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [agency, setAgency] = useState("");
  const { addEvent } = useEvents();
  const { events } = useEvents();

  const handleSubmit = () => {
    if (!name || !startDate || !endDate || !location) {
      alert("Please fill all required fields."); // Simple validation
      return;
    }

    const newEvent = {
      name,
      status: "Draft", // Default status
      startDate,
      endDate,
      location,
      image: image || "", // Placeholder for image upload
      description,
      agency,
      visibility: false, // Default visibility
    };

    addEvent({
      name,
      status: "Draft", // Default status
      startDate,
      endDate,
      location,
      image: image || "", // Placeholder for image upload
      description,
      agency,
      visibility: false, // Default visibility
    });

    console.log("Event to be added:", newEvent); // Log the event object before adding it
  addEvent(newEvent); // Add event to context
  };

  const [step, setStep] = useState(1); // State to track the current step

  // Handlers for navigation
  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3)); // Maximum step is 3
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1)); // Minimum step is 1

  // Step labels for the stepper
  const steps = ["General Information", "Reward Amount", "Summary"];
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Preview image locally
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex flex-col w-full p-8 bg-white shadow-lg">
        <h1 className="text-xl font-bold mb-4">Create New Event</h1>
        <p className="mb-8 text-gray-500">
          Please fill all the steps and the fields that are required.
        </p>

        {/* Stepper */}
        <div className="flex justify-between items-center mb-8">
          {steps.map((label, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  step === index + 1
                    ? "bg-purple-600 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {index + 1}
              </div>
              <span
                className={`mt-2 text-sm ${
                  step === index + 1
                    ? "text-purple-600 font-bold"
                    : "text-gray-500"
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Form Steps */}
        {step === 1 && (
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Event Name
              </label>
              <Input
                placeholder="Enter event name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Description
              </label>
              <Input
                placeholder="Enter description"
                className="w-full"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <Select onValueChange={(value) => setLocation(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="location1">Location 1</SelectItem>
                  <SelectItem value="location2">Location 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Partner Agency (optional)
              </label>
              <Select onValueChange={(value) => setAgency(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select agency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="agency1">Agency 1</SelectItem>
                  <SelectItem value="agency2">Agency 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Start Date
              </label>
              <Input
                type="date"
                placeholder="Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">End Date</label>
              <Input
                type="date"
                placeholder="End Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Upload Cover Image
              </label>
              <Input type="file" onChange={handleImageUpload} />
            </div>
            <div className="flex items-center space-x-4">
              <Switch id="financialSupport" />
              <label htmlFor="financialSupport" className="text-sm">
                Financial Support
              </label>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="grid grid-cols-2 gap-6">
            {/* Left Section */}
            <div>
              {/* Brand Selection */}
              <div>
                <label className="block text-sm font-medium mb-2">Brand</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="walmart">Walmart</SelectItem>
                    <SelectItem value="amazon">Amazon</SelectItem>
                    <SelectItem value="target">Target</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Product Selection */}
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">
                  Product
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="walmart-no-alcohol">
                      Walmart – Alcohol/Tobacco/Firearms Prohibited
                    </SelectItem>
                    <SelectItem value="walmart-all">
                      Walmart – All Products
                    </SelectItem>
                    <SelectItem value="amazon-giftcard">
                      Amazon Gift Card
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Min Amount */}
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">
                  Min Amount
                </label>
                <Input placeholder="$ 5" className="w-full" />
              </div>

              {/* Max Amount */}
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">
                  Max Amount
                </label>
                <Input placeholder="$ 500" className="w-full" />
              </div>

              {/* Amount per Award */}
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">
                  Amount per Award
                </label>
                <Input placeholder="$ 25" className="w-full" />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-start">
              {/* Card Sample */}
              <div className="border rounded-lg p-4 shadow-md mb-4">
                <img
                  src="/card.jpeg" // Replace with your image path
                  alt="Card Sample"
                  className="w-full h-48 object-cover rounded"
                />
                <p className="text-center text-sm text-gray-600 mt-2">
                  Card sample
                </p>
              </div>

              {/* Merchant Terms of Use */}
              <div className="text-sm text-gray-600">
                <p className="font-semibold mb-2">Merchant Terms of Use</p>
                <p>
                  This card may NOT be used to purchase alcohol, tobacco,
                  firearms, ammunition, or lottery tickets. Use this card at any
                  Walmart or Sam's Club store in the U.S. and Puerto Rico, the
                  Walmart App, or online at Walmart.com.
                </p>
                <p className="mt-2">
                  This card cannot be used online at Samsclub.com. Terms,
                  including a mandatory arbitration provision, apply to use of
                  this card. See full terms at Walmart.com/giftcardterms.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 3rd step */}
        {step === 3 && (
          <div className="flex flex-col items-center">
            {/* Event Cover Image */}
            <div className="w-full max-w-4xl border rounded-lg p-6 shadow-md bg-white">
              <div className="relative">
                {image ? (
                  <img
                    src={image}
                    alt="Event Cover"
                    className="w-full h-48 object-cover rounded-md"
                  />
                ) : (
                  <div className="w-full h-48 flex items-center justify-center bg-gray-200 text-gray-500 rounded-md">
                    No image uploaded
                  </div>
                )}
              </div>

              {/* Event Details */}
              <div className="mt-6 text-center">
                <h2 className="text-lg font-bold">{name || "Event Name"}</h2>
                <p className="text-gray-500">
                  {description || "No description provided."}
                </p>
              </div>

              {/* Additional Details */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <p className="text-gray-500">Location</p>
                  <p className="font-medium">{location || "N/A"}</p>
                </div>
                <div>
                  <p className="text-gray-500">Start Date</p>
                  <p className="font-medium">{startDate || "N/A"}</p>
                </div>
                <div>
                  <p className="text-gray-500">End Date</p>
                  <p className="font-medium">{endDate || "N/A"}</p>
                </div>
                <div>
                  <p className="text-gray-500">Agency</p>
                  <p className="font-medium">{agency || "N/A"}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button onClick={prevStep} disabled={step === 1}>
            Back
          </Button>
          {step < 3 ? (
            <Button onClick={nextStep}>Next</Button>
          ) : (

           <Link href='/dashboard/events'>
              <Button
                onClick={handleSubmit}
                className="bg-purple-600 text-white"
              >
                Create
              </Button>
            </Link>
            
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
