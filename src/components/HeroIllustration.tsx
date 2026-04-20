import { motion } from "framer-motion";

export function HeroIllustration() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Central orb */}
      <motion.div className="absolute flex size-48 items-center justify-center" variants={itemVariants}>
        <motion.div
          className="size-full rounded-full bg-gradient-to-br from-primary/40 to-accent/20 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Floating circle 1 */}
      <motion.div
        className="absolute right-24 top-12 flex size-32 items-center justify-center"
        variants={itemVariants}
      >
        <motion.div
          className="size-full rounded-full border border-primary/30 bg-primary/5"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Floating circle 2 */}
      <motion.div
        className="absolute bottom-20 left-16 flex size-40 items-center justify-center"
        variants={itemVariants}
      >
        <motion.div
          className="size-full rounded-full border border-accent/30 bg-accent/5"
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Connecting lines */}
      <motion.svg
        className="absolute w-full h-full"
        viewBox="0 0 500 500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.line
          x1="100"
          y1="150"
          x2="400"
          y2="350"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary/20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
        <motion.line
          x1="400"
          y1="150"
          x2="100"
          y2="350"
          stroke="currentColor"
          strokeWidth="1"
          className="text-accent/20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
      </motion.svg>

      {/* Small accent dots */}
      <motion.div className="absolute flex gap-24">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-primary/60"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
