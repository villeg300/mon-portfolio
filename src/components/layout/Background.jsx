import { motion } from "framer-motion";

const randomRange = (min, max) => Math.random() * (max - min) + min;

export default function Background() {
  const halos = Array.from({ length: 6 }); // 6 boules lumineuses

  return (
    <div className=" fixed inset-0 overflow-hidden bg-background">
      {/* flou global */}
      <div className="absolute inset-0 -z-50"></div>

      {halos.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: randomRange(200, 400),
            height: randomRange(200, 400),
            top: randomRange(0, window.innerHeight * 0.8),
            left: randomRange(0, window.innerWidth * 0.8),
            background: `radial-gradient(circle at center, rgba(${randomRange(100, 255)}, ${randomRange(50, 200)}, ${randomRange(200, 255)}, 0.7), transparent 100%)`,
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, randomRange(-50, 50)],
            y: [0, randomRange(-50, 50)],
            scale: [1, randomRange(1.1, 1.3)],
            opacity: [0.6, 1],
          }}
          transition={{
            duration: randomRange(6, 12),
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
