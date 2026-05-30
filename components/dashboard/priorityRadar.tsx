'use client'
import { Compass, ArrowUpRight, CheckCircle2, Sparkles, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import type { Task } from "@/types/types";
import { useRouter } from "next/navigation";

export default function PriorityRadar({tasks} : {tasks: Task[]}) {
const router = useRouter()

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  } as const;

  const handleClick = () => {
      router.push("/dashboard/tasks")
  }
  return (
    <div>
      {/* Complex Layout */}
      <motion.section
        variants={itemVariants}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 items-stretch mb-8"
      >
        {/* Priority Radar */}
        <div className="lg:col-span-7 xl:col-span-8 bg-card rounded-[2.5rem] border border-border p-6 md:p-8 flex h-full flex-col gap-8 overflow-hidden relative shadow-sm hover:shadow-md transition-shadow">
          <div className="absolute -top-20 -right-20 p-8 opacity-[0.03] pointer-events-none">
            <Compass className="w-100 h-100 text-foreground rotate-45 group-hover:rotate-90 transition-transform duration-1000" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-10">
            <div>
              <h3 className="text-3xl font-black tracking-tight text-foreground">
                Priority Radar
              </h3>
              <p className="text-sm font-medium text-muted-foreground mt-2 max-w-sm">
                The most critical tasks standing between you and your weekly
                goal.
              </p>
            </div>
            {tasks.length > 0 && (
              <Button
                variant="outline"
                onClick={handleClick}
                className="h-10 px-4 rounded-xl border border-border text-xs font-bold uppercase tracking-widest hover:bg-muted transition-colors flex items-center gap-2 self-start shrink-0"
              >
                View All <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            )}
          </div>

          <div className="relative z-10">
            {tasks.length > 0 ? (
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="group/task flex flex-col md:flex-row md:items-center justify-between p-5 rounded-[1.5rem] bg-muted/30 border border-transparent hover:border-border hover:bg-card transition-all cursor-pointer gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div>
                        <span className="block font-bold text-foreground text-lg group-hover/task:translate-x-1 transition-transform">
                          {task.title}
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className={`text-[10px] font-black uppercase tracking-wider ${task.priority === "URGENT" ? "text-rose-500" : "text-primary"}`}
                          >
                            Engineering
                          </span>
                          <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                            {task.status === "ACTIVE" ? "In Progress" : "To Do"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 w-full md:w-auto mt-2 md:mt-0 pl-12 md:pl-0">
                      {/* Progress removed for simplicity */}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-5 sm:p-6 text-center border border-dashed border-border rounded-[2rem] bg-muted/20">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-muted-foreground" />
                </div>
                <h4 className="text-xl font-bold tracking-tight text-foreground mb-2">
                  All Caught Up!
                </h4>
                <p className="text-sm font-medium text-muted-foreground max-w-sm">
                  You have no active tasks left on your radar. Take a break or
                  add something new.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* AI Insight Box */}
        <div className="lg:col-span-5 xl:col-span-4 bg-linear-to-br from-foreground to-foreground/90 text-background rounded-[2.5rem] p-8 md:p-10 flex h-full flex-col relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Sparkles className="w-32 h-32 text-background" />
          </div>

          <div className="relative z-10 flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
              <Zap className="w-5 h-5 text-background" />
            </div>
            <span className="text-xs font-black uppercase tracking-[0.2em]">
              Smart Insights
            </span>
          </div>

          <div className="relative z-10 grow py-4">
            <p className="text-2xl font-bold leading-snug">
              Based on your activity, you complete deep-work tasks{" "}
              <span className="text-primary font-black italic border-b border-primary/50">
                30% faster
              </span>{" "}
              in the mornings.
            </p>
            <p className="text-background/70 font-medium mt-6">
              Consider moving the &quot;API Documentation&quot; task to tomorrow
              morning to guarantee maximum focus.
            </p>
          </div>

          <div className="relative z-10 mt-8 space-y-3">
            <button className="w-full py-4 rounded-xl bg-background text-foreground font-black uppercase text-xs tracking-widest hover:scale-[1.02] active:scale-95 transition-all outline-none focus:ring-4 focus:ring-background/20 shadow-lg">
              Reschedule for AM
            </button>
            <button className="w-full py-4 rounded-xl border border-background/20 font-bold text-xs uppercase tracking-widest hover:bg-background/10 transition-colors">
              Dismiss
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
