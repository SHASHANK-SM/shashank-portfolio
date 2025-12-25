import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROFILE } from "../data/constants";

const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
        <section className="relative h-screen max-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-neutral-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10"
        animate={{
          scale: [1, 1.2, 1],
           x: [-20, 20, -20],
          y: [-20, 20, -20],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base font-light text-neutral-500 mb-6 tracking-wide"
        >
          Shashank S M
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400 bg-white border border-neutral-100 rounded-full shadow-sm"
        >
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          Available — Bengaluru, India — Open to Relocation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold text-neutral-900 mb-10 tracking-tighter leading-[0.9]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {PROFILE.role} — <br />
          <span className="font-serif italic font-normal text-neutral-400 inline-block relative">
            Applied Intelligence
            {isHovered && (
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -top-6 -right-12 text-xs font-bold text-neutral-900 bg-white px-3 py-1 rounded-lg border border-neutral-200 shadow-xl"
              >
                ✨
              </motion.span>
            )}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-neutral-500 mb-12 leading-relaxed max-w-2xl mx-auto font-medium"
        >
          Building reliable machine-learning systems with deep learning, NLP,
          and production-ready experimentation —{" "}
          <span className="text-neutral-900">
            focused on real-world impact, not demos.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#work"
            className="w-full sm:w-auto px-10 py-5 bg-neutral-900 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-neutral-800 transition-all transform hover:scale-[1.05] shadow-2xl"
          >
            Explore Work
          </a>
          <a
            href="./resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-white text-neutral-900 border border-neutral-100 font-bold text-xs uppercase tracking-widest rounded-full hover:bg-neutral-50 transition-all shadow-sm flex items-center justify-center gap-2"
          >
            Resume
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17L17 7"></path>
            </svg>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-neutral-200 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-neutral-900"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
