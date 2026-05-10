'use client'
import { motion } from 'motion/react'
import { Layers, Tags, CheckCircle2, LayoutDashboard } from 'lucide-react';

export default function Features() {
  return (
    <div>
      {/* Features Section */}
      <section
        id="features"
        className="py-24 px-6 bg-muted/10 border-t border-border/50 relative"
      >
        <div className="max-w-6xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Everything you need to ship faster.
            </h2>
            <p className="text-lg text-muted-foreground">
              TaskFlow is built with performance and simplicity in mind, giving
              you the tools to manage complex projects without the clutter.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Layers,
                title: "Smart Task Management",
                desc: "Create, update, and organize tasks effortlessly with intuitive shortcuts.",
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                border: "group-hover:border-blue-500/50",
              },
              {
                icon: Tags,
                title: "Powerful Tagging System",
                desc: "Categorize tasks with flexible tags and custom colors for quick filtering.",
                color: "text-purple-500",
                bg: "bg-purple-500/10",
                border: "group-hover:border-purple-500/50",
              },
              {
                icon: CheckCircle2,
                title: "Progress Tracking",
                desc: "Visualize completed vs pending tasks to see your velocity in real-time.",
                color: "text-emerald-500",
                bg: "bg-emerald-500/10",
                border: "group-hover:border-emerald-500/50",
              },
              {
                icon: LayoutDashboard,
                title: "Clean Dashboard",
                desc: "See productivity insights and focus areas at a single glance daily.",
                color: "text-orange-500",
                bg: "bg-orange-500/10",
                border: "group-hover:border-orange-500/50",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group p-6 rounded-3xl bg-card border border-border flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${feature.border}`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${feature.bg} ${feature.color}`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
