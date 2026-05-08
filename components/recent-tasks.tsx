import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { GripVertical } from "lucide-react";

// interface Task {
//   tasks: {
//     id: string;
//     title: string;
//     status: string;
//   }[];
// }

export default function RecentTasks() {
  const tasks = [
    { id: "1", title: "Finish project report", status: "Completed" },
    { id: "2", title: "Prepare presentation slides", status: "In Progress" },
    { id: "3", title: "Study maths", status: "In Progress" },
    { id: "4", title: "VIsit John", status: "Completed" },
  ];

  return (
    <div>
      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="group bg-card p-4 rounded-xl border border-border hover:shadow-md transition-all duration-200 flex items-center gap-4">
            <div className="flex justify-between mx-3">
              <div className="flex items-center">
                <Checkbox
                  id={task.id}
                  // checked={checked}
                  // onCheckedChange={handleCheckedChange}
                />
                <Label
                  htmlFor={task.id}
                  className="text-base text-foreground font-semibold ml-3"
                >
                  {task.title}
                </Label>
              </div>
              <Badge variant="secondary">{task.status}</Badge>
            </div>
          </div>
        ))}
         {/* <div className="group bg-card p-4 rounded-xl border border-border hover:shadow-md transition-all duration-200 flex items-center gap-4">
              <div className="w-6 h-6 border-2 border-border rounded-md flex items-center justify-center group-hover:border-primary transition-colors cursor-pointer shrink-0"></div>
              <div className="grow">
                <h4 className="text-base text-foreground font-semibold">Q3 Design System Review</h4>
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">Project: Branding Hub • Due 4:00 PM</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded uppercase dark:bg-blue-900/40 dark:text-blue-400">Design</span>
              </div>
            </div> */}

      </div>
    </div>
  );
}
