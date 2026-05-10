'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, Calendar, Clock, CheckCircle2, Circle, Play, 
  ArrowRight, Layers, ChevronRight, X, AlertOctagon, Check
} from 'lucide-react';

interface Task {
  id: string;
  title: string;
  category: string;
  priority: 'urgent' | 'high' | 'normal';
  status: 'todo' | 'active' | 'done';
  dueDate: string;
  duration?: string;
  body?: string;
}

const mockTasks: Task[] = [
  {
    id: 't-01',
    title: 'Finalize Q3 Performance Architecture',
    category: 'Engineering',
    priority: 'urgent',
    status: 'active',
    dueDate: 'Today, 14:00',
    duration: '1.5h',
    body: 'Review the scalability constraints, test the Redis caching layer under 1M req/s, and prepare findings for the board meeting.'
  },
  {
    id: 't-02',
    title: 'Internal Design Review - "Horizon"',
    category: 'Design',
    priority: 'high',
    status: 'todo',
    dueDate: 'Tomorrow, 10:00',
    duration: '2h',
    body: 'Audit the new dark mode aesthetics and ensure AAA contrast ratios across all primary buttons.'
  },
  {
    id: 't-03',
    title: 'Prepare slides for Stakeholder Briefing',
    category: 'Strategy',
    priority: 'normal',
    status: 'todo',
    dueDate: 'Aug 24, 2023',
    body: 'Highlight technical debt reduction efforts and the Q4 roadmap execution plan.'
  },
  {
    id: 't-04',
    title: 'Compile quarterly runway report',
    category: 'Finance',
    priority: 'normal',
    status: 'done',
    dueDate: 'Yesterday',
  }
];

interface MyTasksProps {
  onEnterFocusMode?: () => void;
}

