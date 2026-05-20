import { motion, HTMLMotionProps } from 'motion/react';
import React from 'react';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
}

export function GlassCard({ children, className = '', intensity = 'medium', ...props }: GlassCardProps) {
  const intensityStyles = {
    light: 'bg-white/5 backdrop-blur-md border border-white/5 shadow-md',
    medium: 'bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl',
    heavy: 'bg-cyan-500/20 backdrop-blur-2xl border border-cyan-400/30 shadow-2xl',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-3xl p-6 ${intensityStyles[intensity]} transition-shadow hover:shadow-[0_16px_40px_0_rgba(255,255,255,0.05)] ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
