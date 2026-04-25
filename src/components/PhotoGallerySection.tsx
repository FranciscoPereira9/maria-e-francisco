import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import entrada from "@/assets/entrada.jpg";
import gallery_3 from "@/assets/gallery/3.jpg";
import gallery_6 from "@/assets/gallery/6.jpg";
import gallery_67 from "@/assets/gallery/67.jpg";
import gallery_153 from "@/assets/gallery/153.jpg";
import gallery_192 from "@/assets/gallery/192.jpg";
import gallery_212 from "@/assets/gallery/212.jpg";
import gallery_273 from "@/assets/gallery/273.jpg";
import gallery_80 from "@/assets/gallery/80.jpg";
import gallery_91 from "@/assets/gallery/91.jpg";
import gallery_182 from "@/assets/gallery/182.jpg";
import gallery_183 from "@/assets/gallery/183.jpg";

// Placeholder images with wedding theme colors
const placeholderImages = [
  // Pair
  { id: 1, alt: "Not being used.", path: gallery_212 },
  { id: 2, alt: "Not being used.", path: gallery_192 },

  // Pair
  { id: 3, alt: "Not being used.", path: entrada },
  { id: 4, alt: "Not being used.", path: gallery_153 },

  //Pair
  { id: 5, alt: "Not being used.", path: gallery_6 },
  { id: 6, alt: "Not being used.", path: gallery_183 },

  // Pair
  { id: 7, alt: "Not being used.", path: gallery_80 },
  { id: 8, alt: "Not being used.", path: gallery_273 },

  // Pair
  { id: 9, alt: "Not being used.", path: gallery_3 },
  { id: 10, alt: "Not being used.", path: gallery_91 },

  // Pair
  { id: 11, alt: "Not being used.", path: gallery_182 },
  { id: 12, alt: "Not being used.", path: gallery_67 },
];

const PhotoGallerySection = () => {
  return (
    <section className="py-20 md:py-28 bg-cream overflow-hidden">
      <div className="w-full px-4 md:px-8">
        {/*<motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-3xl md:text-4xl text-terracotta mb-4">
            ❤
          </h2>
          <div className="section-divider" />
        </motion.div>*/}

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
                  className="pl-3 md:pl-6 basis-[85%] sm:basis-[70%] md:basis-1/2 lg:basis-[30%]"
                >
                  <div className="relative aspect-[100/100] rounded-lg overflow-hidden group">
                    <img
                      src={image.path}
                      alt={image.alt}
                      className="absolute h-full w-full object-cover"
                    />
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
