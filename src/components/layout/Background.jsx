import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const randomRange = (min, max) => Math.random() * (max - min) + min;

const PALETTE = [
  "rgba(99,102,241,", // indigo/purple
  "rgba(79,70,229,", // indigo-600
  "rgba(14,165,233,", // cyan
  "rgba(99,102,241,", // repeat for variety
  "rgba(139,92,246,",
  "rgba(99,102,241,",
];

export default function Background() {
  const prefersReduced = useReducedMotion();
  const [halos, setHalos] = useState([]);

  useEffect(() => {
    // generate halos once on mount using current viewport size
    const vw = typeof window !== "undefined" ? window.innerWidth : 1200;
    const vh = typeof window !== "undefined" ? window.innerHeight : 800;
    const count = 6;
    const list = Array.from({ length: count }).map((_, i) => {
      const size = Math.floor(randomRange(vw * 0.12, vw * 0.28));
      const left = Math.floor(randomRange(-vw * 0.05, vw * 0.85));
      const top = Math.floor(randomRange(-vh * 0.05, vh * 0.75));
      const color = PALETTE[i % PALETTE.length] + (randomRange(0.45, 0.85) + ")");
      const duration = randomRange(8, 18);
      const delay = randomRange(0, 6);
      const xRange = randomRange(-40, 40);
      const yRange = randomRange(-30, 30);
      const blur = Math.floor(randomRange(30, 70));
      const rotate = randomRange(-15, 15);
      return { size, left, top, color, duration, delay, xRange, yRange, blur, rotate };
    });
    setHalos(list);
  }, []);

  const rendered = useMemo(() => halos.map((h, i) => {
    if (!h) return null;
    const baseStyle = {
      width: h.size,
      height: h.size,
      top: h.top,
      left: h.left,
      background: `radial-gradient(circle at 30% 30%, ${h.color} 0%, transparent 60%)`,
      filter: `blur(${h.blur}px)`,
      willChange: "transform, opacity",
      transformOrigin: "center",
    };

    if (prefersReduced) {
      return (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={baseStyle}
        />
      );
    }

    return (
      <motion.div
        key={i}
        className="absolute rounded-full pointer-events-none"
        style={baseStyle}
        animate={{
          x: [0, h.xRange, 0],
          y: [0, h.yRange, 0],
          scale: [1, 1.08, 1],
          rotate: [0, h.rotate, 0],
          opacity: [0.5, 1, 0.6],
        }}
        transition={{
          duration: h.duration,
          delay: h.delay,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
    );
  }), [halos, prefersReduced]);

  return (
    <div className="fixed inset-0 overflow-hidden bg-background -z-50 pointer-events-none">
      {/* subtle overlay to add depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10 opacity-60 -z-40" />
      {/* noise or grain could be added here as background-image */}
      {rendered}
    </div>
  );
}
