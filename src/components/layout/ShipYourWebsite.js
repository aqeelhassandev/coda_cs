import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@base-ui/react/button";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { memo } from "react";
import { motion } from "framer-motion";
const services = [
    {
        image: "/hero/3.avif",
        classNameContainer: "md:col-span-2",
    },
    {
        title: "Built by the Streets, Made for You",
        description: "From the streets to your style—our journey is all about self-expression and rebellion. Join the movement.",
        buttonText: "Read our story ",
        bgColor: "rgb(18, 18, 18)",
        classNameContainer: "p-[30px]",
        classNameContent: "text-white",
    },
    {
        title: "Elevate Your Street Game",
        description: "From bold graphics to everyday essentials, explore our latest drops and signature pieces designed for the culture.",
        buttonText: "Shop collections ",
        bgColor: "rgb(232, 232, 232)",
        classNameContainer: "p-[30px]",
        classNameContent: "text-black",
    },
    {
        image: "/services/1.avif",
        classNameContainer: "md:col-span-2",
    },
];
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
};
const ServiceCard = memo((serviceData) => {
    return (_jsxs(motion.div, { variants: fadeInUp, style: { backgroundColor: serviceData?.bgColor }, className: `${serviceData.classNameContainer} rounded-2xl flex gap-[20px] flex-col cursor-pointer group`, children: [serviceData.image && (_jsx("div", { className: "overflow-hidden rounded-[30px] w-full", children: _jsx("img", { className: "h-[350px] sm:h-[450px] md:h-[500px] w-full object-cover group-hover:scale-105 transition-all duration-700 ease-in-out", loading: "lazy", src: serviceData.image, alt: serviceData.image }) })), serviceData.title && (_jsxs("div", { style: { justifyContent: "end" }, className: `flex flex-col gap-[7px] w-full h-full ${serviceData.classNameContent}`, children: [_jsx("h3", { className: "text-[26px] sm:text-[30px] font-bold", children: serviceData.title }), _jsx("p", { className: "text-[16px] sm:text-[18px] leading-[150%] font-normal w-[95%]", children: serviceData.description }), _jsxs(Button, { className: `${serviceData.classNameContent == "text-white" ? "bg-white text-black" : "text-white bg-black"} relative border-0 outline-none overflow-hidden rounded-full px-5 py-2 mt-3 w-fit flex items-center gap-3 text-base font-medium group cursor-pointer`, children: [_jsx("span", { className: `${serviceData.classNameContent == "text-white" ? "bg-[#292929]" : "bg-white"} absolute inset-0 scale-x-0 origin-left transition-transform duration-700 ease-out group-hover:scale-x-100 rounded-full` }), _jsx("span", { className: `${serviceData.classNameContent == "text-white" ? "text-black group-hover:text-white" : "text-white group-hover:text-black"} relative z-10 transition-colors duration-500`, children: serviceData.buttonText }), _jsx("div", { className: `${serviceData.classNameContent == "text-white" ? "bg-[#292929]" : "bg-white"} relative z-10 rounded-full p-2 transition-all duration-500`, children: _jsx(HugeiconsIcon, { icon: ArrowRight01Icon, className: `${serviceData.classNameContent == "text-white" ? "text-white group-hover:text-white" : "text-black group-hover:text-black"} w-4 h-4 transition-colors duration-500`, strokeWidth: 2 }) })] })] }))] }));
});
ServiceCard.displayName = "ServiceCard";
const ShipYourWebsite = () => {
    return (_jsxs(motion.div, { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-100px" }, variants: staggerContainer, className: "w-full h-full mt-12 mb-10 md:mt-[86px] md:mb-[36px]", children: [_jsxs(motion.div, { variants: fadeInUp, className: "w-full md:w-[60%]", children: [_jsx("h3", { className: "text-[32px] sm:text-[45px] font-bold text-text-base uppercase", children: "Ship Your Website Quickly with Frameblox" }), _jsx("p", { className: "text-[16px] sm:text-[18px] font-normal leading-[150%] text-text-secondary w-full mt-4", children: "Use prebuilt templates and components for a professional, stunning look. Save time and focus on content with our user-friendly, customizable design solutions." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-10", children: services.map((service, index) => (_jsx(ServiceCard, { ...service }, `${service.title}-${index}`))) })] }));
};
export default memo(ShipYourWebsite);
