import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import thankyou from "@/assets/thankyou.jpg";
import weddingLogo from "@/assets/logo-wedding.png";

const WEDDING_DATE = new Date("2026-07-18T14:30:00");

function getTimeLeft() {
  const now = new Date();
  const diff = Math.max(0, WEDDING_DATE.getTime() - now.getTime());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const ThankYouSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

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
              Obrigado
            </h2>
            <div className="section-divider" />

            <p className="font-elegant text-lg md:text-xl text-foreground max-w-xl mx-auto leading-relaxed">
              Obrigado por estarem presentes nas nossas vidas, por fazerem parte
              da nossa história e por celebrarem este momento tão especial ao
              nosso lado.
            </p>
            <p className="font-elegant text-lg md:text-xl text-foreground max-w-xl mx-auto leading-relaxed">
              Estamos muito felizes por vos ter connosco neste dia.
            </p>

            <p className="font-elegant text-lg text-muted-foreground italic">
              Com carinho,
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

        {/* Compact Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-6">
            {[
              { label: "dias", value: timeLeft.days },
              { label: "horas", value: timeLeft.hours },
              { label: "minutos", value: timeLeft.minutes },
              { label: "segundos", value: timeLeft.seconds },
            ].map((unit, i) => (
              <div
                key={unit.label}
                className="flex items-baseline gap-1 sm:gap-2"
              >
                <span className="font-elegant text-lg sm:text-xl md:text-2xl text-foreground font-medium tabular-nums">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="font-elegant text-[9px] sm:text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.12em] sm:tracking-widest">
                  {unit.label}
                </span>
                {i < 3 && (
                  <span className="font-elegant text-base sm:text-lg text-muted-foreground/50 mx-1 sm:mx-2">
                    ·
                  </span>
                )}
              </div>
            ))}
          </div>
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
          18 de Julho de 2026 • Vairão, Portugal
        </p>
      </motion.footer>
    </section>
  );
};

export default ThankYouSection;
