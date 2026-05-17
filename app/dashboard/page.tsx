import Dashboard from "@/components/dashboard/dashboard";
import { getTasks, getWeeklyUserEfficiency } from "@/lib/actions/task";

export default async function Dasboard() {
  const [tasksData, statsData] = await Promise.all([
    getTasks(),
    getWeeklyUserEfficiency(),
  ]);
  return (
    <div className="max-w-6xl mx-10 mt-10 animate-in fade-in duration-500">
      <Dashboard tasks={tasksData} stats={statsData} />
    </div>
  );
}
