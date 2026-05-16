'use client'
import { useState } from 'react';
import { 
  CheckCircle2, Search, Filter, Trash2, 
  RotateCcw, Calendar, Tag, ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';


export interface Task {
  id: string;
  title: string;
  category: string;
  priority: 'urgent' | 'high' | 'normal';
  status: 'todo' | 'active' | 'done';
  dueDate: Date;
  duration?: string;
  body?: string;
  progress: number;
}

const now = new Date();
const yesterday = new Date(now); yesterday.setDate(yesterday.getDate() - 1);
const today1400 = new Date(now); today1400.setHours(14, 0, 0, 0);
const tomorrow1000 = new Date(now); tomorrow1000.setDate(tomorrow1000.getDate() + 1); tomorrow1000.setHours(10, 0, 0, 0);
const nextDay2 = new Date(now); nextDay2.setDate(nextDay2.getDate() + 2); nextDay2.setHours(9, 0, 0, 0);
const nextDay3 = new Date(now); nextDay3.setDate(nextDay3.getDate() + 3); nextDay3.setHours(15, 0, 0, 0);

const mockTasks: Task[] = [
  {
    id: 't-01',
    title: 'Finalize Q3 Performance Architecture',
    category: 'Engineering',
    priority: 'urgent',
    status: 'active',
    progress: 85,
    dueDate: today1400,
    duration: '1.5h',
    body: 'Review the scalability constraints, test the Redis caching layer under 1M req/s, and prepare findings for the board meeting.'
  },
  {
    id: 't-02',
    title: 'Internal Design Review - "Horizon"',
    category: 'Design',
    priority: 'high',
    status: 'todo',
    progress: 0,
    dueDate: tomorrow1000,
    duration: '2h',
    body: 'Audit the new dark mode aesthetics and ensure AAA contrast ratios across all primary buttons.'
  },
  {
    id: 't-03',
    title: 'Prepare slides for Stakeholder Briefing',
    category: 'Strategy',
    priority: 'normal',
    status: 'todo',
    progress: 0,
    dueDate: nextDay2,
    body: 'Highlight technical debt reduction efforts and the Q4 roadmap execution plan.'
  },
  {
    id: 't-04',
    title: 'Migrate legacy database schema',
    category: 'Ops',
    priority: 'normal',
    status: 'active',
    progress: 95,
    dueDate: nextDay3,
    body: 'Ensure zero downtime during the cutover. Monitor the replication lag.'
  },
  {
    id: 't-05',
    title: 'Compile quarterly runway report',
    category: 'Finance',
    priority: 'normal',
    status: 'done',
    progress: 100,
    dueDate: yesterday,
  }
];


export default function Completed() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [dateFilter, setDateFilter] = useState('all');
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const completedTasks = tasks.filter(t => {
    if (t.status !== 'done') return false;
    if (searchQuery && !t.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    
    if (dateFilter !== 'all') {
      const taskDate = new Date(t.dueDate);
      const now = new Date();
      if (dateFilter === 'today') {
        if (taskDate.toDateString() !== now.toDateString()) return false;
      } else if (dateFilter === 'week') {
        const weekAgo = new Date(now);
        weekAgo.setDate(weekAgo.getDate() - 7);
        if (taskDate < weekAgo) return false;
      } else if (dateFilter === 'month') {
        const monthAgo = new Date(now);
        monthAgo.setMonth(monthAgo.getMonth() - 1);
        if (taskDate < monthAgo) return false;
      }
    }
    return true;
  });

  const handleRestore = (id: string) => {
    setTasks(ts => ts.map(t => t.id === id ? { ...t, status: 'active', progress: 0 } : t));
  };
  
  const handleDelete = (id: string) => {
    setTasks(ts => ts.filter(t => t.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-emerald-500 uppercase tracking-widest mb-1">Archive View</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Completed</h1>
          <p className="text-base text-muted-foreground">Review your achievements and past completed tasks.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search archive..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2.5 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all w-full md:w-64"
            />
          </div>
          <div className="relative">
            <button 
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-xl text-sm font-semibold hover:bg-muted transition-colors cursor-pointer"
            >
              <Filter className="w-4 h-4" />
              <span>{dateFilter === 'all' ? 'Filter' : dateFilter === 'today' ? 'Today' : dateFilter === 'week' ? 'This Week' : 'This Month'}</span>
              <ChevronDown className="w-4 h-4 opacity-50 ml-1" />
            </button>
            <AnimatePresence>
              {filterOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-lg z-50 overflow-hidden"
                >
                  <div className="p-1">
                    {[
                      { id: 'all', label: 'All Time' },
                      { id: 'today', label: 'Today' },
                      { id: 'week', label: 'This Week' },
                      { id: 'month', label: 'This Month' }
                    ].map(f => (
                      <button
                        key={f.id}
                        onClick={() => {
                          setDateFilter(f.id);
                          setFilterOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-sm rounded-lg flex items-center justify-between transition-colors ${dateFilter === f.id ? 'bg-primary/10 text-primary font-bold' : 'hover:bg-muted font-medium'}`}
                      >
                        {f.label}
                        {dateFilter === f.id && <CheckCircle2 className="w-4 h-4" />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-emerald-500/10 border-2 border-emerald-500/20 p-6 md:p-8 rounded-[2rem] flex flex-col justify-between overflow-hidden relative">
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-emerald-500 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1">Total Completed</h3>
            <p className="text-5xl lg:text-7xl font-black text-emerald-700 dark:text-emerald-300 tracking-tighter">{completedTasks.length}</p>
          </div>
          <div className="mt-8 relative z-10 flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400">
            <span className="bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 px-2 py-1 rounded-md">+12%</span>
            <span className="opacity-80">from last month</span>
          </div>
        </div>
        <div className="bg-card border border-border p-6 md:p-8 rounded-[2rem] flex flex-col justify-between">
          <div>
             <h3 className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">Success Rate</h3>
             <p className="text-4xl lg:text-5xl font-black text-foreground tracking-tighter">{tasks.length ? Math.round((completedTasks.length / tasks.length) * 100) : 0}%</p>
          </div>
          <div className="mt-8 w-full bg-muted h-2 rounded-full overflow-hidden p-0.5">
            <div className="bg-foreground h-full rounded-full" style={{ width: `${tasks.length ? Math.round((completedTasks.length / tasks.length) * 100) : 0}%` }}></div>
          </div>
        </div>
        <div className="bg-card border border-border p-6 md:p-8 rounded-[2rem] flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">Active Categories</h3>
            <p className="text-4xl lg:text-5xl font-black text-foreground tracking-tighter">12</p>
          </div>
          <p className="mt-8 text-xs font-bold text-muted-foreground uppercase tracking-widest">Across 4 departments</p>
        </div>
      </div>

      {/* Task List */}
      <div>
        <div className="flex items-end justify-between mb-6">
          <div className="space-y-1">
             <h3 className="font-black text-2xl tracking-tight text-foreground">History Log</h3>
             <p className="text-sm font-medium text-muted-foreground tracking-wide">A record of your completed goals.</p>
          </div>
        </div>
        
        <div className="space-y-3">
          {completedTasks.length === 0 ? (
            <div className="p-12 text-center border border-dashed border-border rounded-3xl bg-muted/20">
              <p className="font-mono uppercase tracking-widest text-sm text-muted-foreground">No completed tasks yet</p>
            </div>
          ) : completedTasks.map((task, idx) => (
            <motion.div 
              key={task.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-card p-4 md:px-6 md:py-5 rounded-[1.5rem] border border-border hover:border-emerald-500/30 hover:shadow-sm hover:focus-within:border-emerald-500/30 transition-all"
            >
              <div className="col-span-12 md:col-span-6 flex items-center gap-4">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="text-base font-bold text-foreground line-through decoration-emerald-500/40 line-clamp-1">{task.title}</h4>
                   <p className="text-[10px] uppercase tracking-widest text-muted-foreground/70 font-bold mt-1 max-w-50 truncate">{task.duration ? `Duration: ${task.duration}` : `Priority: ${task.priority}`}</p>
                </div>
              </div>

              <div className="col-span-6 md:col-span-3 flex md:justify-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground md:bg-background md:border border-border/50 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 group-hover:border-emerald-500/30 transition-colors">
                  <Tag className="w-3.5 h-3.5" />
                  {task.category}
                </span>
              </div>
              
              <div className="col-span-6 md:col-span-2 flex items-center md:justify-center gap-2 text-xs font-bold text-muted-foreground bg-muted/30 md:bg-transparent p-2 md:p-0 rounded-lg md:rounded-none whitespace-nowrap">
                <Calendar className="w-3.5 h-3.5 opacity-70" />
                {task.dueDate instanceof Date ? task.dueDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : task.dueDate}
              </div>

              <div className="col-span-12 md:col-span-1 flex items-center gap-1 justify-end md:opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity mt-2 md:mt-0 pt-3 md:pt-0 border-t border-border/50 md:border-0">
                <button onClick={() => handleRestore(task.id)} className="p-2.5 hover:bg-emerald-500/20 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-xl transition-all cursor-pointer shadow-sm border border-transparent hover:border-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-emerald-500/20 focus:text-emerald-600" title="Restore Task">
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button onClick={() => handleDelete(task.id)} className="p-2.5 hover:bg-destructive/10 hover:text-destructive rounded-xl transition-all cursor-pointer shadow-sm border border-transparent hover:border-destructive/30 focus:outline-none focus:ring-2 focus:ring-destructive focus:bg-destructive/10 focus:text-destructive" title="Delete Permanent">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {completedTasks.length > 0 && (
          <div className="mt-8 flex justify-center">
            <button className="text-xs uppercase font-black tracking-widest text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 flex items-center gap-2 cursor-pointer transition-colors border border-emerald-500/20 bg-emerald-500/5 px-6 py-3 rounded-full hover:bg-emerald-500/10 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-background">
               Load more history
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
