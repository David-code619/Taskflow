import { Clock, TrendingUp, CheckSquare, Calendar, Zap, Star} from "lucide-react";
import RecentTasks from "./recent-tasks";

export default function Dashboard() {
  return (
    <div>
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Good Morning, Alex
        </h1>
        <p className="text-base text-muted-foreground">
          Your productivity score is up 12% this week. Keep the momentum!
        </p>
      </header>

      {/* Tasks Completed */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card p-6 rounded-xl border border-border flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-default">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Tasks Completed</p>
            <h3 className="text-2xl font-bold text-foreground">24/30</h3>
            <div className="mt-2 flex items-center gap-2 text-emerald-600 text-sm font-medium">
              <TrendingUp className="w-4 h-4" />
              <span>+4 today</span>
            </div>
          </div>
          <div className="w-14 h-14 shrink-0 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckSquare className="w-7 h-7" />
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="bg-card p-6 rounded-xl border border-border flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-default">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Upcoming Deadlines</p>
            <h3 className="text-2xl font-bold text-foreground">06</h3>
            <div className="mt-2 flex items-center gap-2 text-amber-600 text-sm font-medium">
              <Clock className="w-4 h-4" />
              <span>2 for today</span>
            </div>
          </div>
          <div className="w-14 h-14 shrink-0 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
            <Calendar className="w-7 h-7" />
          </div>
        </div>

        {/* Productivity Score */}
        <div className="bg-card p-6 rounded-xl border border-border flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-default">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Productivity Score</p>
            <h3 className="text-2xl font-bold text-foreground">92%</h3>
            <div className="mt-2 flex items-center gap-2 text-primary text-sm font-medium">
              <Star className="w-4 h-4" />
              <span>Elite Status</span>
            </div>
          </div>
          <div className="w-14 h-14 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <Zap className="w-7 h-7" />
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Recent Tasks
            </h2>
            <button className="text-primary text-sm font-medium hover:underline">
              View All
            </button>
          </div>
          <RecentTasks />
        </div>
      </div>
    </div>
  );
}
