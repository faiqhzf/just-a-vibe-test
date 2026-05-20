import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { GlassCard } from './GlassCard';
import { Sun, Moon, CloudSun } from 'lucide-react';

export function GreetingWidget() {
  const [greeting, setGreeting] = useState('');
  const [icon, setIcon] = useState<React.ReactNode>(null);

  useEffect(() => {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12) {
      setGreeting('Selamat Pagi');
      setIcon(<Sun className="w-8 h-8 text-yellow-300" />);
    } else if (hour >= 12 && hour < 15) {
      setGreeting('Selamat Siang');
      setIcon(<Sun className="w-8 h-8 text-yellow-400" />);
    } else if (hour >= 15 && hour < 18) {
      setGreeting('Selamat Sore');
      setIcon(<CloudSun className="w-8 h-8 text-orange-400" />);
    } else {
      setGreeting('Selamat Malam');
      setIcon(<Moon className="w-8 h-8 text-blue-200" />);
    }
  }, []);

  return (
    <GlassCard intensity="medium" className="flex items-center gap-6 p-6">
      <motion.div 
        initial={{ rotate: -20, scale: 0.8 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="p-4 bg-white/5 border border-white/10 rounded-2xl shadow-inner flex items-center justify-center"
      >
        {icon}
      </motion.div>
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-white/90">{greeting},</h2>
        <p className="text-white/50 font-medium text-sm mt-1">Sistem beroperasi optimal hari ini.</p>
      </div>
    </GlassCard>
  );
}
