
import React from 'react';
import { PROFILE } from '../data/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
           <div className="text-2xl font-bold tracking-tighter mb-2">Created with <span className="font-serif italic font-normal text-neutral-400">care</span></div>
           <p className="text-sm text-neutral-400">© {new Date().getFullYear()} Shashank S M. All rights reserved.</p>
        </div>

        <div className="flex gap-8">
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors">LinkedIn</a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors">GitHub</a>
          <a href={`mailto:${PROFILE.email}`} className="text-sm font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors">Email</a>
        </div>

        <div className="text-right">
           <p className="text-sm font-bold text-neutral-900">Bengaluru, India</p>
           <p className="text-xs text-neutral-400">Open to Relocate</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
