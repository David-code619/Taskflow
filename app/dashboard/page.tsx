import Dashboard from "@/components/dashboard/dashboard";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Suspense } from "react";

export default function Dasboard() {
  return (
    <div className="max-w-6xl mx-10 mt-10 animate-in fade-in duration-500">
      <div className="max-w-350 mx-auto px-4 md:px-8 py-8 space-y-12 mb-20 relative">
        {/* Background Decor */}
        <div className="absolute top-0 left-1/4 w-125 h-125 bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-40 right-1/4 w-100 h-100 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

        {/* Hero Section */}
        <section className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-10 pt-6">
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
            <button className="h-14 px-8 rounded-full bg-foreground text-background font-black tracking-widest uppercase text-xs flex items-center justify-center gap-3 hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-foreground/10 group">
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
        </section>
        <Suspense fallback="Loading...">
          <Dashboard />
        </Suspense>
      </div>
    </div>
  );
}
