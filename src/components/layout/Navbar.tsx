import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Menu01Icon,
  Cancel01Icon,
  ArrowDown01Icon,
  ArrowRight01Icon,
  InstagramIcon,
  TiktokIcon,
  TwitterIcon,
  Facebook02Icon,
} from "@hugeicons/core-free-icons";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface Items {
  title: string;
  to: string;
  description: string;
}

interface Links {
  title: string;
  to: string;
  description: string;
  items?: Items[];
}

const Links: Links[] = [
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full relative z-50">
      <div className="mx-auto w-full max-w-[1200px] p-4 md:p-[20px_40px] flex items-center justify-between gap-4">
        {/* Brand/Logo */}
        <Link
          to="/"
          className="text-[25px] font-bold text-text-base select-none"
        >
          RAWBLOX
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-1 sm:gap-2">
              {Links.map((link) => (
                <NavigationMenuItem key={link.title}>
                  {link.items && link.items.length > 0 ? (
                    <>
                      <NavigationMenuTrigger className="text-xs sm:text-sm md:text-base px-2 py-1.5 md:px-4.5">
                        {link.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[300px] sm:w-[400px] gap-2 p-3 sm:gap-3 sm:p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {link.items.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.to}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} !text-xs sm:!text-sm md:!text-base !px-2 md:!px-4.5`}
                      render={<Link to={link.to}>{link.title}</Link>}
                    />
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden flex items-center justify-center p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Open Menu"
        >
          <HugeiconsIcon icon={Menu01Icon} className="w-6 h-6 text-text-base" />
        </button>
      </div>

      {/* Full Screen Premium Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 w-full h-screen bg-[#090909] text-white z-[9999] flex flex-col md:hidden overflow-y-auto"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-900">
              <span className="text-[25px] font-black tracking-wider text-white">
                RAWBLOX
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-neutral-900 transition-colors"
                aria-label="Close Menu"
              >
                <HugeiconsIcon
                  icon={Cancel01Icon}
                  className="w-6 h-6 text-white"
                />
              </button>
            </div>

            {/* Mobile Menu Content Grid */}
            <div className="flex-1 flex flex-col justify-between p-6 gap-8">
              {/* Upper Section: Links & Tagline */}
              <div className="flex flex-col gap-8">
                {/* Brand Tagline */}
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                    Design Identity / Streetwear
                  </span>
                  <p className="text-xs text-neutral-400 font-light">
                    STREETWEAR FOR THE BOLD, BUILT FOR THE MOVEMENT.
                  </p>
                </div>

                {/* Staggered Navigation Links */}
                <nav className="flex flex-col gap-4">
                  {Links.map((link, idx) => {
                    const hasSubmenu = link.items && link.items.length > 0;
                    const isExpanded = expandedIndex === idx;
                    const indexStr = String(idx + 1).padStart(2, "0");

                    return (
                      <motion.div
                        key={link.title}
                        variants={itemVariants}
                        className="border-b border-neutral-900 pb-3 last:pb-0 last:border-b-0"
                      >
                        {hasSubmenu ? (
                          <div className="flex flex-col">
                            <button
                              onClick={() => toggleSubmenu(idx)}
                              className="flex items-center justify-between w-full text-left py-2 font-semibold text-lg text-white hover:text-neutral-300 transition-colors group"
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-400">
                                  {indexStr}
                                </span>
                                <span className="tracking-wide">
                                  {link.title}
                                </span>
                              </div>
                              <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <HugeiconsIcon
                                  icon={ArrowDown01Icon}
                                  className="w-5 h-5 text-neutral-500"
                                />
                              </motion.div>
                            </button>
                            <AnimatePresence initial={false}>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{
                                    duration: 0.25,
                                    ease: "easeInOut",
                                  }}
                                  className="overflow-hidden pl-7 flex flex-col gap-3 mt-2 border-l border-neutral-900"
                                >
                                  {link.items?.map((item) => (
                                    <Link
                                      key={item.title}
                                      to={item.to}
                                      onClick={() => setIsOpen(false)}
                                      className="py-1 text-neutral-400 hover:text-white transition-colors text-sm font-medium flex items-center justify-between group/sub"
                                    >
                                      <span>{item.title}</span>
                                      <HugeiconsIcon
                                        icon={ArrowRight01Icon}
                                        className="w-4 h-4 text-neutral-600 opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all"
                                      />
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            to={link.to}
                            onClick={() => setIsOpen(false)}
                            className="py-2 font-semibold text-lg text-white hover:text-neutral-300 transition-colors flex items-center gap-3 group"
                          >
                            <span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-400">
                              {indexStr}
                            </span>
                            <span className="tracking-wide">{link.title}</span>
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Lower Section: Promo Card & Social Footer */}
              <div className="flex flex-col gap-6">
                {/* Visual Highlight / Promo Card */}
                <motion.div
                  variants={itemVariants}
                  className="bg-neutral-900 p-4 rounded-2xl border border-neutral-800 flex flex-col gap-3 relative overflow-hidden group"
                >
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                  <span className="inline-block bg-white text-black text-[9px] font-black tracking-widest px-2 py-0.5 rounded-full uppercase w-max">
                    New Arrivals
                  </span>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-sm text-white">
                      Drop 04: The Void Collection
                    </h4>
                    <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                      Discover our latest oversized fits, raw graphics, and
                      techwear accessories.
                    </p>
                  </div>
                  <Link
                    to="/docs/primitives/alert-dialog"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-1 text-xs font-bold text-white hover:text-neutral-300 transition-colors w-max mt-1"
                  >
                    <span>Shop the Drop</span>
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      className="w-3 h-3"
                    />
                  </Link>
                </motion.div>

                {/* Social Links Footer */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center justify-between pt-4 border-t border-neutral-900"
                >
                  <div className="flex items-center gap-4">
                    {[
                      { icon: InstagramIcon, url: "#", name: "Instagram" },
                      { icon: TwitterIcon, url: "#", name: "Twitter" },
                      { icon: TiktokIcon, url: "#", name: "Tiktok" },
                      { icon: Facebook02Icon, url: "#", name: "Facebook" },
                    ].map((social, sIdx) => (
                      <a
                        key={sIdx}
                        href={social.url}
                        className="text-neutral-400 hover:text-white hover:scale-110 transition-all p-1"
                        aria-label={social.name}
                      >
                        <HugeiconsIcon
                          icon={social.icon}
                          className="w-5 h-5"
                          strokeWidth={1.5}
                        />
                      </a>
                    ))}
                  </div>
                  <span className="text-[10px] text-neutral-500 font-mono">
                    © 2026 RAWBLOX
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link to={href}>
            <div className="flex flex-col gap-1 ">
              <div className="leading-none font-medium">{title}</div>
              <div className="line-clamp-2 text-muted-foreground">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  );
}
