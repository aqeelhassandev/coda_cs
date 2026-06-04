import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useRef } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { DeliveryTruck01Icon, CreditCardIcon, InboxIcon, HelpCircleIcon, } from "@hugeicons/core-free-icons";
import { motion, useScroll, useSpring } from "framer-motion";
const WhyShop = () => {
    const containerRef = useRef(null);
    // Track scroll position of the section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    // Smooth out drawing speed
    const pathLength = useSpring(scrollYProgress, {
        stiffness: 85,
        damping: 25,
        restDelta: 0.001,
    });
    const items = [
        {
            icon: DeliveryTruck01Icon,
            title: "FREE DELIVERY",
            description: "Get your streetwear fast and free, with no extra shipping costs on all orders.",
        },
        {
            icon: CreditCardIcon,
            title: "100% SECURE PAYMENT",
            description: "Shop with confidence using encrypted, safe, and trusted payment methods.",
        },
        {
            icon: InboxIcon,
            title: "30 DAYS RETURN",
            description: "Not the perfect fit? No worries. Return or exchange hassle-free within 30 days.",
        },
        {
            icon: HelpCircleIcon,
            title: "24/7 SUPPORT",
            description: "Got questions? Our team is here for you anytime, anywhere.",
        },
    ];
    return (_jsxs("div", { ref: containerRef, className: "w-full border-t border-neutral-100 py-20 pt-12 mb-12 relative overflow-hidden", children: [_jsx("svg", { className: "absolute -inset-2 w-full h-full pointer-events-none text-neutral-200 dark:text-neutral-900", preserveAspectRatio: "none", viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx(motion.path, { d: "M 0,0 C 30,10 50,10 40,20 C 30,30 5,30 15,40 C 25,50 80,50 70,60 C 60,70 30,70 40,80 C 50,90 80,90 100,100", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", style: { pathLength } }) }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10", children: [_jsxs("div", { className: "lg:col-span-5 flex flex-col gap-6", children: [_jsxs("h2", { className: "text-[52px] md:text-[60px] font-black leading-[1.05] uppercase tracking-tight text-text-base relative", children: [_jsxs("span", { className: "relative inline-block", children: ["WHY SHOP", _jsx("span", { className: "absolute bottom-2 left-0 right-0 h-4 bg-sky-100/90 -z-10 rounded-sm" })] }), " ", "WITH US?"] }), _jsx("p", { className: "text-[18px] text-text-secondary leading-relaxed font-normal max-w-md", children: "We've got you covered with hassle-free shopping, top-tier service, and guarantees that keep you confident in every purchase." })] }), _jsx("div", { className: "lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12", children: items.map((item, index) => (_jsxs(motion.div, { className: "flex flex-col items-start group", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-100px" }, transition: { duration: 0.5, delay: index * 0.1 }, children: [_jsx(motion.div, { className: "w-14 h-14 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-800 shadow-xs transition-colors duration-300 group-hover:border-neutral-400", whileHover: { scale: 1.05, rotate: 5 }, transition: { type: "spring", stiffness: 400, damping: 15 }, children: _jsx(HugeiconsIcon, { icon: item.icon, className: "w-6 h-6 text-neutral-700", strokeWidth: 2 }) }), _jsx("h3", { className: "text-[22px] md:text-[24px] font-black text-text-base uppercase tracking-wide mt-5 mb-2 transition-colors duration-300 group-hover:text-black", children: item.title }), _jsx("p", { className: "text-[16px] text-text-secondary leading-relaxed font-normal max-w-sm", children: item.description })] }, index))) })] })] }));
};
export default memo(WhyShop);
