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
import gallery_6 from "@/assets/gallery/6.jpg";
import gallery_10 from "@/assets/gallery/10.jpg";
import gallery_15 from "@/assets/gallery/15.jpg";
import gallery_57 from "@/assets/gallery/57.jpg";
import gallery_67 from "@/assets/gallery/67.jpg";
import gallery_68 from "@/assets/gallery/68.jpg";
import gallery_82 from "@/assets/gallery/82.jpg";
import gallery_89 from "@/assets/gallery/89.jpg";
import gallery_97 from "@/assets/gallery/97.jpg";
import gallery_140 from "@/assets/gallery/140.jpg";
import gallery_153 from "@/assets/gallery/153.jpg";
import gallery_154 from "@/assets/gallery/154.jpg";
import gallery_158 from "@/assets/gallery/158.jpg";
import gallery_186 from "@/assets/gallery/186.jpg";
import gallery_192 from "@/assets/gallery/192.jpg";
import gallery_212 from "@/assets/gallery/212.jpg";
import gallery_217 from "@/assets/gallery/217.jpg";
import gallery_219 from "@/assets/gallery/219.jpg";
import gallery_242 from "@/assets/gallery/242.jpg";
import gallery_273 from "@/assets/gallery/273.jpg";
import gallery_278 from "@/assets/gallery/278.jpg";
import gallery_282 from "@/assets/gallery/282.jpg";

// Placeholder images with wedding theme colors
const placeholderImages = [
  // Entrada Alferes

  // // { id: 1, alt: "Not being used.", path: gallery_153 },
  // { id: 2, alt: "Not being used.", path: gallery_154 },

  // { id: 5, alt: "Not being used.", path: gallery_10 },

  // { id: 7, alt: "Not being used.", path: gallery_15 },
  // // { id: 3, alt: "Not being used.", path: gallery_158 },
  // { id: 4, alt: "Not being used.", path: gallery_186 },

  // {
  //   id: 2,
  //   alt: "Sunset over Portuguese hills",
  //   gradient: "from-olive to-sage-dark",
  //   path: baloico,
  // },
  // {
  //   id: 3,
  //   alt: "Rustic table setting",
  //   gradient: "from-terracotta to-olive",
  //   path: field,
  // },
  // {
  //   id: 4,
  //   alt: "Cypress trees at golden hour",
  //   gradient: "from-sage-dark to-olive",
  //   path: defrente,
  // },
  // {
  //   id: 5,
  //   alt: "Romantic garden moment",
  //   gradient: "from-terracotta-light to-sage",
  //   path: flores,
  // },

  // { id: 4, alt: "Not being used.", path: gallery_6 },

  // Pair
  { id: 25, alt: "Not being used.", path: gallery_212 },
  { id: 5, alt: "Not being used.", path: gallery_192 },

  // Pair
  { id: 0, alt: "Not being used.", path: entrada },
  { id: 5, alt: "Not being used.", path: gallery_219 },

  // Pair
  { id: 10, alt: "Not being used.", path: gallery_57 },
  { id: 9, alt: "Not being used.", path: gallery_67 },

  // Pair
  { id: 37, alt: "Not being used.", path: gallery_282 },
  { id: 30, alt: "Not being used.", path: gallery_273 },

  { id: 10, alt: "Not being used.", path: gallery_68 },
  { id: 13, alt: "Not being used.", path: gallery_82 },
  { id: 14, alt: "Not being used.", path: gallery_89 },
  { id: 16, alt: "Not being used.", path: gallery_97 },

  { id: 26, alt: "Not being used.", path: gallery_217 },
  { id: 27, alt: "Not being used.", path: gallery_219 },
  { id: 28, alt: "Not being used.", path: gallery_242 },
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
            ❦ {/*❤ */}
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
                    {/*<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/40 to-transparent">
                      <p className="text-cream text-sm font-elegant text-center">
                        {image.alt}
                      </p>
                    </div>*/}
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
