import { Target, Activity, Flame } from "lucide-react";
import { getTasks, getWeeklyUserEfficiency } from "@/lib/actions/task";
import KPICard from "../kpi-card";
import PriorityRadar from "./priorityRadar";
import Distribution from "./distribution";
import VelocityChart from "./velocityChart";

export default async function Dashboard() {
  const [tasks, stats] = await Promise.all([
    getTasks(),
    getWeeklyUserEfficiency(),
  ]);
  return (
    <div>
      {/* Main Stats Row */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 mb-8">
        <KPICard
          icon={Target}
          label="Weekly Completion"
          // Safely handle missing data from the API
          value={`${stats?.completed ?? 0}/${stats?.total ?? 0}`}
          trend="+12%"
          descLine="Tasks Delivered so far"
        />
        <KPICard
          icon={Flame}
          label="Focus Streak"
          value="14"
          trend="Days"
          descLine="Keep the fire burning"
        />
        <KPICard
          icon={Activity}
          label="Efficiency Score"
          // Ensure a numeric percentage is always shown
          value={`${stats?.percentage ?? 0}%`}
          trend="Top 5%"
          descLine="Compared to last month"
        />
      </section>

      {/* Complex Layout */}
      <PriorityRadar tasks={tasks} />

      {/* Bottom Distribution & Velocity Row */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
        {/* Distribution */}
        <Distribution />

        {/* Velocity Chart */}
        <VelocityChart />
      </section>
    </div>
  );
}

