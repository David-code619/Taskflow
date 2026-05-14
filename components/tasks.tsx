import {
  Plus,
  ArrowRight,
  Layers,
} from "lucide-react";

import TaskList from "@/components/taskList";

// const mockTasks: Task[] = [
//   {
//     id: "t-01",
//     title: "Finalize Q3 Performance Architecture",
//     category: "Engineering",
//     priority: "urgent",
//     status: "active",
//     dueDate: new Date(),
//     duration: "1.5h",
//     body: "Review the scalability constraints, test the Redis caching layer under 1M req/s, and prepare findings for the board meeting.",
//   },
// ];

export default function MyTasks() {
  // const [currentFilter, setCurrentFilter] = useState("all");

  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex flex-col lg:flex-row bg-background">
      {/* LEFT PANEL: Context & Stats */}
      <div className="w-full lg:w-[35%] xl:w-[30%] border-r border-border p-8 lg:p-12 flex flex-col justify-between shrink-0 bg-muted/10 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="space-y-12 relative z-10">
          <div>
            {/* Header */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold">
                Synchronized
              </span>
            </div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-foreground">
              Task <br />{" "}
              <span className="text-muted-foreground italic">Matrix.</span>
            </h1>
            <p className="mt-6 text-foreground/70 text-base max-w-70 leading-relaxed">
              Orchestrate your workflow with precision. Focus on high-leverage
              outcomes.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-background border border-border shadow-sm flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Active
              </span>
              <span className="font-display text-4xl font-bold">3</span>
            </div>
            <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20 shadow-sm flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-rose-500">
                Urgent
              </span>
              <span className="font-display text-4xl font-bold text-rose-600 dark:text-rose-400">
                2
              </span>
            </div>
          </div>
        </div>

        {/* Deep Work Button */}
        <div className="mt-12 relative z-10">
          <button className="group w-full bg-foreground text-background rounded-2xl p-6 flex flex-col gap-4 hover:bg-foreground/90 transition-all hover:scale-[1.02] shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(255,255,255,0.05)]">
            <div className="flex items-center justify-between w-full">
              <Layers className="w-6 h-6" />
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="text-left">
              <div className="font-mono text-[10px] uppercase tracking-widest opacity-70 mb-1">
                Deep Work Mode
              </div>
              <div className="font-bold text-xl">Engage Focus Flow</div>
            </div>
          </button>
        </div>
      </div>

      <TaskList />
    </div>
  );
}
