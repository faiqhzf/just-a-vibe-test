import { ClockWidget } from './components/ClockWidget';
import { InspirationWidget } from './components/InspirationWidget';
import { GreetingWidget } from './components/GreetingWidget';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div 
      className="min-h-screen relative overflow-hidden font-sans text-white selection:bg-white/30 flex flex-col"
      style={{
        background: 'radial-gradient(at 0% 0%, #1e3a8a 0%, transparent 50%), radial-gradient(at 50% 0%, #7e22ce 0%, transparent 50%), radial-gradient(at 100% 0%, #ea580c 0%, transparent 50%), radial-gradient(at 0% 100%, #1e1b4b 0%, transparent 50%), radial-gradient(at 100% 100%, #7c2d12 0%, transparent 50%)',
        backgroundColor: '#0f172a'
      }}
    >
      <main className="relative z-10 flex-1 flex items-center justify-center p-6 md:p-12 lg:p-24">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-8 flex flex-col gap-6 text-white h-full"
          >
            <GreetingWidget />
            <ClockWidget />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-4 h-full"
          >
            <InspirationWidget />
          </motion.div>

        </div>
      </main>
    </div>
  );
}
