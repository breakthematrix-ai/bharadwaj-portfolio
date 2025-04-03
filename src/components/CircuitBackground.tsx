import React from 'react';
import { motion } from 'framer-motion';

export const CircuitBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {/* Horizontal Lines */}
      <motion.div
        className="absolute top-32 left-0 h-[2px] w-1/3 bg-gradient-to-r from-cyan-500/50 to-violet-500/50"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute top-64 right-0 h-[2px] w-1/3 bg-gradient-to-l from-cyan-500/50 to-violet-500/50"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-48 left-0 h-[2px] w-1/4 bg-gradient-to-r from-cyan-500/50 to-violet-500/50"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-32 right-0 h-[2px] w-1/4 bg-gradient-to-l from-cyan-500/50 to-violet-500/50"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Vertical Lines */}
      <motion.div
        className="absolute top-32 left-1/3 w-[2px] h-64 bg-gradient-to-b from-cyan-500/50 to-violet-500/50"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.25, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute top-64 right-1/3 w-[2px] h-64 bg-gradient-to-b from-violet-500/50 to-cyan-500/50"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.75, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-48 left-1/4 w-[2px] h-48 bg-gradient-to-t from-cyan-500/50 to-violet-500/50"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 1.25, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-32 right-1/4 w-[2px] h-48 bg-gradient-to-t from-violet-500/50 to-cyan-500/50"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 1.75, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Center Lines */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-[300px] -translate-y-1/2 h-[2px] w-32 bg-gradient-to-r from-cyan-500/50 to-violet-500/50"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 translate-x-[100px] -translate-y-1/2 h-[2px] w-32 bg-gradient-to-l from-cyan-500/50 to-violet-500/50"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
};