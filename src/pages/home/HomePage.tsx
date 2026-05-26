import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/layout/HeroSection";
import Categories from "@/components/layout/Categories";
import OurProduct from "@/components/layout/OurProduct";
import ShipYourWebsite from "@/components/layout/ShipYourWebsite";
import OurStory from "@/components/layout/OurStory";
import Featured from "@/components/layout/Featured";
import ShowProduct from "@/components/layout/ShowProduct";
import { CTA } from "@/components/layout/CTA";
import WhyShop from "@/components/layout/WhyShop";
import Footer from "@/components/layout/Footer";

export const HomePage = () => {
  return (
    <div className="w-full overflow-x-hidden bg-background">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <Navbar />
        <HeroSection />
        <OurProduct />
        <ShipYourWebsite />
        <OurStory />
      </div>
      <Featured />
      <ShowProduct />
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <WhyShop />
        <CTA />
        <Categories />
      </div>
      <Footer />
    </div>
  );
};
