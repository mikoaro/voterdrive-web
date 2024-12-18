import React, { useState } from "react";
import { useEvents } from "../../context/EventsContext";
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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Eye, Pencil, Trash, MoreHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Toaster, toast } from "sonner";

const EventsPage = () => {
  const { events, addEvent, editEvent, deleteEvent } = useEvents();
  const [formState, setFormState] = useState({
    id: null,
    event: "",
    name: "T",
    address: "",
    email: "",
    category: "",
    status: "",
    image: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null); // Tracks member being edited

  // Handle Form Input Changes
  const handleInputChange = (e) => {
    const { id, value, files } = e.target;
    setFormState({
      ...formState,
      [id]: id === "image" ? URL.createObjectURL(files[0]) : value,
    });
  };

  // Handle Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      editEvent(formState);
      toast.success(`${formState.event} has just been updated!`);
    } else {
      addEvent({ ...formState, visibility: false });
      toast.success(`${formState.event} has been added successfully!`);
    }
    resetForm();
  };

  // Handle Delete
  const handleDelete = (id, event) => {
    deleteEvent(id);
    toast.error(`${event} has been deleted successfully!`);
  };

  // Handle Edit
  const handleEdit = (event) => {
    setFormState(event);
    setIsEditing(true);
    setEditingEvent(event); // Set the currently edited member
  };

  // Reset Form
  const resetForm = () => {
    setFormState({
      id: null,
      event: "",
      name: "T",
      address: "",
      email: "",
      category: "",
      status: "",
      image: "",
    });
    setIsEditing(false);
    setEditingEvent(null); // Reset editing member
  };

  return (
    <div className="p-8 space-y-6 flex flex-col mx-auto container">
      {/* Toaster for notifications */}
      <Toaster position="top-right" richColors />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Events</h1>
          <p className="text-sm text-muted-foreground">
            Create events to mobilize youth to vote.
          </p>
        </div>
        {/* Create Member Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary text-white">Create Event</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Event</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleFormSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Event</Label>
                  <Input
                    id="event"
                    value={formState.event}
                    onChange={handleInputChange}
                    placeholder="Enter Event's Title"
                  />
                </div>
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Enter creator's name"
                  />
                </div>
                <div>
                  <Label htmlFor="name">Address</Label>
                  <Input
                    id="address"
                    value={formState.address}
                    onChange={handleInputChange}
                    placeholder="Enter address"
                  />
                </div>
                <div>
                  <Label htmlFor="name">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <Label htmlFor="status">Category</Label>
                  <Select
                    value={formState.category}
                    onValueChange={(value) =>
                      setFormState((prev) => ({ ...prev, category: value }))
                    }
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="Voter Education">
                        Voter Education
                      </SelectItem>
                      <SelectItem value="Voter Registration">
                        Voter Registration
                      </SelectItem>
                      <SelectItem value="Campus Drive">Campus Drive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={formState.status}
                    onValueChange={(value) =>
                      setFormState((prev) => ({ ...prev, status: value }))
                    }
                  >
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="image">Image</Label>
                  <Input id="image" type="file" onChange={handleInputChange} />
                </div>
              </div>
              <Button type="submit" className="mt-4 w-full bg-purple-600">
                Submit
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Events Table */}
      <div className="rounded-md border shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Event</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Image</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.id}>
                <TableCell>{event.event}</TableCell>
                <TableCell>{event.name}</TableCell>
                <TableCell>{event.address}</TableCell>
                <TableCell>{event.email}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      event.category === "All"
                    }`}
                  >
                    {event.category}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      event.status === "Draft"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {event.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={event.image} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{event.points}</TableCell>
                <TableCell>
                  {/* Edit and Delete Dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreHorizontal className="cursor-pointer" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => handleEdit(event)}>
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDelete(event.id, event.event)}
                      >
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

      {/* Edit Member Dialog */}
      {editingEvent && (
        <Dialog open={!!editingEvent} onOpenChange={() => resetForm()}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Event</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleFormSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="event">Event</Label>
                  <Input
                    id="event"
                    value={formState.event}
                    onChange={handleInputChange}
                    placeholder="Enter Event Title"
                  />
                </div>
                <div>
                  <Label htmlFor="name">Event</Label>
                  <Input
                    id="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Enter Creator's Name"
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={formState.address}
                    onChange={handleInputChange}
                    placeholder="Enter Address"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="Enter Email"
                  />
                </div>
                <div>
                  <Label htmlFor="status">Category</Label>
                  <Select
                    value={formState.category}
                    onValueChange={(value) =>
                      setFormState((prev) => ({ ...prev, category: value }))
                    }
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="Voter Education">
                        Voter Education
                      </SelectItem>
                      <SelectItem value="Voter Registration">
                        Voter Registration
                      </SelectItem>
                      <SelectItem value="Campus Drive">Campus Drive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={formState.status}
                    onValueChange={(value) =>
                      setFormState((prev) => ({ ...prev, status: value }))
                    }
                  >
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="image">Image</Label>
                  <Input id="image" type="file" onChange={handleInputChange} />
                </div>
              </div>
              <Button type="submit" className="mt-4 w-full bg-purple-600">
                Submit
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default EventsPage;
