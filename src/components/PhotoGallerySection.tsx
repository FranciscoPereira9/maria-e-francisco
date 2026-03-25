import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import cavalitas from "@/assets/cavalitas.jpg";
import defrente from "@/assets/defrente.jpg";
import baloico from "@/assets/baloico.jpg";
import field from "@/assets/field.jpg";
import entrada from "@/assets/entrada.jpg";
import flores from "@/assets/flores.jpg";

// Placeholder images with wedding theme colors
const placeholderImages = [
  {
    id: 1,
    alt: "Couple walking through vineyard",
    gradient: "from-sage to-sage-dark",
    path: cavalitas,
  },
  {
    id: 2,
    alt: "Wedding venue exterior",
    gradient: "from-terracotta-light to-terracotta",
    path: entrada,
  },
  {
    id: 3,
    alt: "Sunset over Portuguese hills",
    gradient: "from-olive to-sage-dark",
    path: baloico,
  },
  {
    id: 4,
    alt: "Rustic table setting",
    gradient: "from-terracotta to-olive",
    path: field,
  },
  {
    id: 5,
    alt: "Cypress trees at golden hour",
    gradient: "from-sage-dark to-olive",
    path: defrente,
  },
  {
    id: 6,
    alt: "Romantic garden moment",
    gradient: "from-terracotta-light to-sage",
    path: flores,
  },
];

const PhotoGallerySection = () => {
  return (
    <section className="py-20 md:py-28 bg-cream overflow-hidden">
      <div className="w-full px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-3xl md:text-4xl text-terracotta mb-4">
            Our Moments
          </h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-6">
              {placeholderImages.map((image) => (
                <CarouselItem
                  key={image.id}
                  className="pl-3 md:pl-6 basis-[85%] sm:basis-[70%] md:basis-1/2 lg:basis-[40%]"
                >
                  <div className="relative aspect-[100/100] rounded-lg overflow-hidden group">
                    <img
                      src={image.path}
                      alt={image.alt}
                      className="absolute h-full w-full object-cover"
                    />

                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/40 to-transparent">
                      <p className="text-cream text-sm font-elegant text-center">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex left-4 lg:left-8 bg-cream border-terracotta-light text-terracotta hover:bg-terracotta hover:text-cream" />
            <CarouselNext className="hidden md:flex right-4 lg:right-8 bg-cream border-terracotta-light text-terracotta hover:bg-terracotta hover:text-cream" />
          </Carousel>

          {/* Mobile swipe hint */}
          <p className="text-center text-muted-foreground text-sm mt-6 md:hidden font-elegant">
            ← Swipe to see more →
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoGallerySection;
