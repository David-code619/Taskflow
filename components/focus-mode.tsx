'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Pause, RotateCcw, Coffee, Briefcase, ChevronDown } from 'lucide-react';


export default function FocusMode() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<'work' | 'break'>('work');

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      // Automatically switch modes when time is up
      if (mode === 'work') {
         setMode('break');
         setTimeLeft(5 * 60);
      } else {
         setMode('work');
         setTimeLeft(25 * 60);
      }
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, mode]);

  const toggleTimer = () => setIsActive(!isActive);
  
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(mode === 'work' ? 25 * 60 : 5 * 60);
  };

  const switchMode = (newMode: 'work' | 'break') => {
    setMode(newMode);
    setIsActive(false);
    setTimeLeft(newMode === 'work' ? 25 * 60 : 5 * 60);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = mode === 'work' 
    ? ((25 * 60 - timeLeft) / (25 * 60)) * 100
    : ((5 * 60 - timeLeft) / (5 * 60)) * 100;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className={`absolute inset-0 transition-colors duration-1000 ${mode === 'work' ? 'bg-primary/5' : 'bg-emerald-500/5'}`} />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full blur-[120px] opacity-20 pointer-events-none transition-colors duration-1000 ${mode === 'work' ? 'bg-primary' : 'bg-emerald-500'}`} />

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full animate-pulse blur-[1px] ${mode === 'work' ? 'bg-primary' : 'bg-emerald-500'}`} />
          <span className="font-mono text-sm font-bold uppercase tracking-widest text-muted-foreground">Focus Engine Active</span>
        </div>
        <button 
        //   onClick={onExit}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl px-6">
        
        {/* State Toggle */}
        <div className="flex items-center p-1.5 bg-muted/50 rounded-full border border-border backdrop-blur-md mb-16">
          <button 
            onClick={() => switchMode('work')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${mode === 'work' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <Briefcase className="w-4 h-4" />
            Deep Work
          </button>
          <button 
            onClick={() => switchMode('break')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${mode === 'break' ? 'bg-background text-emerald-500 shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <Coffee className="w-4 h-4" />
            Recovery
          </button>
        </div>

        {/* Timer Display */}
        <div className="relative flex items-center justify-center mb-16">
          {/* Progress Ring */}
          <svg className="absolute w-100 h-100 -rotate-90 pointer-events-none">
            <circle 
              cx="200" cy="200" r="190" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="4" 
              className="text-muted/30" 
            />
            <motion.circle 
              cx="200" cy="200" r="190" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="4"
              strokeDasharray={2 * Math.PI * 190}
              animate={{ strokeDashoffset: (2 * Math.PI * 190) * (1 - progress / 100) }}
              transition={{ duration: 1, ease: 'linear' }}
              strokeLinecap="round"
              className={`transition-colors duration-1000 ${mode === 'work' ? 'text-primary' : 'text-emerald-500'}`} 
            />
          </svg>

          {/* Time Text */}
          <div className="text-center">
            <h1 className="text-[8rem] font-black tracking-tighter leading-none tabular-nums italic">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </h1>
            <p className="text-muted-foreground font-medium uppercase tracking-[0.3em] mt-4 text-sm">
              {mode === 'work' ? 'Focus until break' : 'Unwind and recharge'}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-6">
          <button 
            onClick={resetTimer}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all active:scale-95"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
          
          <button 
            onClick={toggleTimer}
            className={`w-24 h-24 flex items-center justify-center rounded-full shadow-2xl transition-all active:scale-95 text-white ${mode === 'work' ? 'bg-primary shadow-primary/20 hover:bg-primary/90' : 'bg-emerald-500 shadow-emerald-500/20 hover:bg-emerald-600'}`}
          >
            {isActive ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current translate-x-1" />}
          </button>

          <button className="w-14 h-14 flex items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-all active:scale-95">
             <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* Current Task (Optional) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-card border border-border rounded-2xl px-6 py-4 flex items-center gap-4 cursor-pointer hover:bg-muted/50 transition-colors"
        >
          <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground text-center sm:text-left">Current Objective</p>
            <p className="text-sm font-bold text-foreground">Finalize Q3 Roadmaps</p>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
