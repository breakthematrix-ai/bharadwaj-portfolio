import React from 'react';
import { motion } from 'framer-motion';
import { CircuitBoard, Brain, Notebook as Robot, Waves } from 'lucide-react';
import { CircuitLine } from './CircuitLine';
import { FloatingIcon } from './FloatingIcon';

export const VideoBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden opacity-70">
      {/* Space Background */}
      <div 
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1539721972319-f0e80a00d424?auto=format&fit=crop&q=80&w=2000')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Overlay with stars */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
              animate={{
                opacity: [0.2, 0.7, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Floating planets */}
      <div className="absolute inset-0">
        <motion.img
          src="https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80&w=300"
          className="absolute w-32 h-24 rounded-full opacity-40"
          style={{
            top: '15%',
            right: '10%',
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }
          }}
        />

        <motion.img
          src="https://images.unsplash.com/photo-1614314107768-6018061b5b72?auto=format&fit=crop&q=80&w=300"
          className="absolute w-48 h-30 rounded-full opacity-30"
          style={{
            bottom: '20%',
            left: '5%',
          }}
          animate={{
            y: [0, 20, 0],
            rotate: [360, 0],
          }}
          transition={{
            y: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }
          }}
        />
      </div>

      {/* Nebula overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=2000')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'screen',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated Circuit Lines */}
      <CircuitLine className="top-20 left-0 w-1/4" />
      <CircuitLine className="bottom-40 right-0 w-1/3" />
      <CircuitLine className="top-1/3 right-0 w-1/4" />
      
      {/* Floating Tech Icons */}
      {/* <FloatingIcon icon={<CircuitBoard size={32} />} delay={0} x={100} y={100} />
      <FloatingIcon icon={<Brain size={32} />} delay={1} x={window.innerWidth - 150} y={150} />
      <FloatingIcon icon={<Robot size={32} />} delay={2} x={200} y={window.innerHeight - 150} />
      <FloatingIcon icon={<Waves size={32} />} delay={3} x={window.innerWidth - 200} y={window.innerHeight - 200} /> */}
    </div>
  );
};