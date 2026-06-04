import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon, ArrowDown01Icon, ArrowRight01Icon, InstagramIcon, TiktokIcon, TwitterIcon, Facebook02Icon, } from "@hugeicons/core-free-icons";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, } from "@/components/ui/navigation-menu";
const Links = [
    {
        title: "SHOP",
        to: "/docs/primitives/alert-dialog",
        description: "",
    },
    {
        title: "COLLECTIONS",
        to: "/docs/primitives/hover-card",
        description: "",
        items: [
            {
                title: "SHOP",
                to: "/docs/primitives/alert-dialog",
                description: "Re-usable components built with Tailwind CSS.",
            },
            {
                title: "COLLECTIONS",
                to: "/docs/primitives/hover-card",
                description: "Re-usable components built with Tailwind CSS.",
            },
            {
                title: "MAN",
                to: "/docs/primitives/progress",
                description: "Re-usable components built with Tailwind CSS.",
            },
            {
                title: "WOMEN",
                to: "/docs/primitives/scroll-area",
                description: "Re-usable components built with Tailwind CSS.",
            },
            {
                title: "OUR STORY",
                to: "/docs/primitives/tabs",
                description: "Re-usable components built with Tailwind CSS.",
            },
            {
                title: "CART",
                to: "/docs/primitives/tooltip",
                description: "Re-usable components built with Tailwind CSS.",
            },
        ],
    },
    {
        title: "MAN",
        to: "/docs/primitives/progress",
        description: "",
    },
    {
        title: "WOMEN",
        to: "/docs/primitives/scroll-area",
        description: "",
    },
    {
        title: "OUR STORY",
        to: "/docs/primitives/tabs",
        description: "",
    },
    {
        title: "CART",
        to: "/docs/primitives/tooltip",
        description: "",
    },
];
const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 220,
            staggerChildren: 0.05,
            delayChildren: 0.05,
        },
    },
    exit: {
        opacity: 0,
        x: "100%",
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 220,
            staggerChildren: 0.03,
            staggerDirection: -1,
        },
    },
};
const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 350, damping: 25 },
    },
    exit: {
        opacity: 0,
        x: 30,
        transition: { duration: 0.15 },
    },
};
export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const toggleSubmenu = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    return (_jsxs("div", { className: "w-full relative z-50", children: [_jsxs("div", { className: "mx-auto w-full max-w-[1200px] p-4 md:p-[20px_40px] flex items-center justify-between gap-4", children: [_jsx(Link, { to: "/", className: "text-[25px] font-bold text-text-base select-none", children: "RAWBLOX" }), _jsx("div", { className: "hidden md:flex items-center", children: _jsx(NavigationMenu, { children: _jsx(NavigationMenuList, { className: "flex items-center gap-1 sm:gap-2", children: Links.map((link) => (_jsx(NavigationMenuItem, { children: link.items && link.items.length > 0 ? (_jsxs(_Fragment, { children: [_jsx(NavigationMenuTrigger, { className: "text-xs sm:text-sm md:text-base px-2 py-1.5 md:px-4.5", children: link.title }), _jsx(NavigationMenuContent, { children: _jsx("ul", { className: "grid w-[300px] sm:w-[400px] gap-2 p-3 sm:gap-3 sm:p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ", children: link.items.map((item) => (_jsx(ListItem, { title: item.title, href: item.to, children: item.description }, item.title))) }) })] })) : (_jsx(NavigationMenuLink, { className: `${navigationMenuTriggerStyle()} !text-xs sm:!text-sm md:!text-base !px-2 md:!px-4.5`, render: _jsx(Link, { to: link.to, children: link.title }) })) }, link.title))) }) }) }), _jsx("button", { onClick: () => setIsOpen(true), className: "md:hidden flex items-center justify-center p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors", "aria-label": "Open Menu", children: _jsx(HugeiconsIcon, { icon: Menu01Icon, className: "w-6 h-6 text-text-base" }) })] }), _jsx(AnimatePresence, { children: isOpen && (_jsxs(motion.div, { variants: menuVariants, initial: "hidden", animate: "visible", exit: "exit", className: "fixed inset-0 w-full h-screen bg-[#090909] text-white z-[9999] flex flex-col md:hidden overflow-y-auto", children: [_jsxs("div", { className: "flex items-center justify-between p-6 border-b border-neutral-900", children: [_jsx("span", { className: "text-[25px] font-black tracking-wider text-white", children: "RAWBLOX" }), _jsx("button", { onClick: () => setIsOpen(false), className: "p-2 rounded-full hover:bg-neutral-900 transition-colors", "aria-label": "Close Menu", children: _jsx(HugeiconsIcon, { icon: Cancel01Icon, className: "w-6 h-6 text-white" }) })] }), _jsxs("div", { className: "flex-1 flex flex-col justify-between p-6 gap-8", children: [_jsxs("div", { className: "flex flex-col gap-8", children: [_jsxs("div", { className: "flex flex-col gap-1", children: [_jsx("span", { className: "text-[10px] font-bold text-neutral-500 uppercase tracking-widest", children: "Design Identity / Streetwear" }), _jsx("p", { className: "text-xs text-neutral-400 font-light", children: "STREETWEAR FOR THE BOLD, BUILT FOR THE MOVEMENT." })] }), _jsx("nav", { className: "flex flex-col gap-4", children: Links.map((link, idx) => {
                                                const hasSubmenu = link.items && link.items.length > 0;
                                                const isExpanded = expandedIndex === idx;
                                                const indexStr = String(idx + 1).padStart(2, "0");
                                                return (_jsx(motion.div, { variants: itemVariants, className: "border-b border-neutral-900 pb-3 last:pb-0 last:border-b-0", children: hasSubmenu ? (_jsxs("div", { className: "flex flex-col", children: [_jsxs("button", { onClick: () => toggleSubmenu(idx), className: "flex items-center justify-between w-full text-left py-2 font-semibold text-lg text-white hover:text-neutral-300 transition-colors group", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("span", { className: "text-xs font-mono text-neutral-600 group-hover:text-neutral-400", children: indexStr }), _jsx("span", { className: "tracking-wide", children: link.title })] }), _jsx(motion.div, { animate: { rotate: isExpanded ? 180 : 0 }, transition: { duration: 0.2 }, children: _jsx(HugeiconsIcon, { icon: ArrowDown01Icon, className: "w-5 h-5 text-neutral-500" }) })] }), _jsx(AnimatePresence, { initial: false, children: isExpanded && (_jsx(motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: {
                                                                        duration: 0.25,
                                                                        ease: "easeInOut",
                                                                    }, className: "overflow-hidden pl-7 flex flex-col gap-3 mt-2 border-l border-neutral-900", children: link.items?.map((item) => (_jsxs(Link, { to: item.to, onClick: () => setIsOpen(false), className: "py-1 text-neutral-400 hover:text-white transition-colors text-sm font-medium flex items-center justify-between group/sub", children: [_jsx("span", { children: item.title }), _jsx(HugeiconsIcon, { icon: ArrowRight01Icon, className: "w-4 h-4 text-neutral-600 opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all" })] }, item.title))) })) })] })) : (_jsxs(Link, { to: link.to, onClick: () => setIsOpen(false), className: "py-2 font-semibold text-lg text-white hover:text-neutral-300 transition-colors flex items-center gap-3 group", children: [_jsx("span", { className: "text-xs font-mono text-neutral-600 group-hover:text-neutral-400", children: indexStr }), _jsx("span", { className: "tracking-wide", children: link.title })] })) }, link.title));
                                            }) })] }), _jsxs("div", { className: "flex flex-col gap-6", children: [_jsxs(motion.div, { variants: itemVariants, className: "bg-neutral-900 p-4 rounded-2xl border border-neutral-800 flex flex-col gap-3 relative overflow-hidden group", children: [_jsx("div", { className: "absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" }), _jsx("span", { className: "inline-block bg-white text-black text-[9px] font-black tracking-widest px-2 py-0.5 rounded-full uppercase w-max", children: "New Arrivals" }), _jsxs("div", { className: "flex flex-col gap-1", children: [_jsx("h4", { className: "font-bold text-sm text-white", children: "Drop 04: The Void Collection" }), _jsx("p", { className: "text-[11px] text-neutral-400 font-light leading-relaxed", children: "Discover our latest oversized fits, raw graphics, and techwear accessories." })] }), _jsxs(Link, { to: "/docs/primitives/alert-dialog", onClick: () => setIsOpen(false), className: "flex items-center gap-1 text-xs font-bold text-white hover:text-neutral-300 transition-colors w-max mt-1", children: [_jsx("span", { children: "Shop the Drop" }), _jsx(HugeiconsIcon, { icon: ArrowRight01Icon, className: "w-3 h-3" })] })] }), _jsxs(motion.div, { variants: itemVariants, className: "flex items-center justify-between pt-4 border-t border-neutral-900", children: [_jsx("div", { className: "flex items-center gap-4", children: [
                                                        { icon: InstagramIcon, url: "#", name: "Instagram" },
                                                        { icon: TwitterIcon, url: "#", name: "Twitter" },
                                                        { icon: TiktokIcon, url: "#", name: "Tiktok" },
                                                        { icon: Facebook02Icon, url: "#", name: "Facebook" },
                                                    ].map((social, sIdx) => (_jsx("a", { href: social.url, className: "text-neutral-400 hover:text-white hover:scale-110 transition-all p-1", "aria-label": social.name, children: _jsx(HugeiconsIcon, { icon: social.icon, className: "w-5 h-5", strokeWidth: 1.5 }) }, sIdx))) }), _jsx("span", { className: "text-[10px] text-neutral-500 font-mono", children: "\u00A9 2026 RAWBLOX" })] })] })] })] })) })] }));
}
function ListItem({ title, children, href, ...props }) {
    return (_jsx("li", { ...props, children: _jsx(NavigationMenuLink, { render: _jsx(Link, { to: href, children: _jsxs("div", { className: "flex flex-col gap-1 ", children: [_jsx("div", { className: "leading-none font-medium", children: title }), _jsx("div", { className: "line-clamp-2 text-muted-foreground", children: children })] }) }) }) }));
}
