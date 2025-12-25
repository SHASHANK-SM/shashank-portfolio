
import React from 'react';
import { PROFILE } from '../data/constants';
import { Github, Linkedin, Mail,Globe ,MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
           <div className="text-2xl font-bold tracking-tighter mb-2">Created with <span className="font-serif italic font-normal text-neutral-400">care</span></div>
           <p className="text-sm text-neutral-400">© {new Date().getFullYear()} Shashank S M. All rights reserved.</p>
        </div>

        <div className="flex gap-6 sm:gap-8 md:gap-10 items-center justify-center">
        <a
          href={PROFILE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-neutral-600 hover:text-neutral-900 transition-transform duration-300 hover:scale-110"
          aria-label="LinkedIn"
        >
          <Linkedin size={28} strokeWidth={1.5} />
          <p className="text-sm mt-2 text-center">LinkedIn</p>
        </a>

        <a
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-neutral-600 hover:text-neutral-900 transition-transform duration-300 hover:scale-110"
          aria-label="GitHub"
        >
          <Github size={28} strokeWidth={1.5} />
          <p className="text-sm mt-2 text-center">GitHub</p>
        </a>

        <a
          href={`mailto:${PROFILE.email}`}
          className="flex flex-col items-center text-neutral-600 hover:text-neutral-900 transition-transform duration-300 hover:scale-110"
          aria-label="Email"
        >
          <Mail size={28} strokeWidth={1.5} />
          <p className="text-sm mt-2 text-center">Email Me</p>
        </a>
      </div>

              <div className="flex items-start gap-2 text-right">
              <MapPin size={14} className="mt-[3px] text-neutral-600" />

              <div className="flex flex-col leading-tight">
                <p className="text-sm font-bold text-neutral-900">
                  Bengaluru, India
                </p>

                <div className="flex items-center gap-1 text-xs text-neutral-500">
                  <Globe size={11} className="mt-[1px]" />
                  <span>Open to Relocate</span>
                </div>
              </div>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
