"use client";
import React, { useState } from "react";
import { useTasks } from "@/context/TasksContext";
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
import {
  Pencil,
  Trash,
  MoreHorizontal,
  Grid,
  List,
  Star,
  Edit,
} from "lucide-react";
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
import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
} from "@/components/ui/card";

const TasksPage = () => {
  const [isGridView, setIsGridView] = useState(false);
  const [isListView, setIsListView] = useState(true);
  const { tasks, addTask, editTask, deleteTask } = useTasks();
  const [formState, setFormState] = useState({
    id: null,
    category: "",
    title: "",
    imageUrl: "",
    points: "",
    assignee: "",
    user: "",
    completed: "",
    published: "",
    createdAt: "",
    updatedAt: "",
    dueAt: "",
    description: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingMember, setEditingTask] = useState(null); // Tracks task being edited

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
      editTask(formState);
      toast.success(`${formState.title} has just been updated!`);
    } else {
      addTask({ ...formState, visibility: false });
      toast.success(`${formState.title} has been added successfully!`);
    }
    resetForm();
  };

  // Handle Delete
  const handleDelete = (id, title) => {
    deleteTask(id);
    toast.error(`${title} has been deleted successfully!`);
  };

  // Handle Edit
  const handleEdit = (task) => {
    setFormState(task);
    setIsEditing(true);
    setEditingTask(task); // Set the currently edited task
  };

  // Reset Form
  const resetForm = () => {
    setFormState({
      id: null,
      category: "",
      title: "",
      imageUrl: "",
      points: "",
      assignee: "",
      user: "",
      completed: "",
      published: "",
      createdAt: "",
      updatedAt: "",
      dueAt: "",
      description: "",
    });
    setIsEditing(false);
    setEditingTask(null); // Reset editing task
  };

  const [isTableView, setIsTableView] = useState(true); // Default to table view

  return (
    <div className="p-8 space-y-6 flex flex-col mx-auto container">
      {/* Toaster for notifications */}
      <Toaster position="top-right" richColors />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Tasks</h1>
          <p className="text-sm text-muted-foreground">
            Create tasks to engage America's youth.
          </p>
        </div>
        {/* Create task Dialog */}
        <div className="flex gap-5">
          {/*Grid and List view Buttons */}
          <div className="flex gap-2">
            {/* Table View Button */}
            <Button
              variant={isTableView ? "default" : "ghost"}
              onClick={() => setIsTableView(true)}
            >
              <List className="w-5 h-5" />
            </Button>

            {/* Grid View Button */}
            <Button
              variant={!isTableView ? "default" : "ghost"}
              onClick={() => setIsTableView(false)}
            >
              <Grid className="w-5 h-5" />
            </Button>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-primary text-white">Create Task</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create Task</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleFormSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={formState.title}
                      onChange={handleInputChange}
                      placeholder="Enter task title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Input
                      id="description"
                      value={formState.description}
                      onChange={handleInputChange}
                      placeholder="Enter task description"
                    />
                  </div>
                  <div>
                    <Label htmlFor="Assignee">Assignee</Label>
                    <Input
                      id="assignee"
                      value={formState.assignee}
                      onChange={handleInputChange}
                      placeholder="Enter assignee's email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="user">User</Label>
                    <Input
                      id="user"
                      value={formState.user}
                      onChange={handleInputChange}
                      placeholder="Enter user's email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="createdAt">Created At</Label>
                    <Input
                      type="date"
                      id="createdAt"
                      value={formState.createdAt}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="updatedAt">Updated At</Label>
                    <Input
                      type="date"
                      id="updatedAt"
                      value={formState.updatedAt}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="dueAt">Due At</Label>
                    <Input
                      type="date"
                      id="dueAt"
                      value={formState.dueAt}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
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
                        <SelectItem value="draft">Voter Education</SelectItem>
                        <SelectItem value="active">Voter Pride</SelectItem>
                        <SelectItem value="active">
                          Voter Registration
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="points">Points</Label>
                    <Input
                      id="points"
                      type="number"
                      value={formState.points}
                      onChange={handleInputChange}
                      placeholder="Enter points"
                    />
                  </div>
                  <div>
                    <Label htmlFor="image">Image</Label>
                    <Input
                      id="image"
                      type="file"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <Button type="submit" className="mt-4 w-full bg-primary">
                  Submit
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Tasks Table */}
      {isTableView && <div className="rounded-md border shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead></TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Points</TableHead>
              <TableHead>assignee</TableHead>
              <TableHead>User</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={task.imageUrl} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{task.category}</TableCell>
                <TableCell>{task.points}</TableCell>
                <TableCell>{task.assignee}</TableCell>
                <TableCell>{task.user}</TableCell>
                <TableCell>
                  {/* Edit and Delete Dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreHorizontal className="cursor-pointer" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => handleEdit(task)}>
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDelete(task.id, task.title)}
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
      </div>}

      {/* Tasks Card */}
      {!isTableView && <div className="flex gap-5">
        {tasks.map((task) => (
          <Card
            key={task.id} // Ensure all IDs are unique
            className="w-[300px] flex flex-col justify-between shadow-sm border"
          >
            <CardHeader>
              <h2 className="font-semibold text-lg">{task.title}</h2>
              <p className="text-gray-500 text-sm">{task.description}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">{task.createdAt}</p>
            </CardContent>
            <CardContent>
              <p className="text-sm text-gray-400">{task.points} points</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span
                className={`text-sm capitalize ${
                  task.category === "Voter Education"
                    ? "text-blue-500"
                    : task.category === "Voter Pride"
                    ? "text-orange-300"
                    : task.category === "Community Engagement"
                    ? "text-lime-500"
                    : task.category === "Voter Registration"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {task.category}
              </span>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost">
                  <Star size={16} />
                </Button>
                <Button
                  onClick={() => handleEdit(task)}
                  size="icon"
                  variant="ghost"
                >
                  <Edit size={16} />
                </Button>
                <Button
                  onClick={() => handleDelete(task.id, task.title)}
                  size="icon"
                  variant="ghost"
                  className="text-red-500"
                >
                  <Trash size={16} />
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>}
    </div>
  );
};

export default TasksPage;
