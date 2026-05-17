import { Layers, Plus } from "lucide-react";
import TaskItem from "./taskItem";
import { getTasks } from "@/lib/actions/task";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function TaskList() {
  const tasks = await getTasks();
  return (
    <div className="flex-1 flex flex-col relative w-full lg:max-w-[70%]">
      {/* Filters */}
      <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-xl border-b border-border px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-1 bg-muted p-1 rounded-xl">
          <Tabs
          // value={currentFilter}
          // onValueChange={(v) => setCurrentFilter(v)}
          >
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="done">Done</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <form className="relative max-w-sm w-full">
          <input
            type="text"
            placeholder="Quick create..."
            className="w-full bg-muted/50 border border-transparent focus:bg-background focus:border-border h-11 rounded-xl pl-11 pr-4 text-sm font-medium transition-all outline-none"
          />
          <Plus className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        </form>
      </div>
      <div className="flex-1 p-8 overflow-y-auto">
        {tasks?.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-muted-foreground pb-20">
            <div className="w-20 h-20 rounded-full bg-muted/60 flex items-center justify-center mb-6">
              <Layers className="w-10 h-10 text-muted-foreground/50" />
            </div>
            <h4 className="text-2xl font-black tracking-tight text-foreground mb-3">
              The Queue is Empty
            </h4>
          </div>
        ) : (
          <div className="space-y-3">
            {tasks?.map((task) => {
              return <TaskItem key={task.id} task={task} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
