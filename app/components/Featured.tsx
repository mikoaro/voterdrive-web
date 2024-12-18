import React, { useState } from "react";
import { useFeatured } from "../../context/FeaturedContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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

const FeaturedPage = () => {
  const { featured, addFeatured, editFeatured, deleteFeatured } = useFeatured();
  const [formState, setFormState] = useState({
    id: null,
    title: "",
    status: "",
    image: "",
    link: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingFeatured, setEditingFeatured] = useState(null); // Tracks member being edited

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
      editFeatured(formState);
      toast.success(`${formState.name} has just been updated!`);
    } else {
      addFeatured({ ...formState, visibility: false });
      toast.success(`${formState.name} has been added successfully!`);
    }
    resetForm();
  };

  // Handle Delete
  const handleDelete = (id, name) => {
    deleteFeatured(id);
    toast.error(`${name} has been deleted successfully!`);
  };

  // Handle Edit
  const handleEdit = (featured) => {
    setFormState(featured);
    setIsEditing(true);
    setEditingFeatured(featured); // Set the currently edited member
  };

  // Reset Form
  const resetForm = () => {
    setFormState({
      id: null,
      title: "",
      status: "",
      image: "",
      link: "",
    });
    setIsEditing(false);
    setEditingFeatured(null); // Reset editing member
  };

  return (
    <div className="p-8 space-y-6 flex flex-col mx-auto container">
      {/* Toaster for notifications */}
      <Toaster position="top-right" richColors />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Featured</h1>
          <p className="text-sm text-muted-foreground">
            Create featured update for the youth members.
          </p>
        </div>
        {/* Create Member Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary text-white">Create Featured</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Featured</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleFormSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Title</Label>
                  <Input
                    id="title"
                    value={formState.title}
                    onChange={handleInputChange}
                    placeholder="Enter featured title"
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
                  <Label htmlFor="link">link</Label>
                  <Input
                    id="link"
                    type="text"
                    value={formState.link}
                    onChange={handleInputChange}
                    placeholder="Enter link"
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
              <TableHead>Link</TableHead>
              <TableHead>Visibility</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {featured.map((featured) => (
              <TableRow key={featured.id}>
                <TableCell>{featured.title}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      featured.status === "Draft"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {featured.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={featured.image} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="text-blue-600"><Link href={featured.link}>{featured.link}</Link></TableCell>
                <TableCell>
                  <Eye
                    className={`w-5 h-5 ${
                      featured.visibility ? "text-green-600" : "text-gray-400"
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
                      <DropdownMenuItem onClick={() => handleEdit(featured)}>
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDelete(featured.id, featured.title)}
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

      {/* Edit Featured Dialog */}
      {editingFeatured && (
        <Dialog open={!!editingFeatured} onOpenChange={() => resetForm()}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Featured</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleFormSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Title</Label>
                  <Input
                    id="name"
                    value={formState.title}
                    onChange={handleInputChange}
                    placeholder="Enter featured title"
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
                  <Label htmlFor="points">Link</Label>
                  <Input
                    id="link"
                    type="link"
                    value={formState.link}
                    onChange={handleInputChange}
                    placeholder="Enter link"
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

export default FeaturedPage;
