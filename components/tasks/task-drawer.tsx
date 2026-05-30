import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { LucideEye, Calendar, Clock } from "lucide-react";
import type { Task } from "@/types/types";

export function TaskDrawer({task}: { task: Task }) {
  return (
    <div>
      {/* Drawer for viewing task details */}
      <Drawer direction="right">
        <DrawerTrigger className="opacity-0 group-hover:opacity-100">
          <LucideEye className="w-5 h-5 text-muted-foreground" />
        </DrawerTrigger>
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
                  task?.priority === "URGENT"
                    ? "bg-rose-500/10 text-rose-500"
                    : task?.priority === "HIGH"
                      ? "bg-amber-500/10 text-amber-600"
                      : "bg-slate-500/10 text-slate-500"
                }`}
              >
                {task?.priority}
              </span>
            </div>

            <h2 className="font-display text-3xl font-bold leading-tight">
              {task?.title}
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-1">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> Due Date
                </div>
                <div className="font-medium text-sm">
                  {task?.dueDate?.toLocaleDateString().split("T")[0]}
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
                {task?.description ? (
                  task?.description
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
