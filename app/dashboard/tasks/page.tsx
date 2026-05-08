import RecentTasks from "@/components/recent-tasks";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Chart } from "@/components/chart";

export default function Tasks() {
  return (
    <div className="flex flex-col justify-between gap-6 pt-8 pl-10">
      <div className="space-y-1">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-1">
          EFFICIENCY CORE
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          My Tasks
        </h1>
        <p className="text-base text-muted-foreground">
          Mange your daily focus and track your momentum
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 m-4">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
              Today&apos;s Focus
            </h2>
            <span className="text-sm font-medium text-muted-foreground">
              4 Tasks Remaining
            </span>
          </div>
          <RecentTasks />
          <Button variant='outline' className="w-full p-5 rounded-2xl border-2 border-dashed border-border flex items-center justify-center gap-2 text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors cursor-pointer group mt-4">
            <Plus className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-sm font-semibold">
              Add a new task to this list...
            </span>
          </Button>
        </div>
        <div>
          <Chart />
        </div>
      </div>
    </div>
  );
}
