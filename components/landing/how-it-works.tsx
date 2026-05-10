'use client'
import { motion } from "motion/react";

export default function HowItWorks() {
  return (
    <div>
      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-24 px-6 border-t border-border/50"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto space-y-4 mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Focus on execution.
            </h2>
            <p className="text-lg text-muted-foreground">
              Three simple steps to regain control over your workday and ship
              efficiently.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 text-center relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-11.25 left-[15%] right-[15%] h-0.5 bg-border -z-10"></div>

            {[
              {
                num: 1,
                title: "Create your tasks",
                desc: "Jot down everything that needs to get done quickly via keyboard shortcuts.",
              },
              {
                num: 2,
                title: "Organize with tags",
                desc: "Assign priorities, projects, and flexible tags to structure the workload.",
              },
              {
                num: 3,
                title: "Track and complete",
                desc: "Focus on one thing at a time. Check it off and watch your progress grow.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-24 h-24 rounded-full bg-background border-2 border-border flex items-center justify-center text-3xl font-black text-muted-foreground shadow-sm shadow-primary/5">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground text-sm max-w-62.5 mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
