
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../data/constants';

const FeaturedProject: React.FC = () => {
  const featured = PROJECTS.find(p => p.isFeatured);
  const [isOpen, setIsOpen] = useState(false);

  if (!featured) return null;

  return (
    <div className="max-w-7xl mx-auto px-6 mb-24">
      <div className="flex items-center gap-2 mb-8">
        <div className="h-[1px] w-8 bg-neutral-900"></div>
        <span className="text-xs font-bold uppercase tracking-widest">Featured Case Study</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          className="lg:col-span-7 aspect-[4/3] bg-neutral-100 rounded-3xl overflow-hidden relative group cursor-pointer"
          whileHover={{ scale: 0.99 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img 
            src=".\Wildlife_photo.jpg" 
            alt={featured.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
             <div className="flex gap-2 mb-3">
                {featured.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium">{tag}</span>
                ))}
             </div>
             <h3 className="text-3xl font-bold tracking-tight">{featured.title}</h3>
          </div>
        </motion.div>

        <div className="lg:col-span-5">
          <h2 className="text-4xl font-bold text-neutral-900 mb-6 tracking-tight">{featured.title}</h2>
          <p className="text-xl text-neutral-600 mb-8 font-serif italic">"{featured.subtitle}"</p>
          
          <div className="space-y-6 mb-8">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-2">The Challenge</h4>
              <p className="text-neutral-600 leading-relaxed">{featured.problem}</p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-2">Outcome</h4>
              <p className="text-neutral-900 font-semibold">{featured.outcome}</p>
            </div>
          </div>

          <button 
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-3 px-6 py-3 
          bg-neutral-800 text-neutral-100 
          rounded-full text-sm font-semibold 
          hover:bg-neutral-900 transition-all group shadow-sm"
        >
            {isOpen ? 'Close Case Study' : 'Explore The Process'}
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-neutral-50 rounded-3xl mt-12"
          >
            <div className="p-12 grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Why It Matters</h5>
                <p className="text-neutral-600 leading-relaxed text-sm">{featured.whyItMatters}</p>
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">The Approach</h5>
                <p className="text-neutral-600 leading-relaxed text-sm">{featured.approach}</p>
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Key Learnings</h5>
                <p className="text-neutral-600 leading-relaxed text-sm">{featured.learnings}</p>
              </div>
            </div>
            <div className="px-12 pb-12">
               <a 
                 href={featured.github} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-black transition-colors"
               >
                 View Code Repository
               </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeaturedProject;
