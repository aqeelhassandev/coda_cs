import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "w-full overflow-x-hidden bg-background", children: [_jsxs("div", { className: "mx-auto w-full max-w-[1200px] px-4 sm:px-6", children: [_jsx(Navbar, {}), _jsx(HeroSection, {}), _jsx(OurProduct, {}), _jsx(ShipYourWebsite, {}), _jsx(OurStory, {})] }), _jsx(Featured, {}), _jsx(ShowProduct, {}), _jsxs("div", { className: "mx-auto w-full max-w-[1200px] px-4 sm:px-6", children: [_jsx(WhyShop, {}), _jsx(CTA, {}), _jsx(Categories, {})] }), _jsx(Footer, {})] }));
};
