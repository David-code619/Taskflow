'use client'
import { 
  CheckCircle2, Search, Filter, Trash2, 
  RotateCcw, Calendar, Tag, MoreVertical
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Completed() {
  const completedTasks = [
    {
      id: 1,
      title: 'Update Brand Guidelines',
      project: 'Marketing Site',
      completedDate: '2 hours ago',
      category: 'Design',
      priority: 'High',
      color: 'text-blue-500'
    },
    {
      id: 2,
      title: 'Fix Navigation Bug on Mobile',
      project: 'Cloud App',
      completedDate: 'Yesterday',
      category: 'Engineering',
      priority: 'Medium',
      color: 'text-purple-500'
    },
    {
      id: 3,
      title: 'Quarterly Sales Report',
      project: 'Finance',
      completedDate: '2 days ago',
      category: 'Reporting',
      priority: 'Low',
      color: 'text-emerald-500'
    },
    {
      id: 4,
      title: 'User Interview Sessions',
      project: 'Research',
      completedDate: 'Oct 20, 2023',
      category: 'UX Research',
      priority: 'High',
      color: 'text-orange-500'
    },
    {
      id: 5,
      title: 'API Documentation Update',
      project: 'Engineering',
      completedDate: 'Oct 18, 2023',
      category: 'Documentation',
      priority: 'Medium',
      color: 'text-indigo-500'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-emerald-500 uppercase tracking-widest mb-1">Archive View</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Completed</h1>
          <p className="text-base text-muted-foreground">Review your achievements and past project goals.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search archive..." 
              className="pl-10 pr-4 py-2.5 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all w-full md:w-64"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-xl text-sm font-semibold hover:bg-muted transition-colors cursor-pointer">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-3xl">
          <h3 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">Total Completed</h3>
          <p className="text-4xl font-black text-foreground">248</p>
          <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <span className="bg-emerald-500/10 px-1.5 py-0.5 rounded">+12%</span>
            <span>from last month</span>
          </div>
        </div>
        <div className="bg-card border border-border p-6 rounded-3xl">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Success Rate</h3>
          <p className="text-4xl font-black text-foreground">94%</p>
          <div className="mt-4 w-full bg-muted h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full w-[94%]"></div>
          </div>
        </div>
        <div className="bg-card border border-border p-6 rounded-3xl">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Active Projects</h3>
          <p className="text-4xl font-black text-foreground">12</p>
          <p className="mt-4 text-xs font-medium text-muted-foreground">Across 4 departments</p>
        </div>
      </div>

      {/* Task List */}
      <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-sm">
        <div className="p-6 border-b border-border bg-muted/30">
          <h3 className="font-bold text-lg">History Log</h3>
        </div>
        
        <div className="divide-y divide-border">
          {completedTasks.map((task, idx) => (
            <motion.div 
              key={task.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group p-5 flex flex-col md:flex-row md:items-center gap-6 hover:bg-muted/50 transition-colors"
            >
              <div className="shrink-0">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              </div>

              <div className="grow space-y-1">
                <div className="flex items-center gap-3">
                  <h4 className="text-base font-bold text-foreground line-through decoration-muted-foreground/40">{task.title}</h4>
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground bg-muted px-2 py-0.5 rounded leading-none">
                    {task.category}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Tag className="w-3 h-3" />
                    {task.project}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    Completed {task.completedDate}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors cursor-pointer" title="Restore Task">
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-destructive/10 hover:text-destructive rounded-lg transition-colors cursor-pointer" title="Delete Permanent">
                  <Trash2 className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-muted rounded-lg transition-colors cursor-pointer">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="p-6 bg-muted/20 flex items-center justify-center">
          <button className="text-sm font-bold text-primary hover:underline cursor-pointer">Load more history</button>
        </div>
      </div>

    </div>
  );
}