export default function MyTasks({ onEnterFocusMode }: MyTasksProps) {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'done'>('all');
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  
  // Quick Create State
  const [quickTitle, setQuickTitle] = useState('');

  const filteredTasks = tasks.filter(t => {
    if (activeFilter === 'active') return t.status !== 'done';
    if (activeFilter === 'done') return t.status === 'done';
    return true;
  });

  const stats = {
    total: tasks.length,
    done: tasks.filter(t => t.status === 'done').length,
    active: tasks.filter(t => t.status !== 'done').length,
    urgent: tasks.filter(t => t.priority === 'urgent' && t.status !== 'done').length
  };

  const handleQuickAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickTitle.trim()) return;
    const newTask: Task = {
      id: `t-${Date.now()}`,
      title: quickTitle,
      category: 'Inbox',
      priority: 'normal',
      status: 'todo',
      dueDate: 'Soon',
    };
    setTasks([newTask, ...tasks]);
    setQuickTitle('');
  };

  const toggleTaskStatus = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setTasks(ts => ts.map(t => 
      t.id === id ? { ...t, status: t.status === 'done' ? 'todo' : 'done' } : t
    ));
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex flex-col lg:flex-row bg-background">
      
      {/* LEFT PANEL: Context & Stats */}
      <div className="w-full lg:w-[35%] xl:w-[30%] border-r border-border p-8 lg:p-12 flex flex-col justify-between shrink-0 bg-muted/10 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="space-y-12 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Synchronized</span>
            </div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-foreground">
              Task <br /> <span className="text-muted-foreground italic">Matrix.</span>
            </h1>
            <p className="mt-6 text-foreground/70 text-base max-w-70 leading-relaxed">
              Orchestrate your workflow with precision. Focus on high-leverage outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-background border border-border shadow-sm flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Active</span>
              <span className="font-display text-4xl font-bold">{stats.active}</span>
            </div>
            <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20 shadow-sm flex flex-col gap-2">
               <span className="font-mono text-xs uppercase tracking-widest text-rose-500">Urgent</span>
               <span className="font-display text-4xl font-bold text-rose-600 dark:text-rose-400">{stats.urgent}</span>
            </div>
          </div>
        </div>

        <div className="mt-12 relative z-10">
          <button 
             onClick={onEnterFocusMode}
             className="group w-full bg-foreground text-background rounded-2xl p-6 flex flex-col gap-4 hover:bg-foreground/90 transition-all hover:scale-[1.02] shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(255,255,255,0.05)]"
          >
             <div className="flex items-center justify-between w-full">
               <Layers className="w-6 h-6" />
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </div>
             <div className="text-left">
               <div className="font-mono text-[10px] uppercase tracking-widest opacity-70 mb-1">Deep Work Mode</div>
               <div className="font-bold text-xl">Engage Focus Flow</div>
             </div>
          </button>
        </div>
      </div>

      {/* RIGHT PANEL: The Queue */}
      <div className="flex-1 flex flex-col relative w-full lg:max-w-[70%]">
        
        {/* Top Header / Filters */}
        <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-xl border-b border-border px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-1 bg-muted p-1 rounded-xl">
             {['all', 'active', 'done'].map((f) => (
                <button 
                  key={f}
                  onClick={() => setActiveFilter(f as any)}
                  className={`px-5 py-2 rounded-lg font-mono text-[11px] uppercase tracking-widest transition-all ${
                    activeFilter === f 
                      ? 'bg-background text-foreground shadow-sm font-bold' 
                      : 'text-muted-foreground hover:text-foreground font-medium'
                  }`}
                >
                  {f}
                </button>
             ))}
          </div>

          <form onSubmit={handleQuickAdd} className="relative max-w-sm w-full">
             <input 
               type="text"
               value={quickTitle}
               onChange={(e) => setQuickTitle(e.target.value)}
               placeholder="Quick create..."
               className="w-full bg-muted/50 border border-transparent focus:bg-background focus:border-border h-11 rounded-xl pl-11 pr-4 text-sm font-medium transition-all outline-none"
             />
             <Plus className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          </form>
        </div>

        {/* Task List */}
        <div className="flex-1 p-8 overflow-y-auto">
          <AnimatePresence mode="popLayout">
            {filteredTasks.length === 0 ? (
               <motion.div 
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                 className="flex flex-col items-center justify-center h-full text-muted-foreground pb-20"
               >
                 <CheckCircle2 className="w-16 h-16 mb-4 opacity-20" />
                 <p className="font-mono text-sm tracking-widest uppercase">Zero Data Required</p>
               </motion.div>
            ) : (
              <div className="space-y-3">
                {filteredTasks.map((task) => {
                  const isDone = task.status === 'done';
                  const isUrgent = task.priority === 'urgent';
                  const isActive = task.status === 'active';

                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      key={task.id}
                      onClick={() => setSelectedTask(task)}
                      className={`group flex items-center gap-4 p-4 pr-6 rounded-2xl border transition-all cursor-pointer bg-background hover:shadow-md
                        ${isDone ? 'opacity-60 border-transparent hover:border-border' : 'border-border/50 hover:border-border'}
                        ${selectedTask?.id === task.id ? 'ring-2 ring-primary border-transparent shadow-md' : ''}
                      `}
                    >
                      {/* Checkbox Col */}
                      <button 
                        onClick={(e) => toggleTaskStatus(e, task.id)}
                        className={`w-12 h-12 shrink-0 flex items-center justify-center rounded-xl transition-all border
                          ${isDone 
                            ? 'bg-primary text-primary-foreground border-transparent' 
                            : 'bg-muted/50 border-transparent hover:border-primary/50 hover:bg-primary/5 text-muted-foreground'}
                        `}
                      >
                        {isDone ? <Check className="w-5 h-5" /> : 
                         isActive ? <Play className="w-4 h-4 text-primary fill-primary/20 translate-x-px" /> :
                         <Circle className="w-5 h-5 opacity-40 group-hover:opacity-100" />}
                      </button>

                      {/* Content Col */}
                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-1.5">
                          <span className={`font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-md flex items-center gap-1 ${
                            isUrgent && !isDone ? 'bg-rose-500/10 text-rose-500' : 'bg-muted text-muted-foreground'
                          }`}>
                            {isUrgent && !isDone && <AlertOctagon className="w-3 h-3" />}
                            {task.category}
                          </span>
                          {!isDone && (
                            <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground flex items-center gap-1">
                              <Calendar className="w-3 h-3" /> {task.dueDate}
                            </span>
                          )}
                        </div>
                        <h3 className={`font-semibold text-base truncate transition-all ${isDone ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                          {task.title}
                        </h3>
                      </div>

                      {/* Right Action Col */}
                      <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Slide-over Panel for Details */}
      <AnimatePresence>
        {selectedTask && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedTask(null)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Panel */}
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-dvh w-full max-w-md bg-background border-l border-border shadow-2xl z-50 flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  <span>{selectedTask.id}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>Details</span>
                </div>
                <button 
                  onClick={() => setSelectedTask(null)}
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
                >
                  <X className="w-4 h-4 text-foreground" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
                {/* Status Badges */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 font-mono text-[10px] uppercase tracking-widest bg-muted rounded-md text-foreground">
                    {selectedTask.category}
                  </span>
                  <span className={`px-3 py-1 font-mono text-[10px] uppercase tracking-widest rounded-md ${
                    selectedTask.priority === 'urgent' ? 'bg-rose-500/10 text-rose-500' :
                    selectedTask.priority === 'high' ? 'bg-amber-500/10 text-amber-600' :
                    'bg-slate-500/10 text-slate-500'
                  }`}>
                    {selectedTask.priority} Pr.
                  </span>
                </div>

                <h2 className="font-display text-3xl font-bold leading-tight">
                  {selectedTask.title}
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-1">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5"/> Due Date</div>
                    <div className="font-medium text-sm">{selectedTask.dueDate}</div>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-muted/20 space-y-1">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-1.5"><Clock className="w-3.5 h-3.5"/> Duration</div>
                    <div className="font-medium text-sm">{selectedTask.duration || '--'}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Context / Instructions</h3>
                  <div className="text-base text-foreground/80 leading-relaxed bg-background">
                    {selectedTask.body ? selectedTask.body : (
                      <span className="italic opacity-50">No additional context provided mapping.</span>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Sticky Footer */}
              <div className="p-6 border-t border-border bg-background">
                <button 
                  onClick={(e) => toggleTaskStatus(e, selectedTask.id)}
                  className={`w-full h-12 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    selectedTask.status === 'done' 
                      ? 'bg-muted text-foreground border border-border hover:bg-background' 
                      : 'bg-primary text-primary-foreground hover:scale-[1.02] shadow-[0_5px_20px_rgba(var(--primary),0.2)]'
                  }`}
                >
                   {selectedTask.status === 'done' ? (
                     <>Reopen Task</>
                   ) : (
                     <><CheckCircle2 className="w-4 h-4" /> Mark as Done</>
                   )}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
