"use client";
import { Checkbox } from "../ui/checkbox";
import { Calendar } from "lucide-react";
import { TaskDrawer } from "./task-drawer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { updateTask } from "@/lib/actions/task";
import { toast } from "sonner";
import { DeleteBtn } from "../deletebtn";
import type { Task } from "@/types/types";

export default function TaskItem({ task }: { task: Task }) {
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
              {task.dueDate?.toLocaleDateString().split("T")[0]}
            </span>
          </div>
          <h3 className="font-semibold text-base truncate transition-all ">
            {task.title}
          </h3>
        </div>

        {/* Right Action Col */}
        <TaskDrawer task={task} />

        <DeleteBtn id={task.id} title={task.title} />
      </div>
    </div>
  );
}
