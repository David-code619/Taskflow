'use Client'
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { format, addMonths, subMonths } from 'date-fns';

export default function MonthNavigator() {
  const [date, setDate] = useState(new Date()); 

  const nextMonth = () => setDate(prev => addMonths(prev, 1));
  const prevMonth = () => setDate(prev => subMonths(prev, 1));

  return (
    <div className="flex items-center justify-between w-64 px-2 py-1 bg-[#121212] border border-zinc-800 rounded-lg">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-zinc-800"
        onClick={prevMonth}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {/* Displays the current month and year dynamically */}
      <span className="text-sm font-medium text-zinc-100 min-w-25 text-center">
        {format(date, 'MMMM yyyy')}
      </span>

      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-zinc-800"
        onClick={nextMonth}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}