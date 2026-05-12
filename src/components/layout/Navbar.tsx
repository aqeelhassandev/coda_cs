import * as React from "react";
import { Link } from "react-router-dom";

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
    <div className="flex items-center  ">
      <NavigationMenu className="mx-auto max-w-[1200px] p-[20px_40px] ">
        <NavigationMenuList className="justify-start text-[25px] font-bold text-[#121212]">
          CODACS
        </NavigationMenuList>

        <NavigationMenuList className="justify-end ">
          {Links.map((link) => (
            <NavigationMenuItem key={link.title}>
              {link.items && link.items.length > 0 ? (
                <>
                  <NavigationMenuTrigger className="text-[16px]">{link.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
                  className={navigationMenuTriggerStyle()}
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
