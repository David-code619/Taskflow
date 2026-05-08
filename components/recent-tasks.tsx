import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

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
          <Card
            size="default"
            key={task.id}
            className="group bg-card p-4 border border-border hover:shadow-md transition-all duration-200 flex gap-4"
          >
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
          </Card>
        ))}

      </div>
    </div>
  );
}
