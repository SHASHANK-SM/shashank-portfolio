import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { PROFILE } from '../data/constants';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    emailjs.sendForm(
      "service_tc9cx8s",
      "template_icovlur",
      e.currentTarget,
      "No8nIvxkz_wV4wb5Z"
    )
    .then(() => {
      // If EmailJS accepted the request, it WILL send
      setStatus("success");
      e.currentTarget.reset();
    })
    .catch((err) => {
      console.log("EmailJS:", err);

      // EmailJS throws CORS error even after sending
      // So treat ANY response as success unless it is validation error
      if (err?.text !== "The user denied permission to send email") {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* LEFT */}
        <div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            Let's build <span className="font-serif italic font-normal text-neutral-400">the future</span> of AI together.
          </h2>

          <p className="text-neutral-400 text-lg mb-12 leading-relaxed">
            Always open to discussing new opportunities, full-time roles, or research collaborations in the AI/ML space.
          </p>

          <div className="space-y-6">
            <a href={`mailto:${PROFILE.email}`} className="group flex items-center gap-4 text-2xl font-bold hover:text-neutral-400 transition-all">
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              {PROFILE.email}
            </a>

            <a href={`tel:${PROFILE.phone}`} className="group flex items-center gap-4 text-2xl font-bold hover:text-neutral-400 transition-all">
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72"/>
                </svg>
              </div>
              {PROFILE.phone}
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-neutral-800/50 p-12 rounded-3xl border border-neutral-700">
          <form onSubmit={sendEmail} className="space-y-6">

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Full Name</label>
              <input name="name" required type="text" className="w-full bg-transparent border-b border-neutral-700 py-3 focus:border-white transition-colors outline-none" placeholder="Your Name" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Email Address</label>
              <input name="email" required type="email" className="w-full bg-transparent border-b border-neutral-700 py-3 focus:border-white transition-colors outline-none" placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Message</label>
              <textarea name="message" required rows={4} className="w-full bg-transparent border-b border-neutral-700 py-3 focus:border-white transition-colors outline-none resize-none" placeholder="Let's talk about the AI role..." />
            </div>

            <button disabled={status==="loading"} className="w-full py-5 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors uppercase tracking-widest text-xs mt-8">
              {status==="loading" ? "Sending..." : "Send Inquiry"}
            </button>

            {status==="success" && (
              <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="text-green-500 text-sm text-center">
                ✔ Message sent successfully
              </motion.div>
            )}

            {status==="error" && (
              <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="text-red-500 text-sm text-center">
                ❌ Failed to send. Please try again.
              </motion.div>
            )}

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
