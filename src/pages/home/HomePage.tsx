import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/layout/HeroSection";
import OurProduct from "@/components/layout/OurProduct";
import ShipYourWebsite from "@/components/layout/ShipYourWebsite";
import OurStory from "@/components/layout/OurStory";
import Featured from "@/components/layout/Featured";
import ShowProduct from "@/components/layout/ShowProduct";

export const HomePage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="mx-auto w-[1200px]">
        <Navbar />
        <HeroSection />
        <OurProduct />
        <ShipYourWebsite />
        <OurStory />
      </div>
      <Featured />
      <ShowProduct />
    </div>
  );
};
