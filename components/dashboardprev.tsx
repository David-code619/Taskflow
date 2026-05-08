'use client'
import { motion } from "motion/react";
import { LayoutDashboard, CheckCircle2, BarChart3, Zap } from "lucide-react";

export default function Dashboardprev() {
  return (
    <div>
      {/* Dashboard Preview Split Section */}
      <section className="py-24 px-6 bg-card border-y border-border/50 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-bold uppercase tracking-widest">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Real-time Analytics</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Know exactly where your time goes.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stop guessing. TaskFlow’s dashboard auto-generates beautiful,
              actionable insights about your momentum, overdue items, and sprint
              completion rates.
            </p>
            <ul className="space-y-3 pt-4">
              {[
                "Visualize velocity over time",
                "Identify blockers instantly",
                "Track cross-project workload",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-foreground font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-50 -z-10"></div>
            <div className="rounded-2xl border border-border bg-background shadow-2xl p-6 rotate-2 hover:rotate-0 transition-transform duration-500 space-y-4">
              {/* Top Metric */}
              <div className="flex items-center gap-6 p-5 rounded-2xl bg-card border border-border/60 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
                <div className="relative w-16 h-16 shrink-0">
                  {/* Svg Circle Progress */}
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    <path
                      className="text-muted stroke-current"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <motion.path
                      className="text-primary stroke-current"
                      strokeWidth="3"
                      strokeDasharray="100, 100"
                      initial={{ strokeDashoffset: 100 }}
                      whileInView={{ strokeDashoffset: 15 }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: 0.2,
                      }}
                      strokeLinecap="round"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold">85%</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-0.5">
                    Focus Score
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    You&apos;re in the{" "}
                    <strong className="text-foreground">top 5%</strong> of users
                    this week. Keep up the deep work!
                  </p>
                </div>
              </div>

              {/* Mini Bento */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-linear-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                  <div className="absolute top-0 right-0 p-4 opacity-20 transform translate-x-2 -translate-y-2 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                  </div>
                  <p className="text-3xl font-black text-foreground mb-2 mt-2 tracking-tight">
                    42
                  </p>
                  <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 inline-block px-2 py-0.5 rounded uppercase tracking-wider">
                    Tasks Done
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-linear-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                  <div className="absolute top-0 right-0 p-4 opacity-20 transform translate-x-1 -translate-y-1 group-hover:scale-110 transition-transform">
                    <Zap className="w-12 h-12 text-orange-500" />
                  </div>
                  <p className="text-3xl font-black text-foreground mb-2 mt-2 tracking-tight">
                    12
                    <span className="text-sm font-bold text-muted-foreground ml-1">
                      days
                    </span>
                  </p>
                  <p className="text-[10px] font-bold text-orange-600 dark:text-orange-400 border border-orange-500/30 bg-orange-500/10 inline-block px-2 py-0.5 rounded uppercase tracking-wider">
                    Current Streak
                  </p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-sm relative overflow-hidden">
                <h4 className="font-semibold text-sm mb-5 flex items-center gap-2">
                  <LayoutDashboard className="w-4 h-4 text-primary" />
                  Live Activity Feed
                </h4>
                <div className="space-y-4">
                  <div className="flex gap-4 relative group">
                    <div className="absolute left-2.75 top-6 -bottom-6.25 w-px bg-border group-last:hidden"></div>
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 z-10 border border-emerald-500/30">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Completed &quot;Ship landing page&quot;
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                        Just now
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 relative justify-start items-start group">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 z-10 border border-blue-500/30">
                      <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Started &quot;Deep Work&quot; session
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
