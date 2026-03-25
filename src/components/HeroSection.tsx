import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import weddingLogo from "@/assets/logo-wedding.png";
import coupleHero from "@/assets/couple-hero.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Track progress for this section in normal scroll flow (non-sticky)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Sequence:
  // background only -> text appears -> text fully visible -> transition to next section
  const textOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.2, 0.45, 0.75, 1.0],
    [0, 0, 1, 1, 0.92],
  );
  const textY = useTransform(
    scrollYProgress,
    [0.0, 0.2, 0.45, 0.75, 1.0],
    [36, 36, 0, 0, -10],
  );

  // Keep indicator visible initially, then fade as text comes in
  const indicatorOpacity = useTransform(scrollYProgress, [0.14, 0.32], [1, 0]);

  // Subtle parallax without pinning
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.03, 1.08]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -24]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* Background image */}
      <motion.div
        style={{ scale: bgScale, y: bgY }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${coupleHero})` }}
        />
      </motion.div>

      {/* Decorative terracotta frame */}
      <div className="absolute inset-4 md:inset-8 border-2 border-terracotta-light pointer-events-none z-10" />

      {/* Hero content */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="text-center z-20"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.img
          src={weddingLogo}
          alt="M & F Wedding Monogram"
          className="w-36 h-36 md:w-44 md:h-44 mx-auto mb-8 object-contain"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-white mb-4 font-elegant">
          The Wedding of
        </p>

        <h1 className="font-script text-4xl md:text-6xl lg:text-7xl text-white mb-6">
          Maria João & Francisco
        </h1>

        <div className="mt-8">
          <div className="section-divider mb-6" />
          <p className="font-elegant text-xl md:text-2xl text-white tracking-wide">
            Saturday, July 18th, 2026
          </p>
          <p className="font-elegant text-lg text-white mt-2">
            Vairão, Portugal
          </p>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: indicatorOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 0.4 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
      >
        <div className="w-6 h-10 border-2 border-terracotta-light rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-terracotta rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
