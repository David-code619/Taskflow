"use client";
import { TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export default function VelocityChart() {
  return (
    <div>
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
    </div>
  );
}
