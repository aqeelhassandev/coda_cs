import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/layout/HeroSection";
import OurProduct from "@/components/layout/OurProduct";

export const HomePage = () => {
  return (
    <div className="mx-auto w-[1200px]">
      <Navbar />
      <HeroSection />
      <OurProduct />
    </div>
  );
};
