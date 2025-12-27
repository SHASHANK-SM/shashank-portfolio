
import React from 'react';
import { motion } from 'framer-motion';
import { VALUE_INSIGHTS } from '../data/constants';

const ValueSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest uppercase text-neutral-400 border border-neutral-100 rounded-full">
            Learning Playground
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">The AI Playbook</h2>
        </div>
        <p className="text-lg text-neutral-500 italic font-serif max-w-sm md:text-right">
          "Principles that guide my creative process and engineering relationships."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {VALUE_INSIGHTS.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className="group p-10 bg-white border border-neutral-100 rounded-3xl  transition-shadow duration-300 flex flex-col justify-between h-full cursor-default select-text"

          >
            <div>
              <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center mb-8 text-neutral-300 group-hover:text-neutral-900 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                  <line x1="16" y1="8" x2="2" y2="22"></line>
                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">{item.title}</h3>
              <p className="text-neutral-500 leading-relaxed text-sm mb-10">
                {item.content}
              </p>
            </div>
            
            <div className="pt-6 border-t border-neutral-50">
               <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2 block">Next Up</span>
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 text-white rounded-full text-[10px] font-medium">
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                  {item.learning}
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ValueSection;
