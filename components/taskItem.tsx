"use client";
import { Checkbox } from "./ui/checkbox";
import { Calendar, EllipsisVertical, Clock } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { updateTask } from "../lib/actions/task";

import type { Task } from "@/lib/actions/task";
import { toast } from "sonner";

export default function TaskItem({ task }: { task: Task }) {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [checked, setChecked] = useState(task.status === "DONE" ? true : false);

  const handleCheckedChange = async (checked: boolean) => {
    if (!task.id) {
      toast.error("Task ID missing");
      return;
    }
    const newStatus = checked ? "DONE" : "TODO";
    setChecked(checked);
    try {
      const response = await updateTask(task.id, newStatus);
      if (response?.success) {
        toast.success(response.message);
      } else {
        setChecked(!checked);
        toast.error("Failed to update task");
      }
    } catch (error) {
      setChecked(!checked);
      console.error("Error updating task:", error);
      toast.error("Failed to update task");
    }
  };
  return (
    <div>
      {" "}
      <div className="group flex items-center gap-4 p-4 pr-6 rounded-2xl border transition-all cursor-pointer bg-background hover:shadow-md">
        {/* Checkbox Col */}
        <Checkbox
          id={task.id}
          checked={checked}
          onCheckedChange={handleCheckedChange}
          className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl transition-all border"
        />

        {/* Content Col */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-1.5">
            <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-md flex items-center gap-1">
              Engineering
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground flex items-center gap-1">
              <Calendar className="w-3 h-3" />{" "}
              {task.dueDate?.toISOString().split("T")[0]}
            </span>
          </div>
          <h3 className="font-semibold text-base truncate transition-all ">
            {task.title}
          </h3>
        </div>

        {/* Right Action Col */}
        <DropdownMenu>
          <DropdownMenuTrigger className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
            <EllipsisVertical className="w-5 h-5 text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-20" align="start">
            <DropdownMenuGroup>
              <DropdownMenuItem
                onClick={() => {
                  setSelectedTask(task);
                  setIsDrawerOpen(true);
                }}
              >
                View
              </DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Drawer for viewing task details */}
      <Drawer
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        direction="right"
      >
        <DrawerContent>
          <DrawerHeader className="flex">
            <DrawerTitle>Engineering</DrawerTitle>
            <DrawerDescription>Hello</DrawerDescription>
          </DrawerHeader>
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
            {/* Status Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 font-mono text-[10px] uppercase tracking-widest bg-muted rounded-md text-foreground">
                Engineering
              </span>
              <span
                className={`px-3 py-1 font-mono text-[10px] uppercase tracking-widest rounded-md ${
                  selectedTask?.priority === "URGENT"
                    ? "bg-rose-500/10 text-rose-500"
                    : selectedTask?.priority === "HIGH"
                      ? "bg-amber-500/10 text-amber-600"
                      : "bg-slate-500/10 text-slate-500"
                }`}
              >
                {selectedTask?.priority} Pr.
              </span>
            </div>

            <h2 className="font-display text-3xl font-bold leading-tight">
              {selectedTask?.title}
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-1">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> Due Date
                </div>
                <div className="font-medium text-sm">
                  {selectedTask?.dueDate?.toISOString().split("T")[0]}
                </div>
              </div>
              <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-1">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Duration
                </div>
                {/* <div className="font-medium text-sm">{selectedTask?.duration || '--'}</div> */}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Description
              </h3>
              <div className="text-base text-foreground/80 leading-relaxed">
                {selectedTask?.description ? (
                  selectedTask?.description
                ) : (
                  <span className="italic opacity-50">
                    No additional context provided mapping.
                  </span>
                )}
              </div>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
