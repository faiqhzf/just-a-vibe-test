import { useEffect, useState } from 'react';
import { GlassCard } from './GlassCard';

export function ClockWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <GlassCard intensity="heavy" className="flex-1 flex flex-col items-center justify-center p-12 relative overflow-hidden group">
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-48 h-48 bg-cyan-400/20 blur-3xl rounded-full pointer-events-none group-hover:bg-cyan-400/30 transition-colors duration-700"></div>
      
      <div className="text-7xl md:text-9xl font-bold tracking-tighter text-cyan-100 drop-shadow-md font-mono">
        {formatTime(time)}
      </div>
      <div className="mt-6 text-xl md:text-lg font-medium text-cyan-200/60 uppercase font-bold tracking-widest">
        {formatDate(time)}
      </div>
    </GlassCard>
  );
}
