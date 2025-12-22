
import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../data/constants';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Let's build <span className="font-serif italic font-normal text-neutral-400">the future</span> of AI together.</h2>
          <p className="text-neutral-400 text-lg mb-12 leading-relaxed">
            Always open to discussing new opportunities, full-time roles, or research collaborations in the AI/ML space.
          </p>

          <div className="space-y-6">
            <a 
              href={`mailto:${PROFILE.email}`}
              className="group flex items-center gap-4 text-2xl font-bold hover:text-neutral-400 transition-all"
            >
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              {PROFILE.email}
            </a>
            <a 
              href={`tel:${PROFILE.phone}`}
              className="group flex items-center gap-4 text-2xl font-bold hover:text-neutral-400 transition-all"
            >
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              {PROFILE.phone}
            </a>
          </div>
        </div>

        <div className="bg-neutral-800/50 p-12 rounded-3xl border border-neutral-700">
           <form className="space-y-6">
              <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Full Name</label>
                 <input type="text" className="w-full bg-transparent border-b border-neutral-700 py-3 focus:border-white transition-colors outline-none" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Email Address</label>
                 <input type="email" className="w-full bg-transparent border-b border-neutral-700 py-3 focus:border-white transition-colors outline-none" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Message</label>
                 <textarea rows={4} className="w-full bg-transparent border-b border-neutral-700 py-3 focus:border-white transition-colors outline-none resize-none" placeholder="Let's talk about the AI role..."></textarea>
              </div>
              <button className="w-full py-5 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors uppercase tracking-widest text-xs mt-8">
                 Send Inquiry
              </button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
