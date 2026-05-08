"use client";
import { motion } from "motion/react";
import {
  ArrowRight,
  Play,
  Circle,
  Box,
  LayoutDashboard,
  TrendingUp,
  Tags,
  CheckSquare,
  Layers,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 lg:pt-48 pb-20 px-6 text-center z-10">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-100 bg-primary/20 blur-[120px] rounded-full -z-10 opacity-50 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto space-y-8"
      >
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          href="#"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/40 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors cursor-pointer"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          TaskFlow 2.0 is now live
          <ArrowRight className="w-4 h-4 ml-1" />
        </motion.a>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] text-transparent bg-clip-text bg-linear-to-b from-foreground to-foreground/70">
          Organize your work.
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-500">
            Focus on what matters.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          TaskFlow helps you manage tasks, track progress, and stay productive —
          all in one place. Engineered for speed and focus.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          <button className="px-8 py-4 w-full sm:w-auto bg-primary text-primary-foreground rounded-full font-bold text-base flex items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)] hover:shadow-[0_0_60px_-15px_rgba(var(--primary),0.7)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer">
            <Link href="/signup" className="flex">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </button>
          <button className="px-8 py-4 w-full sm:w-auto bg-card text-foreground border border-border rounded-full font-bold text-base flex items-center justify-center gap-2 shadow-sm hover:bg-muted transition-colors cursor-pointer">
            <Play className="w-4 h-4 fill-foreground" />
            View Demo
          </button>
        </motion.div>
      </motion.div>
      {/* Hero Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="mt-20 md:mt-32 max-w-5xl mx-auto relative group perspective"
      >
        {/* Mockup glowing shadow */}
        <div className="absolute -inset-1 bg-linear-to-r from-primary/30 to-blue-500/30 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000 -z-10"></div>

        <div className="relative rounded-2xl md:rounded-[2rem] border border-border/60 bg-card/50 backdrop-blur-3xl shadow-2xl overflow-hidden ring-1 ring-white/10 flex flex-col transform transition-transform duration-500 hover:scale-[1.01]">
          {/* macOS window header */}
          <div className="h-12 border-b border-border/50 bg-muted/20 flex items-center px-4 md:px-6 gap-2 sticky top-0 z-20">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-500/50"></div>
            </div>
            <div className="mx-auto flex items-center gap-2 px-3 py-1 bg-background/50 rounded-md border border-border/50 text-xs text-muted-foreground font-medium">
              app.taskflow.com
            </div>
          </div>

          {/* Application Mockup Body */}
          <div className="p-4 md:p-8 grid grid-cols-1 lg:grid-cols-4 gap-8 text-left relative z-10">
            {/* Sidebar Mockup */}
            <div className="hidden lg:flex flex-col gap-6 col-span-1">
              <div className="space-y-1">
                <div className="h-4 w-24 bg-muted-foreground/20 rounded mb-4"></div>
                <div className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg">
                  <LayoutDashboard className="w-4 h-4" />
                  <span className="text-sm font-medium">Dashboard</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-muted-foreground">
                  <CheckSquare className="w-4 h-4" />
                  <span className="text-sm font-medium">My Tasks</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-muted-foreground">
                  <Tags className="w-4 h-4" />
                  <span className="text-sm font-medium">Tags</span>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <p className="px-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                  Favorites
                </p>
                <div className="space-y-1">
                  <div className="flex items-center gap-3 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>Cloud App</span>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span>Marketing Site</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <p className="px-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                  Teams
                </p>
                <div className="space-y-2 px-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center text-[10px] text-blue-600 font-bold">
                      D
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">
                      Design
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-purple-100 flex items-center justify-center text-[10px] text-purple-600 font-bold">
                      E
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">
                      Engineering
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-auto space-y-4">
                <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Productivity
                  </p>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold text-foreground">
                      84%
                    </span>
                    <TrendingUp className="w-4 h-4 text-emerald-500 mb-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Mockup */}
            <div className="col-span-1 lg:col-span-3 space-y-6">
              <div className="flex justify-between items-end pb-4 border-b border-border/50">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                    Today&apos;s Focus
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    3 tasks remaining
                  </p>
                </div>
                <div className="hidden sm:flex items-center -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-background bg-slate-400"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-background bg-slate-500"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] text-primary-foreground font-bold z-10">
                    +2
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {/* Mock Task 1 */}
                <div className="bg-background/80 p-3 md:p-4 rounded-xl border border-border shadow-sm flex items-start gap-4 transition-all hover:border-primary/50 cursor-pointer group/task">
                  <Circle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5 group-hover/task:text-primary" />
                  <div className="grow">
                    <h4 className="text-sm font-semibold text-foreground">
                      Redesign Landing Page Hero
                    </h4>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-0.5 bg-blue-500/10 text-blue-500 text-[10px] font-bold rounded uppercase">
                        Design
                      </span>
                      <span className="px-2 py-0.5 bg-red-500/10 text-red-500 text-[10px] font-bold rounded uppercase">
                        High Priority
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground shrink-0">
                    Due Today
                  </span>
                </div>

                {/* Mock Task 2 */}
                <div className="bg-background/80 p-3 md:p-4 rounded-xl border border-border shadow-sm flex items-start gap-4 transition-all hover:border-primary/50 cursor-pointer group/task">
                  <Circle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5 group-hover/task:text-primary" />
                  <div className="grow">
                    <h4 className="text-sm font-semibold text-foreground">
                      Write Q3 Engineering Update
                    </h4>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-0.5 bg-orange-500/10 text-orange-500 text-[10px] font-bold rounded uppercase">
                        Writing
                      </span>
                      <span className="px-2 py-0.5 bg-muted text-muted-foreground text-[10px] font-bold rounded uppercase">
                        Docs
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground shrink-0">
                    Tomorrow
                  </span>
                </div>

                {/* Mock Task 3 */}
                <div className="bg-background/80 p-3 md:p-4 rounded-xl border border-border shadow-sm flex items-start gap-4 transition-all hover:border-primary/50 cursor-pointer group/task">
                  <Circle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5 group-hover/task:text-primary" />
                  <div className="grow">
                    <h4 className="text-sm font-semibold text-foreground">
                      Finalize Q4 Product Roadmap
                    </h4>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-0.5 bg-purple-500/10 text-purple-500 text-[10px] font-bold rounded uppercase">
                        Strategy
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground shrink-0">
                    Oct 24
                  </span>
                </div>

                {/* Mock Task 4 Completed */}
                <div className="bg-muted/30 p-3 md:p-4 rounded-xl border border-border/50 flex items-start gap-4 opacity-60">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="grow">
                    <h4 className="text-sm font-semibold text-foreground line-through">
                      Review Pull Requests
                    </h4>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold rounded uppercase">
                        Engineering
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground shrink-0">
                    Done
                  </span>
                </div>
              </div>

              <div className="pt-8 space-y-6">
                <div className="flex justify-between items-end pb-4 border-b border-border/50">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      Recent Projects
                    </h3>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-border bg-background/50 flex items-center gap-4 transition-all hover:bg-muted/50 cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
                      <Box className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Cloud Migration</p>
                      <p className="text-xs text-muted-foreground mt-1 text-nowrap">
                        12 tasks • 80% complete
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-background/50 flex items-center gap-4 transition-all hover:bg-muted/50 cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Q4 Roadmap</p>
                      <p className="text-xs text-muted-foreground mt-1 text-nowrap">
                        8 tasks • 25% complete
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom gradient fade for mockup */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-card/80 to-transparent pointer-events-none z-20"></div>
        </div>
      </motion.div>
    </section>
  );
}
