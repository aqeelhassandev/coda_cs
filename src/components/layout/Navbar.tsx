import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

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

export function Navbar() {
  return (
    <div className="flex items-center w-full">
      <NavigationMenu className="mx-auto w-full max-w-[1200px] p-4 md:p-[20px_40px] flex flex-col sm:flex-row items-center justify-between gap-4">
        <NavigationMenuList className="justify-center sm:justify-start text-[25px] font-bold text-text-base">
          CODACS
        </NavigationMenuList>

        <NavigationMenuList className="justify-center sm:justify-end flex-wrap gap-1 sm:gap-2">
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
