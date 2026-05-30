"use client";
import { useState } from "react";
import { Trash2Icon } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteTask } from "@/lib/actions/task";
import { toast } from "sonner";

export function DeleteBtn({
  id,
  title,
}: {
  id: string | undefined;
  title: string;
}) {
  const [open, setOpen] = useState(false);

  async function handleDelete() {
    if (!id) {
      toast.error("Task ID missing");
      return;
    }
    try {
      await deleteTask(id);
      setOpen(false);
      toast.success("Task deleted successfully");
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Failed to delete task");
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger
        onClick={(e) => e.stopPropagation()}
        className="p-1.5 hover:bg-destructive/10 hover:text-destructive rounded-xl opacity-0 group-hover:opacity-100 transition-all cursor-pointer shadow-sm border border-transparent hover:border-destructive/30 focus:outline-none focus:ring-2 focus:ring-destructive focus:bg-destructive/10 focus:text-destructive"
      >
        <Trash2Icon className="h-4 text-destructive" />
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Delete task?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete &quot;{title}&quot;. This action cannot
            be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive" onClick={handleDelete}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
