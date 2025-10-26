// src/components/sections/Hero.jsx
import { motion } from "framer-motion";
import AnimatedButton from "../ui/AnimatedButton";
import { useState, useEffect } from "react";

const Hero = () => {
  const [connectionPoints, setConnectionPoints] = useState([]);

  // Connection line points
  useEffect(() => {
    const points = [];
    for (let i = 0; i < 15; i++) {
      points.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
      });
    }
    setConnectionPoints(points);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-darker">
      {/* Animated Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        {connectionPoints.map((point, index) => {
          const nextPoint =
            connectionPoints[(index + 1) % connectionPoints.length];
          if (!nextPoint) return null;

          return (
            <motion.line
              key={`line-${index}`}
              x1={`${point.x}%`}
              y1={`${point.y}%`}
              x2={`${nextPoint.x}%`}
              y2={`${nextPoint.y}%`}
              stroke="rgba(0, 255, 136, 0.6)"
              strokeWidth="1"
              animate={{
                strokeDasharray: ["30, 600", "300, 30", "30, 300"],
              }}
              transition={{
                duration: 6 + index * 1,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        })}
      </svg>

      {/* Content */}
      <motion.div
        className="text-center container relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 font-orbitron"
          variants={itemVariants}
        >
          <span className="text-gradient">PLAY. COMPETE. CONQUER.</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-light/80 mb-12 max-w-3xl mx-auto leading-relaxed font-montserrat"
          variants={itemVariants}
        >
          Enter the ultimate gaming arena where legends are forged. Compete in
          high-stakes tournaments and rise to the top.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          variants={itemVariants}
        >
          <AnimatedButton variant="primary">Join Tournament</AnimatedButton>
          <AnimatedButton variant="secondary">Learn More</AnimatedButton>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto bg-glass rounded-2xl p-8 font-montserrat"
          variants={itemVariants}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-orbitron">
              50K+
            </div>
            <div className="text-light/60 text-sm uppercase tracking-wider">
              Active Gamers
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2 font-orbitron">
              500+
            </div>
            <div className="text-light/60 text-sm uppercase tracking-wider">
              Tournaments
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2 font-orbitron">
              $1M+
            </div>
            <div className="text-light/60 text-sm uppercase tracking-wider">
              Prize Pool
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
