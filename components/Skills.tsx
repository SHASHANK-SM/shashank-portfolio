
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../data/constants';

const Skills: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight">Technical Stack</h2>
          <p className="text-neutral-500 leading-relaxed">
            A curated set of tools and frameworks I use to bring intelligent systems to life. 
            Focused on performance, scalability, and research-backed implementation.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {SKILLS.map((skillGroup, idx) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6 border-b border-neutral-100 pb-2">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-neutral-50 text-neutral-700 text-sm font-medium rounded-lg border border-neutral-100 hover:border-neutral-300 hover:bg-white transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
