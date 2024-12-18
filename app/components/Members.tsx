import React, { useState } from "react";
import { useMembers } from "../../context/MembersContext";
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

const MembersPage = () => {
  const { members, addMember, editMember, deleteMember } = useMembers();
  const [formState, setFormState] = useState({
    id: null,
    name: "",
    status: "",
    image: "",
    points: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingMember, setEditingMember] = useState(null); // Tracks member being edited

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
      editMember(formState);
      toast.success(`${formState.name} has just been updated!`);
    } else {
      addMember({ ...formState, visibility: false });
      toast.success(`${formState.name} has been added successfully!`);
    }
    resetForm();
  };

  // Handle Delete
  const handleDelete = (id, name) => {
    deleteMember(id);
    toast.error(`${name} has been deleted successfully!`);
  };

  // Handle Edit
  const handleEdit = (member) => {
    setFormState(member);
    setIsEditing(true);
    setEditingMember(member); // Set the currently edited member
  };

  // Reset Form
  const resetForm = () => {
    setFormState({
      id: null,
      name: "",
      status: "",
      image: "",
      points: "",
    });
    setIsEditing(false);
    setEditingMember(null); // Reset editing member
  };

  return (
    <div className="p-8 space-y-6 flex flex-col mx-auto container">
      {/* Toaster for notifications */}
      <Toaster position="top-right" richColors />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Members</h1>
          <p className="text-sm text-muted-foreground">
            Create and update information of new youth members.
          </p>
        </div>
        {/* Create Member Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary text-white">Create Member</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Member</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleFormSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Enter member's name"
                  />
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

      {/* Members Table */}
      <div className="rounded-md border shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Points</TableHead>
              <TableHead>Visibility</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member) => (
              <TableRow key={member.id}>
                <TableCell>{member.name}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      member.status === "Draft"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {member.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={member.image} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{member.points}</TableCell>
                <TableCell>
                  <Eye
                    className={`w-5 h-5 ${
                      member.visibility ? "text-green-600" : "text-gray-400"
                    }`}
                  />
                </TableCell>
                <TableCell>
                  {/* Edit and Delete Dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreHorizontal className="cursor-pointer" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => handleEdit(member)}>
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDelete(member.id, member.name)}
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
      {editingMember && (
        <Dialog open={!!editingMember} onOpenChange={() => resetForm()}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Member</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleFormSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Enter member's name"
                  />
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

export default MembersPage;
