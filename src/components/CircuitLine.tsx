import React from 'react';
import { motion } from 'framer-motion';

interface CircuitLineProps {
  className?: string;
}

export const CircuitLine: React.FC<CircuitLineProps> = ({ className = '' }) => (
  <motion.div
    className={`absolute h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 ${className}`}
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
);