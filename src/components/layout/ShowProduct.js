"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@base-ui/react/button";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { memo, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
const productImages = [
    "/features/1.avif",
    "/features/2.avif",
    "/features/3.avif",
    "/features/4.avif",
];
// ─── Same variants as Footer ──────────────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
};
const fadeLeft = {
    hidden: { opacity: 0, x: -36 },
    visible: {
        opacity: 1, x: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
};
const wordReveal = {
    hidden: { y: "110%", opacity: 0 },
    visible: (i = 0) => ({
        y: "0%", opacity: 1,
        transition: { duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
    }),
};
const linkItem = {
    hidden: { opacity: 0, x: -12 },
    visible: (i = 0) => ({
        opacity: 1, x: 0,
        transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" },
    }),
};
// ─── Animated Heading ─────────────────────────────────────────────────────────
const AnimatedHeading = ({ inView }) => (_jsx("h2", { className: "text-white text-[56px] sm:text-[72px] md:text-[80px] lg:text-[88px] font-black uppercase tracking-tight leading-[0.95] mb-6", children: ["Nightfall", "Oversized", "Hoodie"].map((line, li) => (_jsx("span", { className: "block", children: _jsx("span", { className: "inline-block overflow-hidden", children: _jsx(motion.span, { className: "inline-block", variants: wordReveal, custom: li, initial: "hidden", animate: inView ? "visible" : "hidden", children: line }) }) }, li))) }));
// ─── Marquee Strip (same as Footer) ──────────────────────────────────────────
const ProductMarquee = () => {
    const tags = ["LIMITED DROP", "NEW ARRIVAL", "SS 2025", "STREETWEAR", "RAWBLOX®", "OVERSIZED FIT"];
    const doubled = [...tags, ...tags];
    return (_jsx("div", { className: "w-full overflow-hidden border-t border-b border-neutral-800 py-3 mb-10", children: _jsx(motion.div, { className: "flex w-max", animate: { x: ["0%", "-50%"] }, transition: { duration: 20, ease: "linear", repeat: Infinity }, children: doubled.map((text, i) => (_jsxs("span", { className: "flex items-center gap-5 px-8 text-neutral-600 whitespace-nowrap uppercase tracking-[4px] text-[11px] font-bold", children: [text, _jsx("span", { className: "w-1 h-1 rounded-full bg-neutral-700 inline-block" })] }, i))) }) }));
};
// ─── Badge pill ───────────────────────────────────────────────────────────────
const Badge = ({ children, inView, delay = 0 }) => (_jsx(motion.span, { className: "inline-flex items-center gap-1.5 border border-neutral-700 rounded-full px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-neutral-400", initial: { opacity: 0, scale: 0.85 }, animate: inView ? { opacity: 1, scale: 1 } : {}, transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }, children: children }));
// ─── Main Component ───────────────────────────────────────────────────────────
export const ShowProduct = () => {
    const [activeImage, setActiveImage] = useState(productImages[0]);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-8% 0px" });
    return (_jsxs("div", { ref: ref, className: "bg-black w-full overflow-hidden", children: [_jsx(ProductMarquee, {}), _jsxs("div", { className: "mx-auto w-full max-w-[1200px] px-6 pb-[80px] md:pb-[120px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start", children: [_jsxs(motion.div, { className: "flex flex-col w-full md:order-2", variants: fadeUp, custom: 0, initial: "hidden", animate: inView ? "visible" : "hidden", children: [_jsxs("div", { className: "relative aspect-[4/5] w-full overflow-hidden rounded-[28px] bg-neutral-950 shadow-2xl", children: [_jsx(AnimatePresence, { mode: "wait", children: _jsx(motion.img, { src: activeImage, alt: "Nightfall Oversized Hoodie", initial: { opacity: 0, scale: 1.03 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.98 }, transition: { duration: 0.4, ease: "easeInOut" }, className: "absolute inset-0 w-full h-full object-cover" }, activeImage) }), _jsx(motion.div, { className: "absolute top-4 left-4 bg-white text-black text-[11px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full", initial: { opacity: 0, y: -10 }, animate: inView ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }, children: "\u221226% OFF" })] }), _jsx("div", { className: "grid grid-cols-4 gap-3 mt-4", children: productImages.map((img, idx) => (_jsx(motion.button, { onClick: () => setActiveImage(img), variants: linkItem, custom: idx, initial: "hidden", animate: inView ? "visible" : "hidden", whileHover: { scale: 1.05 }, whileTap: { scale: 0.96 }, className: `aspect-[4/5] overflow-hidden rounded-[16px] cursor-pointer bg-neutral-950 border-2 focus:outline-none transition-all duration-300 ${activeImage === img
                                        ? "border-white shadow-md opacity-100"
                                        : "border-transparent opacity-50 hover:opacity-80"}`, "aria-label": `View product image ${idx + 1}`, children: _jsx("img", { src: img, alt: `Thumbnail ${idx + 1}`, className: "w-full h-full object-cover pointer-events-none", loading: "lazy" }) }, idx))) })] }), _jsxs(motion.div, { className: "flex flex-col justify-start pt-2 md:order-1", variants: fadeLeft, initial: "hidden", animate: inView ? "visible" : "hidden", children: [_jsxs("div", { className: "flex items-center gap-2 mb-6 flex-wrap", children: [_jsxs(Badge, { inView: inView, delay: 0.1, children: [_jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-green-500 inline-block" }), "In stock"] }), _jsx(Badge, { inView: inView, delay: 0.2, children: "Limited" }), _jsx(Badge, { inView: inView, delay: 0.3, children: "Free shipping" })] }), _jsx(AnimatedHeading, { inView: inView }), _jsxs(motion.div, { className: "flex items-center gap-3 mb-6", variants: fadeUp, custom: 0, initial: "hidden", animate: inView ? "visible" : "hidden", children: [_jsx("div", { className: "flex gap-0.5", children: [...Array(5)].map((_, i) => (_jsx("svg", { className: "w-4 h-4 fill-white", viewBox: "0 0 20 20", children: _jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }, i))) }), _jsx("span", { className: "text-neutral-400 text-[13px] font-medium", children: "4.9 \u00B7 214 reviews" })] }), _jsx(motion.p, { className: "text-neutral-400 text-[16px] font-light leading-[1.75] mb-8 border-l border-neutral-800 pl-4", variants: fadeUp, custom: 1, initial: "hidden", animate: inView ? "visible" : "hidden", children: "A heavyweight, ultra-soft hoodie designed for comfort and style. Featuring a relaxed fit, subtle embroidered detailing, and a faded wash for that perfect worn-in look. Street-ready and built to stand out." }), _jsxs(motion.div, { className: "mb-8", variants: fadeUp, custom: 2, initial: "hidden", animate: inView ? "visible" : "hidden", children: [_jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsx("span", { className: "text-[12px] font-bold tracking-widest uppercase text-neutral-500", children: "Size" }), _jsx("button", { className: "text-[12px] font-medium text-neutral-600 underline underline-offset-2 tracking-wide", children: "Size guide" })] }), _jsx(SizeSelector, {})] }), _jsxs(motion.div, { className: "flex flex-col gap-4", variants: linkItem, custom: 3, initial: "hidden", animate: inView ? "visible" : "hidden", children: [_jsxs("div", { className: "flex items-baseline gap-3", children: [_jsx("span", { className: "text-[32px] text-white font-black tracking-tight", children: "$89" }), _jsx("span", { className: "text-[18px] text-neutral-600 line-through font-light", children: "$120" }), _jsx("span", { className: "text-[13px] text-green-500 font-bold ml-1", children: "Save $31" })] }), _jsxs("div", { className: "flex gap-3", children: [_jsxs(Button, { className: "flex-1 bg-white text-black relative border-0 outline-none overflow-hidden rounded-full pl-6 pr-3 py-3.5 flex items-center justify-between text-[15px] font-bold group cursor-pointer shadow-lg", children: [_jsx("span", { className: "absolute inset-0 bg-neutral-800 scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 rounded-full" }), _jsx("span", { className: "relative z-10 group-hover:text-white transition-colors duration-300", children: "Add to cart" }), _jsx("div", { className: "relative z-10 rounded-full p-2 bg-black flex items-center justify-center", children: _jsx(HugeiconsIcon, { icon: ArrowRight01Icon, className: "text-white w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300", strokeWidth: 2.5 }) })] }), _jsx(motion.button, { className: "w-14 h-14 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-500 hover:border-white hover:text-white transition-colors duration-300 flex-shrink-0", whileHover: { scale: 1.08 }, whileTap: { scale: 0.93 }, "aria-label": "Add to wishlist", children: _jsx("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: _jsx("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }) }) })] })] }), _jsx(motion.div, { className: "mt-8 pt-6 border-t border-neutral-900 grid grid-cols-3 gap-4", variants: fadeUp, custom: 4, initial: "hidden", animate: inView ? "visible" : "hidden", children: [
                                    { icon: "🚚", label: "Free delivery", sub: "On orders +$60" },
                                    { icon: "↩", label: "30-day return", sub: "No questions" },
                                    { icon: "🔒", label: "Secure pay", sub: "SSL encrypted" },
                                ].map((item) => (_jsxs("div", { className: "flex flex-col gap-1 text-center", children: [_jsx("span", { className: "text-[18px]", children: item.icon }), _jsx("span", { className: "text-[11px] font-bold text-white tracking-wide", children: item.label }), _jsx("span", { className: "text-[10px] text-neutral-600", children: item.sub })] }, item.label))) })] })] })] }));
};
const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
const SizeSelector = () => {
    const [selected, setSelected] = useState("M");
    return (_jsx("div", { className: "flex gap-2 flex-wrap", children: SIZES.map((size) => (_jsx(motion.button, { onClick: () => setSelected(size), whileHover: { scale: 1.06 }, whileTap: { scale: 0.94 }, className: `w-11 h-11 rounded-xl text-[13px] font-bold tracking-wide border transition-all duration-200 focus:outline-none ${selected === size
                ? "bg-white text-black border-white"
                : "bg-transparent text-neutral-500 border-neutral-800 hover:border-neutral-600 hover:text-white"}`, children: size }, size))) }));
};
export default memo(ShowProduct);
