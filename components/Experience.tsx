
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../data/constants';

const Experience: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight">Academic & Professional Journey</h2>
          <p className="text-neutral-500 leading-relaxed">
            Focused on building a solid theoretical foundation and bridging it with practical, industry-standard implementation.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative pl-12 pb-8 border-l border-neutral-200 last:pb-0"
          >
            <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-neutral-900 rounded-full" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
              <h3 className="text-xl font-bold text-neutral-900">{exp.title}</h3>
              <span className="text-sm font-medium text-neutral-400 bg-neutral-100 px-3 py-1 rounded-full whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            <div className="text-neutral-500 font-medium mb-4">{exp.organization} — <span className="text-neutral-400 font-normal">{exp.type}</span></div>
            <p className="text-neutral-600 max-w-2xl leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
