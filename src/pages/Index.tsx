import HeroSection from "@/components/HeroSection";
import WhenWhereSection from "@/components/WhenWhereSection";
import DressCodeSection from "@/components/DressCodeSection";
import PhotoGallerySection from "@/components/PhotoGallerySection";
import WeddingPresentsSection from "@/components/WeddingPresentsSection";
import ThankYouSection from "@/components/ThankYouSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-cream overflow-x-hidden">
      <HeroSection />
      <WhenWhereSection />
      <DressCodeSection />
      <PhotoGallerySection />
      <WeddingPresentsSection />
      <ThankYouSection />
    </main>
  );
};

export default Index;
