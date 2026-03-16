import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RoomsSection from "@/components/RoomsSection";
import GallerySection from "@/components/GallerySection";
import AmenitiesSection from "@/components/AmenitiesSection";
import ReviewsSection from "@/components/ReviewsSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <GallerySection />
      <AmenitiesSection />
      <ReviewsSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
