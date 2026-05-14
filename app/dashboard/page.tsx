import Dashboard from "@/components/dashboard";
import { getTasks, getWeeklyUserEfficiency } from "@/lib/actions/task";

export default async function Dasboard() {
  const tasks = await getTasks();
  const stats = await getWeeklyUserEfficiency();
  return (
    <div className="max-w-6xl mx-10 mt-10 animate-in fade-in duration-500">
      <Dashboard tasks={tasks} stats={stats} />
    </div>
  )
}
