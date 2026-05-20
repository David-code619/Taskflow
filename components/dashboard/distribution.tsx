'use client'
import { Layers } from "lucide-react";
import { motion } from "motion/react";

export default function Distribution() {
  return (
    <div>
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
                <span className="text-xl font-black italic">{prod.width}</span>
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
    </div>
  );
}
