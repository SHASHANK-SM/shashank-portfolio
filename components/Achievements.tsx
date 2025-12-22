
import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../data/constants';

const Achievements: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center gap-3 mb-12">
        <div className="h-[1px] w-12 bg-neutral-200"></div>
        <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Highlights & Extras</span>
      </div>

      <div className="relative group">
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-12 snap-x snap-mandatory">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex-shrink-0 w-[300px] md:w-[380px] p-10 bg-white border border-neutral-100 rounded-[2.5rem] flex flex-col justify-between snap-center hover:border-neutral-200 transition-colors"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center text-neutral-900">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 15l-2 5l9-9l-15-4l3 10l5 2l4-7l-1-1l-3 2l-2-2l1-1l2 2l1-1l-2-2"></path>
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold text-neutral-300 uppercase tracking-widest">
                    #{idx + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2 leading-tight">{item.title}</h3>
                <p className="text-xs font-semibold text-neutral-400 mb-6 uppercase tracking-wider">{item.event}</p>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed border-t border-neutral-50 pt-6">
                {item.description}
              </p>
            </motion.div>
          ))}
          {/* Subtle padding card to fix the end of scroll alignment */}
          <div className="flex-shrink-0 w-12"></div>
        </div>
        
        {/* Mobile Scroll Hint */}
        <div className="md:hidden flex justify-center mt-4">
           <div className="flex gap-1.5">
              {ACHIEVEMENTS.map((_, i) => (
                 <div key={i} className="w-1 h-1 bg-neutral-200 rounded-full"></div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
