import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROFILE } from "../data/constants";

const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 px-6 overflow-hidden">
      
      {/* Soft Background Glow */}
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

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl font-semibold text-neutral-900 mb-6 tracking-wide"
        >
          Shashank S Madabal
        </motion.div>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 text-[10px] font-bold tracking-[0.3em] uppercase 
          text-neutral-900 bg-neutral-100 border border-neutral-300 rounded-full shadow-sm"
        >
          <span className="w-1.5 h-1.5 bg-green-700 rounded-full animate-pulse"></span>
          Available — Bengaluru, India — Open to Relocate
        </motion.div>

        {/* Role */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-semibold text-neutral-900 
                     mb-8 tracking-tight leading-[1.08] max-w-3xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {PROFILE.role}

          <span className="block mt-4 font-serif italic font-normal text-neutral-400 text-2xl md:text-3xl">
            Applied Intelligence
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-lg text-neutral-500 mb-14 leading-relaxed max-w-2xl mx-auto"
        >
          Designing and deploying end-to-end machine learning systems powered by deep learning and scalable backend architectures.
          <span className="text-neutral-900 font-medium">
            {" "}Focused on engineering reliable, high-performance AI solutions for real-world applications.
          </span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#work"
            className="w-full sm:w-auto px-8 py-4 bg-neutral-900 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-neutral-800 transition-all transform hover:scale-[1.03] shadow-lg"
          >
            Explore Work
          </a>

          <a
            href="./resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-900 border border-neutral-200 font-bold text-xs uppercase tracking-widest rounded-full hover:bg-neutral-50 transition-all shadow-sm flex items-center justify-center gap-2"
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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-14 bg-neutral-200 relative overflow-hidden">
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
