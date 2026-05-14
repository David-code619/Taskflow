import { LucideIcon } from "lucide-react";

export default function KPICard({
  icon,
  label,
  value,
  trend,
  descLine,
}: {
  icon: LucideIcon;
  label: string;
  value?: string;
  trend: string;
  descLine: string;
}) {
  const IconComponent = icon;

  return (
    <div>
      <div className="group relative bg-card p-8 rounded-[2rem] border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none" />
        <div className="relative z-10 flex flex-col h-full justify-between gap-8">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <IconComponent className="w-6 h-6 text-primary group-hover:text-foreground transition-colors" />
            </div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground bg-background border border-border px-3 py-1.5 rounded-lg">
              {trend}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">
              {label}
            </p>
            <h3 className="text-4xl font-black tracking-tighter text-foreground mb-1">
              {value}
            </h3>
            <p className="text-xs font-medium text-muted-foreground">
              {descLine}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
