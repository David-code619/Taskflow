'use client'
import { useSidebar } from "@/components/ui/sidebar";
import { Command } from "lucide-react";

export default function TaskFlow() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <div className="flex items-center gap-2 px-4 py-2 group-data-[state=collapsed]:justify-center">
      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Command className="size-4" />
      </div>

      {!isCollapsed && (
        <div className="flex gap-0.5 leading-none">
          <span className="font-semibold">TaskFlow</span>
        </div>
      )}
    </div>
  );
}
