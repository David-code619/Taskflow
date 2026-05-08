import RecentTasks from "@/components/recent-tasks";

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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
        </div>
      </div>
    </div>
  );
}
