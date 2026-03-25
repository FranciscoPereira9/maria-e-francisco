import { motion } from "framer-motion";
import thankyou from "@/assets/thankyou.jpg";
import weddingLogo from "@/assets/logo-wedding.png";

const ThankYouSection = () => {
  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Thank You Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-script text-3xl md:text-4xl text-terracotta">
              Thank You
            </h2>
            <div className="section-divider" />

            <p className="font-elegant text-lg md:text-xl text-foreground max-w-xl mx-auto leading-relaxed">
              We are so grateful to have you as part of our special day. Your
              presence and love mean the world to us as we begin this new
              chapter of our lives together.
            </p>

            <p className="font-elegant text-lg text-muted-foreground italic">
              With love and gratitude,
            </p>

            <p className="font-script text-2xl text-sage-dark">
              Maria João & Francisco
            </p>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-10 md:mt-12"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-3 md:-inset-4 border-2 border-terracotta-light" />
              <img
                src={thankyou}
                alt="Maria João and Francisco"
                className="w-[90vw] max-w-[24rem] md:w-[36rem] md:max-w-none aspect-[4/3] md:aspect-[16/10] object-cover rounded-sm"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20 pt-8 border-t border-terracotta-light max-w-md mx-auto text-center"
      >
        <img
          src={weddingLogo}
          alt="M & F"
          className="w-16 h-16 mx-auto mb-4 object-contain opacity-60"
        />
        <p className="font-elegant text-sm text-muted-foreground tracking-widest uppercase">
          July 18th, 2026 • Vairão, Portugal
        </p>
      </motion.footer>
    </section>
  );
};

export default ThankYouSection;
