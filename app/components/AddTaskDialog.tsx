"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface Event {
  id: number;
  category: string;
  title: string;
  imageUrl: string;
  points: number;
  assignee: string;
  user: string;
  completed: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  dueAt: string;
  description: string;
  //   date: string;
  //   image: string;
  //   url: string;
}

interface AddTaskDialogProps {
  onAddEvent: (task: Event) => void;
}

export default function AddTaskDialog({ onAddEvent }: AddTaskDialogProps) {
    const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [points, setPoints] = useState<number>(0);
  const [assignee, setAssignee] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [published, setPublished] = useState<boolean>(false);
  const [createdAt, setCreatedAt] = useState<string>("");
  const [updatedAt, setUpdatedAt] = useState<string>("");
  const [dueAt, setDueAt] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  const handleSubmit = () => {
    if (title.trim()) {
      onAddEvent({
        id,
        title,
        category,
        imageUrl,
        points,
        assignee,
        user,
        published,
        createdAt,
        updatedAt,
        dueAt,
        description,
        completed,
      });
      setId(0);
      setTitle("");
      setCategory("");
      setImageUrl("");
      setPoints(0);
      setAssignee("");
      setUser("");
      setPublished(false);
      setCreatedAt("");
      setUpdatedAt("");
      setDueAt("");
      setDescription("");
      setCompleted(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary">
          Add a New Task
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a New Task</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <Input
              placeholder="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <Textarea
              placeholder="Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Select Priority
            </label>
            <Select
              onValueChange={(value) => setCategory(value)}
              defaultValue="All"
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Voter Registration">Voter Registration</SelectItem>
                <SelectItem value="Voter Education">Voter Education</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Due Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Due Date</label>
            <Input
              type="date"
              value={dueAt}
              onChange={(e) => setDueAt(e.target.value)}
            />
          </div>

          {/* Task Completed */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Task Completed
            </label>
            <Select
              onValueChange={(value) => setCompleted(value)}
              defaultValue="false"
            >
              <SelectTrigger>
                <SelectValue placeholder="Completed?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">Yes</SelectItem>
                <SelectItem value="false">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Footer */}
        <DialogFooter>
          <Button
            onClick={handleSubmit}
            className="bg-primary hover:bg-primary text-white"
          >
            Create Task
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
