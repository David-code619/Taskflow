"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Cta() {
  return (
    <div>
      {" "}
      {/* Final CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 border-t border-border/50"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-75 bg-primary/20 blur-[100px] rounded-full z-0 pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-8 relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            Start managing your tasks smarter today.
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Join thousands of professionals who organize their work and life
            with TaskFlow.
          </p>
          <button className="px-8 py-4 bg-foreground text-background rounded-full font-bold text-lg inline-flex items-center justify-center gap-2 shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer">
            <Link href="/signup" className="flex">
              Create your free account
              <ArrowRight className="w-5 h-5" />
            </Link>
          </button>
        </motion.div>
      </section>
    </div>
  );
}
