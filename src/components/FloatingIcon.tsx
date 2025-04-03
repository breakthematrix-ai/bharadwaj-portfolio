import React from 'react';
import { motion } from 'framer-motion';

interface FloatingIconProps {
  icon: React.ReactNode;
  delay: number;
  x: number;
  y: number;
}

export const FloatingIcon: React.FC<FloatingIconProps> = ({ icon, delay, x, y }) => {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.5, scale: 1 }}
      transition={{ duration: 1, delay }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay,
        }}
        className="text-cyan-400 hover:text-violet-400 transition-colors"
      >
        {icon}
      </motion.div>
    </motion.div>
  );
};