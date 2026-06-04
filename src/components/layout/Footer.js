"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { InstagramIcon, TiktokIcon, TwitterIcon, Facebook02Icon, Linkedin02Icon, } from "@hugeicons/core-free-icons";
// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
};
const fadeLeft = {
    hidden: { opacity: 0, x: -36 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
};
const linkItem = {
    hidden: { opacity: 0, x: -12 },
    visible: (i = 0) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" },
    }),
};
const wordReveal = {
    hidden: { y: "110%", opacity: 0 },
    visible: (i = 0) => ({
        y: "0%",
        opacity: 1,
        transition: { duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
    }),
};
// ─── SVG Draw-on path animation ──────────────────────────────────────────────
const drawPath = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i = 0) => ({
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { duration: 2.4, delay: i * 0.18, ease: "easeInOut" },
            opacity: { duration: 0.3, delay: i * 0.18 },
        },
    }),
};
const drawCircle = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i = 0) => ({
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { duration: 1.8, delay: 1.2 + i * 0.3, ease: "easeOut" },
            opacity: { duration: 0.4, delay: 1.2 + i * 0.3 },
        },
    }),
};
const drawLine = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i = 0) => ({
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { duration: 2, delay: 0.6 + i * 0.4, ease: "easeOut" },
            opacity: { duration: 0.3, delay: 0.6 + i * 0.4 },
        },
    }),
};
// ─── Sub-components ───────────────────────────────────────────────────────────
const GraffitiArt = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-10% 0px" });
    return (_jsxs(motion.svg, { ref: ref, className: "absolute bottom-0 left-0 w-full pointer-events-none", style: { height: 340, opacity: 0.07 }, viewBox: "0 0 1440 340", preserveAspectRatio: "xMidYMax meet", xmlns: "http://www.w3.org/2000/svg", animate: inView ? { opacity: [0.07, 0.1, 0.07] } : {}, transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }, children: [_jsx(motion.path, { d: "M80,280 L80,80 L160,80 Q220,80 220,140 Q220,200 160,200 L80,200 L200,280", fill: "none", stroke: "white", strokeWidth: 12, strokeLinecap: "round", strokeLinejoin: "round", variants: drawPath, custom: 0, initial: "hidden", animate: inView ? "visible" : "hidden" }), _jsx(motion.path, { d: "M270,280 L330,80 L390,280 M285,200 L375,200", fill: "none", stroke: "white", strokeWidth: 10, strokeLinecap: "round", strokeLinejoin: "round", variants: drawPath, custom: 1, initial: "hidden", animate: inView ? "visible" : "hidden" }), _jsx(motion.path, { d: "M420,80 L460,240 L500,120 L540,240 L580,80", fill: "none", stroke: "white", strokeWidth: 10, strokeLinecap: "round", strokeLinejoin: "round", variants: drawPath, custom: 2, initial: "hidden", animate: inView ? "visible" : "hidden" }), _jsx(motion.path, { d: "M640,80 L640,280 L720,280 Q770,280 770,230 Q770,190 720,180 L640,180 L720,180 Q780,180 780,130 Q780,80 720,80 Z", fill: "none", stroke: "white", strokeWidth: 10, strokeLinecap: "round", strokeLinejoin: "round", variants: drawPath, custom: 3, initial: "hidden", animate: inView ? "visible" : "hidden" }), _jsx(motion.path, { d: "M820,80 L820,280 L900,280", fill: "none", stroke: "white", strokeWidth: 10, strokeLinecap: "round", strokeLinejoin: "round", variants: drawPath, custom: 4, initial: "hidden", animate: inView ? "visible" : "hidden" }), _jsx(motion.path, { d: "M960,180 Q960,80 1040,80 Q1120,80 1120,180 Q1120,280 1040,280 Q960,280 960,180 Z", fill: "none", stroke: "white", strokeWidth: 10, strokeLinecap: "round", strokeLinejoin: "round", variants: drawPath, custom: 5, initial: "hidden", animate: inView ? "visible" : "hidden" }), _jsx(motion.path, { d: "M1160,80 L1300,280 M1300,80 L1160,280", fill: "none", stroke: "white", strokeWidth: 10, strokeLinecap: "round", strokeLinejoin: "round", variants: drawPath, custom: 6, initial: "hidden", animate: inView ? "visible" : "hidden" }), [
                { cx: 1380, cy: 80, r: 28, dash: "5,8", sw: 3 },
                { cx: 1400, cy: 80, r: 50, dash: "3,12", sw: 1.5 },
                { cx: 40, cy: 310, r: 18, dash: "4,6", sw: 3 },
            ].map((c, i) => (_jsx(motion.circle, { cx: c.cx, cy: c.cy, r: c.r, fill: "none", stroke: "white", strokeWidth: c.sw, strokeDasharray: c.dash, variants: drawCircle, custom: i, initial: "hidden", animate: inView ? "visible" : "hidden" }, i))), [
                { y: 330, dash: undefined, sw: 1.5 },
                { y: 310, dash: "8,14", sw: 0.6 },
            ].map((l, i) => (_jsx(motion.line, { x1: 0, y1: l.y, x2: 1440, y2: l.y, stroke: "white", strokeWidth: l.sw, strokeDasharray: l.dash, variants: drawLine, custom: i, initial: "hidden", animate: inView ? "visible" : "hidden" }, i)))] }));
};
const Marquee = () => {
    const items = ["RAWBLOX", "STREETWEAR", "FOR THE BOLD", "BUILT FOR THE MOVEMENT", "RAW ENERGY"];
    const doubled = [...items, ...items];
    return (_jsx("div", { className: "relative overflow-hidden border-t border-b border-neutral-900 py-3 my-14 -mx-6", children: _jsx(motion.div, { className: "flex w-max", animate: { x: ["0%", "-50%"] }, transition: { duration: 18, ease: "linear", repeat: Infinity }, children: doubled.map((text, i) => (_jsxs("span", { className: "flex items-center gap-6 px-10 text-neutral-800 tracking-widest uppercase whitespace-nowrap", style: { fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, letterSpacing: 6 }, children: [text, _jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-neutral-800 inline-block" })] }, i))) }) }));
};
const AnimatedHeading = ({ text }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-5% 0px" });
    const words = text.split(" ");
    return (_jsx("h2", { ref: ref, className: "text-[42px] md:text-[52px] font-black leading-[1.05] uppercase tracking-tight text-[#111]", children: words.map((word, i) => (_jsx("span", { className: "inline-block overflow-hidden mr-2", children: _jsx(motion.span, { className: "inline-block", variants: wordReveal, custom: i, initial: "hidden", animate: inView ? "visible" : "hidden", children: word }) }, i))) }));
};
// ─── Main Footer ──────────────────────────────────────────────────────────────
const Footer = () => {
    const footerRef = useRef(null);
    const footerInView = useInView(footerRef, { once: true, margin: "-5% 0px" });
    const menuLinks = ["Home", "Shop", "About", "Contact", "Story"];
    const shopLinks = ["Collections", "New arrival", "Men collections", "Women collections", "Accessories", "Category"];
    const socialLinks = [
        { name: "LinkedIn", icon: Linkedin02Icon },
        { name: "Instagram", icon: InstagramIcon },
        { name: "Twitter", icon: TwitterIcon },
        { name: "Facebook", icon: Facebook02Icon },
        { name: "Tiktok", icon: TiktokIcon },
    ];
    return (_jsxs("div", { className: "w-full", children: [_jsx("div", { className: "w-full bg-[#EAEAEA] py-16 md:py-20 border-t border-neutral-200 overflow-hidden", children: _jsxs("div", { className: "mx-auto max-w-[1200px] px-6 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-20", children: [_jsxs(motion.div, { className: "flex flex-col gap-4 text-center lg:text-left max-w-lg", variants: fadeLeft, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-5% 0px" }, children: [_jsx(AnimatedHeading, { text: "SUBSCRIBE TO OUR NEWSLETTER NOW!" }), _jsx("p", { className: "text-[16px] text-text-secondary leading-relaxed font-normal", children: "Get top Framer components, exclusive freebies, and expert tips delivered to your inbox weekly." })] }), _jsxs(motion.div, { className: "flex flex-col gap-2 w-full max-w-md", variants: fadeUp, initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-5% 0px" }, children: [_jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-3", children: [_jsx("input", { type: "email", placeholder: "jane@email.com", className: "w-full bg-white px-6 py-4 rounded-full text-sm text-text-base focus:outline-none placeholder-neutral-400 border border-transparent focus:border-neutral-300 transition-colors" }), _jsx(motion.button, { className: "w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full text-sm font-bold cursor-pointer shadow-sm", whileHover: { backgroundColor: "#333", y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }, whileTap: { scale: 0.97 }, transition: { duration: 0.2 }, children: "Subscribe" })] }), _jsx("span", { className: "text-[13px] text-text-secondary pl-4 text-center sm:text-left", children: "Weekly newsletter. Unsubscribe anytime." })] })] }) }), _jsxs("footer", { ref: footerRef, className: "w-full bg-[#0B0B0B] text-white py-16 md:py-20 relative overflow-hidden", children: [_jsx(GraffitiArt, {}), _jsx(Marquee, {}), _jsxs("div", { className: "relative z-10 mx-auto max-w-[1200px] px-6 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16", children: [_jsxs(motion.div, { className: "md:col-span-5 flex flex-col gap-5", variants: fadeLeft, initial: "hidden", animate: footerInView ? "visible" : "hidden", children: [_jsx("h3", { className: "text-[32px] font-black tracking-wider uppercase", children: "RAWBLOX" }), _jsx("span", { className: "text-[13px] font-bold text-neutral-400 tracking-widest uppercase", children: "STREETWEAR FOR THE BOLD, BUILT FOR THE MOVEMENT." }), _jsx("p", { className: "text-[15px] text-neutral-500 font-light leading-relaxed max-w-sm", children: "Inspired by the raw energy of the streets, we create statement pieces that blend style, attitude, and individuality." }), _jsx("span", { className: "text-[14px] text-neutral-600 mt-6 block", children: "\u00A9 2025 Copyright" })] }), _jsxs("div", { className: "md:col-span-2 flex flex-col gap-5", children: [_jsx(motion.h4, { className: "text-[16px] font-black text-white tracking-widest uppercase border-b border-neutral-900 pb-2", variants: fadeUp, custom: 0, initial: "hidden", animate: footerInView ? "visible" : "hidden", children: "MENU" }), _jsx("ul", { className: "flex flex-col gap-3", children: menuLinks.map((link, i) => (_jsx(motion.li, { variants: linkItem, custom: i, initial: "hidden", animate: footerInView ? "visible" : "hidden", children: _jsx(motion.a, { href: "#", className: "text-neutral-400 text-[15px] font-light block", whileHover: { color: "#ffffff", x: 4 }, transition: { duration: 0.2 }, children: link }) }, link))) })] }), _jsxs("div", { className: "md:col-span-2 flex flex-col gap-5", children: [_jsx(motion.h4, { className: "text-[16px] font-black text-white tracking-widest uppercase border-b border-neutral-900 pb-2", variants: fadeUp, custom: 1, initial: "hidden", animate: footerInView ? "visible" : "hidden", children: "SHOP" }), _jsx("ul", { className: "flex flex-col gap-3", children: shopLinks.map((link, i) => (_jsx(motion.li, { variants: linkItem, custom: i, initial: "hidden", animate: footerInView ? "visible" : "hidden", children: _jsx(motion.a, { href: "#", className: "text-neutral-400 text-[15px] font-light block", whileHover: { color: "#ffffff", x: 4 }, transition: { duration: 0.2 }, children: link }) }, link))) })] }), _jsxs("div", { className: "md:col-span-3 flex flex-col gap-5", children: [_jsx(motion.h4, { className: "text-[16px] font-black text-white tracking-widest uppercase border-b border-neutral-900 pb-2", variants: fadeUp, custom: 2, initial: "hidden", animate: footerInView ? "visible" : "hidden", children: "SOCIAL" }), _jsx("ul", { className: "flex flex-col gap-4", children: socialLinks.map(({ name, icon }, i) => (_jsx(motion.li, { variants: linkItem, custom: i, initial: "hidden", animate: footerInView ? "visible" : "hidden", children: _jsxs(motion.a, { href: "#", className: "flex items-center gap-3 text-neutral-400 text-[15px] font-light", whileHover: { color: "#ffffff" }, transition: { duration: 0.2 }, children: [_jsx(HugeiconsIcon, { icon: icon, className: "w-5 h-5 text-neutral-400", strokeWidth: 1.5 }), _jsx("span", { children: name })] }) }, name))) })] })] }), _jsxs(motion.div, { className: "relative z-10 mx-auto max-w-[1200px] px-6 mt-16 border-t border-neutral-900 pt-7 flex flex-wrap justify-between items-center gap-3", variants: fadeUp, custom: 4, initial: "hidden", animate: footerInView ? "visible" : "hidden", children: [_jsx("span", { className: "text-[12px] text-neutral-700 tracking-widest uppercase", children: "All rights reserved" }), _jsx("span", { className: "text-[12px] text-neutral-700 tracking-widest uppercase", children: "Privacy \u00B7 Terms \u00B7 Cookies" })] })] })] }));
};
export default memo(Footer);
