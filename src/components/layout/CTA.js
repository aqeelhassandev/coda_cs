import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { motion, AnimatePresence } from "framer-motion";
const SLIDE_DURATION = 5000;
const slides = [
    {
        id: "05",
        title: "LIMITED DROPS, MAXIMUM IMPACT",
        description: "We release exclusive, small-batch collections to keep your style fresh and unique—once it's gone, it's gone.",
        subtitle: "Community-Driven Culture",
        image: "/hero/5.avif",
    },
];
export function CTA() {
    return (_jsx("div", { className: "h-[500px] sm:h-[650px] md:h-[800px] overflow-hidden rounded-[40px] relative bg-neutral-900 my-[60px] md:my-[100px]", children: _jsx("div", { className: "w-full h-full", children: _jsx("div", { className: "h-full ml-0", children: _jsxs("div", { className: "h-full pl-0 relative", children: [_jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [_jsx(motion.div, { className: "absolute inset-0 bg-cover bg-center", style: { backgroundImage: `url(/hero/5.avif)` }, initial: { scale: 1.08 }, animate: { scale: 1.2 }, transition: {
                                        duration: SLIDE_DURATION / 1000,
                                        ease: "linear",
                                    } }), _jsx("div", { className: "absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" }), _jsx("div", { className: "absolute inset-0 bg-black/20" })] }), _jsx("div", { className: "relative h-full flex flex-col justify-end px-6 md:px-16 pb-12 md:pb-20", children: _jsx(AnimatePresence, { mode: "wait", children: _jsxs(motion.div, { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -30 }, transition: { duration: 0.65, ease: "easeOut" }, className: " space-y-6", children: [_jsx(motion.h1, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.15, duration: 0.6 }, className: "text-white text-[36px] sm:text-[60px] md:text-[80px] font-bold leading-[1.1] uppercase tracking-tight", children: "Join the Movement. Wear the Future." }), _jsx(motion.p, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3, duration: 0.6 }, className: "text-gray-300 text-lg max-w-md font-light leading-relaxed", children: "Streetwear designed for those who break the mold. Limited drops, bold designs, and premium quality\u2014don\u2019t miss out." }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.45, duration: 0.6 }, children: _jsxs(Button, { className: "relative overflow-hidden bg-white text-black rounded-full px-5 py-6 flex items-center gap-3 text-base font-medium group cursor-pointer", children: [_jsx("span", { className: "absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-700 ease-out group-hover:scale-x-100 rounded-full" }), _jsx("span", { className: "relative z-10 transition-colors duration-500 group-hover:text-white", children: "Shop now" }), _jsx("div", { className: "relative z-10 bg-black rounded-full p-2 transition-all duration-500   ", children: _jsx(HugeiconsIcon, { icon: ArrowRight01Icon, className: "text-white w-4 h-4 transition-colors duration-500", strokeWidth: 2 }) })] }) })] }) }) })] }) }) }) }));
}
