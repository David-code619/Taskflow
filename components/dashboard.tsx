import { Clock, TrendingUp, CheckSquare } from "lucide-react";
import RecentTasks from "./recent-tasks";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from "./ui/card";

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card p-6 rounded-xl border border-border flex shadow-sm hover:shadow-md transition-shadow cursor-default">
          <CardHeader>
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
              Tasks Completed
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold text-foreground flex justify-between">
            <span>24/30</span>
            <CheckSquare />
          </CardContent>
          <CardFooter className="mt-2 flex items-center gap-2 text-emerald-600 text-sm font-medium">
            <TrendingUp className="w-4 h-4" />
            <span>+4 today</span>
          </CardFooter>
        </Card>

        <Card className="bg-card p-6 rounded-xl border border-border flex justify-between shadow-sm hover:shadow-md transition-shadow cursor-default">
          <CardHeader>
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
              Upcoming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold text-foreground">
            06
          </CardContent>
          <CardFooter className="mt-2 flex items-center gap-2 text-amber-600 text-sm font-medium">
            <Clock className="w-4 h-4" />
            <span>2 for today</span>
          </CardFooter>
        </Card>

        <Card className="bg-card p-6 rounded-xl border border-border flex justify-between shadow-sm hover:shadow-md transition-shadow cursor-default">
          <CardHeader>
            <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
              Productivity Score
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold text-foreground">
            92%
          </CardContent>
          <CardFooter className="mt-2 flex items-center gap-2 text-primary text-sm font-medium">
            Elite Status
          </CardFooter>
        </Card>

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
