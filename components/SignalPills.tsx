
import React from 'react';
import { motion } from 'framer-motion';
import { SIGNAL_PILLS } from '../data/constants';

const SignalPills: React.FC = () => {
  return (
    <div className="w-full py-12 bg-white overflow-hidden border-y border-neutral-100 flex items-center">
      <motion.div 
        className="flex whitespace-nowrap gap-8"
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {[...SIGNAL_PILLS, ...SIGNAL_PILLS, ...SIGNAL_PILLS].map((pill, idx) => (
          <div
            key={idx}
            className="px-8 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl text-xs font-bold uppercase tracking-widest text-neutral-400 flex items-center gap-3 shadow-sm hover:border-neutral-900 hover:text-neutral-900 transition-all cursor-default"
          >
            <div className="w-1 h-1 bg-neutral-900 rounded-full"></div>
            {pill}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SignalPills;
