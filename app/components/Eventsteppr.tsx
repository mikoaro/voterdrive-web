"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Pencil, Trash, MoreHorizontal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { useEvents } from "@/context/EventsContext"; // Context for managing events

const EventsPage = () => {
  const { events } = useEvents();
  const { deleteEvent, updateEvent, addEvents } = useEvents(); // Use events from shared context
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  // Open the edit dialog with the selected event
  const openEditDialog = (event) => {
    setCurrentEvent(event);
    setEditDialogOpen(true);
  };

  // Close the edit dialog
  const closeEditDialog = () => {
    setEditDialogOpen(false);
    setCurrentEvent(null);
  };

  // Handle changes to the edit form fields
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentEvent((prev) => ({ ...prev, [name]: value }));
  };

  // Handle status dropdown changes
  const handleStatusChange = (status) => {
    setCurrentEvent((prev) => ({ ...prev, status }));
  };

  // Save the updated event
  const saveChanges = () => {
    if (currentEvent) {
      updateEvent(currentEvent.id, currentEvent); // Call context update
      closeEditDialog();
    }
  };
  console.log("Current events:", events); // Log the events to check if the new event is included

  return (
    <div className="p-8 space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Events</h1>
          <p className="text-sm text-muted-foreground">
            Create events to support people in need.
          </p>
        </div>
        <Link href="/dashboard/events/create">
          <Button variant="default" className="bg-primary text-white">
            Create Events
          </Button>
        </Link>
      </div>

      {/* Events Table */}
      <div className="rounded-md border shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Event</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.id}>
                <TableCell>{event.name}</TableCell>
                <TableCell>
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs ${
                      event.status === "Draft"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {event.status}
                  </span>
                </TableCell>
                <TableCell>{event.startDate}</TableCell>
                <TableCell>{event.endDate}</TableCell>
                <TableCell>{event.description}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreHorizontal className="w-5 h-5 text-gray-600 cursor-pointer" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => openEditDialog(event)}>
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => deleteEvent(event.id)}>
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Edit Dialog */}
      {editDialogOpen && currentEvent && (
        <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Event</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                label="Event Name"
                name="name"
                value={currentEvent.name}
                onChange={handleEditChange}
                placeholder="Event Name"
              />
              <Input
                label="Start Date"
                name="startDate"
                type="date"
                value={currentEvent.startDate}
                onChange={handleEditChange}
              />
              <Input
                label="End Date"
                name="endDate"
                type="date"
                value={currentEvent.endDate}
                onChange={handleEditChange}
              />
              <Input
                label="Description"
                name="description"
                value={currentEvent.description}
                onChange={handleEditChange}
                placeholder="Description"
              />
              {/* Status Dropdown */}
              <Select
                value={currentEvent.status}
                onValueChange={handleStatusChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <DialogFooter>
              <Button variant="secondary" onClick={closeEditDialog}>
                Cancel
              </Button>
              <Button variant="primary" onClick={saveChanges}>
                Save Changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default EventsPage;
