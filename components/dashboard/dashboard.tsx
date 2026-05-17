"use client";
import { useRouter } from "next/navigation";
import {
  Zap,
  Target,
  Sparkles,
  ArrowUpRight,
  Play,
  Activity,
  Layers,
  ArrowRight,
  Flame,
  TrendingUp,
  Compass,
  CheckCircle2,
} from "lucide-react";
import { motion } from "motion/react";
import type { Task, WeeklyStats } from "@/lib/actions/task";
import { Button } from "../ui/button";
import KPICard from "../kpi-card";

export default function Dashboard({
  stats,
  tasks,
}: {
  stats: WeeklyStats;
  tasks: Task[];
}) {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  } as const;

  const handleNav = () => {
    router.push("/dashboard/focus");
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-350 mx-auto px-4 md:px-8 py-8 space-y-12 mb-20 relative"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-40 right-1/4 w-100 h-100 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Hero Section */}
      <motion.section
        variants={itemVariants}
        className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-10 pt-6"
      >
        <div className="space-y-6 max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
              Flow State Active
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter text-foreground leading-[0.85] -ml-1">
            Focus & <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-500 to-indigo-500 italic pr-4">
              execute.
            </span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-medium mt-6 max-w-xl leading-relaxed">
            You&apos;re operating at{" "}
            <span className="text-foreground font-bold border-b border-primary/30">
              peak efficiency
            </span>
            . Keep up the momentum to crush today&apos;s objectives.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row xl:flex-col gap-4 relative z-10">
          <button
            onClick={handleNav}
            className="h-14 px-8 rounded-full bg-foreground text-background font-black tracking-widest uppercase text-xs flex items-center justify-center gap-3 hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-foreground/10 group"
          >
            <Play className="w-4 h-4 fill-current group-hover:text-primary transition-colors" />
            Enter Focus Mode
            <ArrowRight className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="h-14 px-6 flex items-center justify-center rounded-full bg-background/50 backdrop-blur-md border border-border text-sm font-bold text-foreground gap-3 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              Active Sprint:{" "}
              <span className="text-muted-foreground">Day 3/14</span>
            </span>
          </div>
        </div>
      </motion.section>

      {/* Main Stats Row */}
      <motion.section
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10"
      >
        <KPICard
          icon={Target}
          label="Weekly Completion"
          value={`${stats.completed}/${stats.total}`}
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
          value={`${stats.percentage}%`}
          trend="Top 5%"
          descLine="Compared to last month"
        />
      </motion.section>

      {/* Complex Layout */}
      <motion.section
        variants={itemVariants}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10 items-stretch"
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
              <Button variant='outline' className="h-10 px-4 rounded-xl border border-border text-xs font-bold uppercase tracking-widest hover:bg-muted transition-colors flex items-center gap-2 self-start shrink-0">
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

      {/* Bottom Distribution & Velocity Row */}
      <motion.section
        variants={itemVariants}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10"
      >
        {/* Distribution */}
        <div className="bg-card border border-border rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group overflow-hidden relative shadow-sm">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h3 className="text-3xl font-black tracking-tight text-foreground">
                Effort Distribution
              </h3>
              <p className="text-sm font-medium text-muted-foreground mt-2">
                Time allocation across domains
              </p>
            </div>
            <div className="p-3 bg-muted rounded-2xl">
              <Layers className="w-6 h-6 text-foreground" />
            </div>
          </div>

          <div className="space-y-8 relative z-10 w-full mb-6 max-w-lg">
            {[
              {
                name: "Engineering",
                description: "Core product development",
                color: "bg-indigo-500",
                width: "60%",
              },
              {
                name: "Design",
                description: "UX & Interface polishing",
                color: "bg-primary",
                width: "25%",
              },
              {
                name: "Administrative",
                description: "Meetings & emails",
                color: "bg-muted-foreground/50",
                width: "15%",
              },
            ].map((prod, i) => (
              <div key={i} className="group/bar">
                <div className="flex justify-between items-end mb-3">
                  <div>
                    <span className="block text-sm font-black text-foreground">
                      {prod.name}
                    </span>
                    <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">
                      {prod.description}
                    </span>
                  </div>
                  <span className="text-xl font-black italic">
                    {prod.width}
                  </span>
                </div>
                <div className="w-full h-4 rounded-full bg-muted overflow-hidden border border-border/50">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: prod.width }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: i * 0.15,
                    }}
                    className={`h-full ${prod.color} group-hover/bar:brightness-110 transition-all`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Velocity Chart */}
        <div className="bg-card border border-border rounded-[2.5rem] p-8 md:p-10 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-3xl font-black tracking-tight text-foreground">
                Completion Velocity
              </h3>
              <p className="text-sm font-medium text-muted-foreground mt-2">
                Tasks completed over past 10 days
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-emerald-500/10 text-emerald-500 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest">
              <TrendingUp className="w-4 h-4" />
              Optimal
            </div>
          </div>

          <div className="flex items-end gap-2 sm:gap-3 grow mt-4 relative">
            {/* Y-axis labels */}
            <div className="absolute -left-2 top-0 bottom-8 flex flex-col justify-between text-[10px] font-bold text-muted-foreground opacity-50 py-4 pointer-events-none">
              <span>100</span>
              <span>50</span>
              <span>0</span>
            </div>

            {/* Chart bars */}
            <div className="ml-6 grow flex items-end gap-2 sm:gap-4 h-full pb-8">
              {[30, 45, 25, 60, 40, 55, 80, 65, 45, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 group/vel relative flex justify-center h-50 sm:h-full items-end"
                >
                  {/* Tooltip */}
                  <div className="absolute -top-12 opacity-0 group-hover/vel:opacity-100 group-hover/vel:-translate-y-2 transition-all bg-foreground text-background text-xs font-black px-4 py-2 rounded-xl shadow-xl pointer-events-none z-20">
                    {h}%
                  </div>
                  <div className="w-full h-full flex flex-col justify-end relative">
                    <div className="absolute inset-x-0 bottom-0 top-0 bg-muted/30 rounded-2xl" />
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.8, delay: i * 0.05 }}
                      className={`w-full rounded-2xl transition-all relative z-10 ${i === 9 ? "bg-primary shadow-[0_0_20px_rgba(var(--primary),0.3)]" : "bg-foreground/20 group-hover/vel:bg-primary/60"}`}
                    />
                  </div>
                  <span className="absolute -bottom-8 text-[11px] font-bold text-muted-foreground uppercase">
                    D{i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
