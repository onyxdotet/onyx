import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Play,
  TrendingUp,
  Users,
  Globe,
  Activity,
  ShieldCheck,
} from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Counter Animation
  const [revenue, setRevenue] = useState(0);
  useEffect(() => {
    const controls = animate(0, 124500, {
      duration: 2,
      onUpdate: (value) => setRevenue(Math.floor(value)),
      ease: "circOut",
    });
    return controls.stop;
  }, []);

  return (
    <section
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-navy-950 selection:bg-neon selection:text-black"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Giant Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none select-none overflow-hidden flex justify-center z-0">
        <span className="text-[20vw] font-bold leading-none tracking-tighter whitespace-nowrap text-white opacity-[0.02]">
          FUTURE
        </span>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-175 h-175 bg-neon/5 rounded-full blur-[120px] animate-pulse-slow" />
        <div
          className="absolute bottom-[10%] right-[5%] w-125 h-125 bg-cyan-400/10 rounded-full blur-[100px] animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-6 flex items-center justify-center relative z-10">
        {/* Text Content - Centered */}
        <motion.div
          className="flex flex-col gap-8 items-center text-center max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.1] tracking-tight text-white">
            Building <br />
            <span className="font-cursive text-neon text-6xl sm:text-7xl lg:text-8xl xl:text-9xl relative inline-block transform -rotate-2 text-glow">
              Futures
            </span>{" "}
            <br />
            in Tech
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 max-w-3xl leading-relaxed">
            We engineer digital experiences that defy expectations. Onyx bridges
            the gap between complex backend architecture and stunning frontend
            design.
          </p>

          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-neon text-navy-950 font-bold rounded-full hover:bg-white transition-all duration-300 hover:scale-105 flex items-center gap-2 box-glow"
            >
              Get Started <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">
          Scroll to Explore
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-neon to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
