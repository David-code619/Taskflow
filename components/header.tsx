"use client";
import { motion } from "motion/react";
import { CheckSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar Minimal */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-0">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`pointer-events-auto w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-background/80 backdrop-blur-md ${
            scrolled
              ? "mt-4 max-w-[calc(100%-2rem)] md:max-w-5xl rounded-full border border-border/50 shadow-lg shadow-background/20"
              : "mt-0 max-w-full flex-none rounded-none border-b border-border/50 shadow-none"
          }`}
        >
          <div className="mx-auto px-6 h-16 flex items-center justify-between w-full max-w-7xl">
            <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
              <CheckSquare className="w-6 h-6 text-primary" />
              <span>TaskFlow</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
              <a
                href="#features"
                className="hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="hover:text-foreground transition-colors"
              >
                How it works
              </a>
            </div>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <Button variant="ghost" className="hidden md:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                <Link href="/login">Log in</Link>
              </Button>
              <Button className="px-4 py-2 bg-foreground text-background text-sm font-semibold hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer">
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </motion.nav>
      </div>
    </div>
  );
}
