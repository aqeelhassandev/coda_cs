import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/layout/HeroSection";

export const HomePage = () => {
  return (
    <div className="space-y-10 mx-auto">
      <Navbar />
      <HeroSection />
    </div>
  );
};