"use client";
import React, { useState, useTransition } from "react";
import { Button } from "./ui/button";
import { Pencil, Trash } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./ui/dialog";
import { editGallery, deleteGallery } from "@/app/action";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface IActionButton {
  item: {
    Id: number;
    Name: string;
    Description: string;
    Image: string;
  };
  action: "edit" | "delete";
}

export default function ActionButton({ item, action }: IActionButton) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  
  // State for edit form
  const [name, setName] = useState(item.Name);
  const [description, setDescription] = useState(item.Description);
  const [image, setImage] = useState(item.Image);

  const handleConfirm = () => {
    startTransition(async () => {
      if (action === "edit") {
        await editGallery({ Id: item.Id, Name: name, Description: description, Image: image });
      } else {
        await deleteGallery(item.Id);
      }
      setOpen(false);
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`hover:bg-gray-100 dark:hover:bg-gray-800 transition-all ${
            action === "delete" ? "hover:bg-red-100 dark:hover:bg-red-800" : ""
          }`}
        >
          {action === "edit" ? (
            <Pencil className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          ) : (
            <Trash className="w-5 h-5 text-red-600 dark:text-red-300" />
          )}
        </Button>
      </DialogTrigger>

      {/* DELETE CONFIRMATION MODAL */}
      {action === "delete" ? (
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to delete <strong>{item.Name}</strong>?</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button
              variant="destructive"
              onClick={handleConfirm}
              disabled={isPending}
            >
              {isPending ? "Processing..." : "Yes, Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      ) : (
        /* EDIT MODAL */
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Gallery</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4">
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Gallery Name" />
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button
              onClick={handleConfirm}
              disabled={isPending}
            >
              {isPending ? "Updating..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
}
