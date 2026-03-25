import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import heroLandscape from "@/assets/hero-landscape.png";
import iconCeremony from "@/assets/icon-ceremony.png";
import iconReception from "@/assets/icon-reception.png";

const WhenWhereSection = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroLandscape})` }}
      />
      <div className="absolute inset-0 bg-cream/90" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-3xl md:text-4xl text-terracotta mb-4">
            When & Where
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Ceremony Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="wedding-card text-center"
          >
            <div className="h-36 mb-4">
              <img
                src={iconCeremony}
                alt="Ceremony"
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="font-script text-2xl md:text-3xl text-sage-dark h-10 flex items-center justify-center">
              Ceremony
            </h3>

            <div className="font-elegant text-foreground">
              <div className="h-8 flex items-center justify-center text-sm uppercase tracking-widest text-muted-foreground">
                <Clock className="w-4 h-4 text-terracotta" />
                <span className="text-lg">&nbsp;14:30</span>
              </div>

              <p className="h-14 flex items-center justify-center text-xl font-medium">
                Mosteiro de São Salvador de Vairão
              </p>

              <div className="h-8 flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-terracotta flex-shrink-0" />
                <span>4485-662 Vairão, Portugal</span>
              </div>
            </div>
          </motion.div>

          {/* Reception Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="wedding-card text-center"
          >
            <div className="h-36 mb-4">
              <img
                src={iconReception}
                alt="Reception"
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="font-script text-2xl md:text-3xl text-sage-dark h-10 flex items-center justify-center">
              Reception
            </h3>

            <div className="font-elegant text-foreground">
              <p className="h-8 flex items-center justify-center text-sm uppercase tracking-widest text-muted-foreground">
                Following the ceremony
              </p>

              <p className="h-14 flex items-center justify-center text-xl font-medium">
                Quinta do Alferes de Crasto
              </p>

              <div className="h-8 flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-terracotta flex-shrink-0" />
                <span>R. do Crasto, 4485-684 Vairão, Portugal</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhenWhereSection;
