import { motion } from "framer-motion";

const DressCodeSection = () => {
  return (
    <section className="py-20 px-6 bg-cream-dark">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-3xl md:text-4xl text-terracotta mb-4">
            Dress Code
          </h2>
          <div className="section-divider" />
          <p className="font-elegant text-lg text-muted-foreground mt-6 max-w-xl mx-auto">
            We kindly ask our guests to join us in celebrating with elegant
            attire
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Women */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center h-full"
          >
            <div className="wedding-card h-full flex flex-col">
              <h3 className="font-script text-2xl md:text-3xl text-sage-dark mb-6">
                Ladies
              </h3>

              <div className="font-elegant text-foreground flex flex-col flex-1">
                <div className="space-y-4 flex-1">
                  <p className="text-lg">Cocktail or evening dress</p>
                  <p className="text-muted-foreground">
                    Long or midi length dresses in soft, elegant tones
                  </p>
                </div>
                <div className="pt-4 border-t border-terracotta-light mt-4">
                  <p className="text-sm text-terracotta font-medium">
                    Kindly avoid white and black
                  </p>
                </div>
              </div>

              {/* Color swatches */}
              <div className="flex justify-center gap-3 mt-6 pt-4">
                <div
                  className="w-8 h-8 rounded-full bg-[hsl(18,40%,70%)] border-2 border-background"
                  title="Terracotta"
                />
                <div
                  className="w-8 h-8 rounded-full bg-[hsl(130,18%,55%)] border-2 border-background"
                  title="Sage"
                />
                <div
                  className="w-8 h-8 rounded-full bg-[hsl(30,30%,75%)] border-2 border-background"
                  title="Champagne"
                />
                <div
                  className="w-8 h-8 rounded-full bg-[hsl(350,30%,75%)] border-2 border-background"
                  title="Dusty Rose"
                />
              </div>
            </div>
          </motion.div>

          {/* Men */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center h-full"
          >
            <div className="wedding-card h-full flex flex-col">
              <h3 className="font-script text-2xl md:text-3xl text-sage-dark mb-6">
                Gentlemen
              </h3>

              <div className="font-elegant text-foreground flex flex-col flex-1">
                <div className="space-y-4 flex-1">
                  <p className="text-lg">Suit and tie</p>
                  <p className="text-muted-foreground">
                    Light or neutral colored suits welcome for the summer
                    celebration
                  </p>
                </div>
                <div className="pt-4 border-t border-terracotta-light mt-4">
                  <p className="text-sm text-terracotta font-medium">
                    No jeans or sneakers please
                  </p>
                </div>
              </div>

              {/* Color swatches */}
              <div className="flex justify-center gap-3 mt-6 pt-4">
                <div
                  className="w-8 h-8 rounded-full bg-[hsl(220,10%,40%)] border-2 border-background"
                  title="Charcoal"
                />
                <div
                  className="w-8 h-8 rounded-full bg-[hsl(35,30%,70%)] border-2 border-background"
                  title="Tan"
                />
                <div
                  className="w-8 h-8 rounded-full bg-[hsl(210,20%,60%)] border-2 border-background"
                  title="Light Blue"
                />
                <div
                  className="w-8 h-8 rounded-full bg-[hsl(130,15%,45%)] border-2 border-background"
                  title="Olive"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;
