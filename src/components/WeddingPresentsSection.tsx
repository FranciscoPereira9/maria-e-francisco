import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { RotateCw } from "lucide-react";
import llamaImage from "@/assets/peru-honeymoon.webp";

const WeddingPresentsSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    const runAnimation = async () => {
      if (isFlipped) {
        await controls.start({ rotateY: 180, transition: { duration: 0.7 } });
      } else {
        await controls.start({ rotateY: 0, transition: { duration: 0.7 } });
        // Start idle wobble after flip-back completes
        controls.start({
          rotateY: [0, 15, 0, -5, 0],
          transition: {
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          },
        });
      }
    };
    runAnimation();
  }, [isFlipped, controls]);

  return (
    <section className="py-20 md:py-28 px-6 bg-cream-dark">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-3xl md:text-4xl text-terracotta mb-4">
            Lista de Casamento
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left space-y-6"
          >
            <p className="font-elegant text-lg md:text-xl text-foreground leading-relaxed">
              A vossa presença é, sem dúvida, o maior presente. Para nós, criar
              memórias juntos vale mais do que qualquer outra prenda.
            </p>
            <p className="font-elegant text-lg md:text-xl text-foreground leading-relaxed">
              Como já partilhamos uma vida a dois e temos o essencial, não
              teremos uma lista de casamento tradicional.
            </p>
            <p className="font-elegant text-lg md:text-xl text-foreground leading-relaxed">
              Se desejarem assinalar este dia de outra forma, poderão contribuir
              para a nossa
              <span className="font-script text-terracotta text-2xl">
                &nbsp;Lua de Mel no Peru.
              </span>
            </p>
          </motion.div>

          {/* Right side - Flippable card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div
              className="relative w-72 h-96 cursor-pointer group"
              style={{ perspective: "1000px" }}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
                animate={controls}
              >
                {/* Front - IBAN info */}
                <div
                  className="absolute inset-0 rounded-lg overflow-hidden border-2 border-terracotta-light bg-cream-dark flex flex-col items-center justify-center p-8"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="text-center space-y-6">
                    <h3 className="font-script text-2xl text-sage-dark">
                      Lua de Mel no Peru
                    </h3>
                    <div className="section-divider" />
                    <p className="font-elegant text-muted-foreground leading-relaxed">
                      Para um começo inesquecível da nossa vida em conjunto.
                    </p>
                    <div className="pt-4 space-y-3">
                      <p className="font-elegant text-sm text-muted-foreground uppercase tracking-widest">
                        Beneficiário
                      </p>
                      <p className="font-elegant text-foreground text-sm md:text-base tracking-wide font-medium whitespace-nowrap">
                        Francisco Pereira & Maria Caiado
                      </p>
                      <p className="font-elegant text-sm text-muted-foreground uppercase tracking-widest">
                        IBAN
                      </p>
                      <p className="font-elegant text-foreground text-sm md:text-base tracking-wide font-medium whitespace-nowrap">
                        NL02 REVO 9676 6316 04
                      </p>
                    </div>
                    <div className="pt-2">
                      <div className="flex items-center justify-center gap-2 text-terracotta">
                        <RotateCw className="w-4 h-4" />
                        <span className="font-elegant text-sm">
                          Tap to flip
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back - Llama image */}
                <div
                  className="absolute inset-0 rounded-lg overflow-hidden border-2 border-terracotta-light"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <img
                    src={llamaImage}
                    alt="Llama in Peru"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/50 to-transparent">
                    <div className="flex items-center justify-center gap-2 text-cream">
                      <RotateCw className="w-4 h-4 animate-pulse" />
                      <span className="font-elegant text-sm tracking-wide">
                        Obrigado 🤍
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WeddingPresentsSection;
