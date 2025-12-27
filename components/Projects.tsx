
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/constants';

const Projects: React.FC = () => {
  const secondaryProjects = PROJECTS.filter(p => !p.isFeatured);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {secondaryProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group p-8 bg-white border border-neutral-100 rounded-3xl  hover:border-neutral-200 transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-neutral-50 text-neutral-500 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">{project.title}</h3>
            <p className="text-neutral-500 mb-6 flex-grow">{project.subtitle}</p>
            
            <div className="space-y-4 mb-8">
               <div className="text-sm">
                  <span className="font-bold text-neutral-900">Outcome: </span>
                  <span className="text-neutral-600">{project.outcome}</span>
               </div>
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-neutral-50">
               <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-bold text-neutral-900 hover:text-neutral-500 transition-colors"
               >
                 GitHub Link
               </a>
               <button className="text-xs font-bold text-neutral-400 uppercase tracking-widest cursor-default">
                  Story view
               </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
