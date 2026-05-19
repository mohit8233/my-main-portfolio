import { motion } from "framer-motion";

export default function PremiumLoader() {
  return (
    <div className="h-screen w-full bg-black overflow-hidden relative flex items-center justify-center">

      {/* Background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Moving Gradient */}
      <motion.div
        animate={{
          x: ["-20%", "20%", "-20%"],
          y: ["-10%", "10%", "-10%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        className="absolute w-[900px] h-[900px] rounded-full bg-cyan-500/20 blur-3xl"
      />

      {/* Grid */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Main */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Top Small Text */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-zinc-500 tracking-[10px] text-sm mb-8"
        >
          FULL STACK DEVELOPER
        </motion.p>

        {/* Big Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="text-[120px] md:text-[180px] font-black text-white leading-none tracking-tight"
        >
          MOHIT
        </motion.h1>

        {/* Animated Stroke */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "300px" }}
          transition={{
            delay: 0.8,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="h-[4px] bg-cyan-400 rounded-full mt-6 shadow-[0_0_25px_#22d3ee]"
        />

        {/* Loading Text */}
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="mt-10 text-zinc-400 tracking-[6px] text-sm"
        >
          INITIALIZING PORTFOLIO...
        </motion.div>
      </div>

      {/* Bottom Marquee */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
        className="absolute bottom-10 whitespace-nowrap text-[80px] font-black text-white/5"
      >
        WEB DEVELOPER • REACT • NODE • MONGODB • JAVASCRIPT •
        WEB DEVELOPER • REACT • NODE • MONGODB • JAVASCRIPT •
      </motion.div>
    </div>
  );
}