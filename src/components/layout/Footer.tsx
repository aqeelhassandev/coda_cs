import { memo } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  InstagramIcon,
  TiktokIcon,
  TwitterIcon,
  Facebook02Icon,
  Linkedin02Icon,
} from "@hugeicons/core-free-icons";

const Footer = () => {
  return (
    <div className="w-full">
      {/* Newsletter Section */}
      <div className="w-full bg-[#EAEAEA] py-16 md:py-20 border-t border-neutral-200">
        <div className="mx-auto max-w-[1200px] px-6 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-20">
          {/* Left Column: Heading and Description */}
          <div className="flex flex-col gap-4 text-center lg:text-left max-w-lg">
            <h2 className="text-[42px] md:text-[52px] font-black leading-[1.05] uppercase tracking-tight text-text-base">
              SUBSCRIBE TO OUR NEWSLETTER NOW!
            </h2>
            <p className="text-[16px] text-text-secondary leading-relaxed font-normal">
              Get top Framer components, exclusive freebies, and expert tips
              delivered to your inbox weekly.
            </p>
          </div>

          {/* Right Column: Input and Button */}
          <div className="flex flex-col gap-2 w-full max-w-md">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="jane@email.com"
                className="w-full bg-white px-6 py-4 rounded-full text-sm text-text-base focus:outline-none placeholder-neutral-400 border border-transparent focus:border-neutral-300 transition-colors"
              />
              <button className="w-full sm:w-auto bg-black text-white hover:bg-neutral-800 px-8 py-4 rounded-full text-sm font-bold transition-all cursor-pointer duration-200 shadow-sm hover:shadow-md">
                Subscribe
              </button>
            </div>
            <span className="text-[13px] text-text-secondary pl-4 text-center sm:text-left">
              Weekly newsletter. Unsubscribe anytime.
            </span>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-[#0B0B0B] text-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Column 1: Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <h3 className="text-[32px] font-black tracking-wider uppercase">
              RAWBLOX
            </h3>
            <span className="text-[13px] font-bold text-neutral-400 tracking-widest uppercase">
              STREETWEAR FOR THE BOLD, BUILT FOR THE MOVEMENT.
            </span>
            <p className="text-[15px] text-neutral-500 font-light leading-relaxed max-w-sm">
              Inspired by the raw energy of the streets, we create statement
              pieces that blend style, attitude, and individuality.
            </p>
            <span className="text-[14px] text-neutral-600 mt-6 block">
              © 2025 Copyright
            </span>
          </div>

          {/* Column 2: MENU */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <h4 className="text-[16px] font-black text-white tracking-widest uppercase border-b border-neutral-900 pb-2">
              MENU
            </h4>
            <ul className="flex flex-col gap-3">
              {["Home", "Shop", "About", "Contact", "Story"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-white text-[15px] font-light transition-colors duration-200 block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: SHOP */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <h4 className="text-[16px] font-black text-white tracking-widest uppercase border-b border-neutral-900 pb-2">
              SHOP
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                "Collections",
                "New arrival",
                "Men collections",
                "Women collections",
                "Accessories",
                "Category",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-white text-[15px] font-light transition-colors duration-200 block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: SOCIAL */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h4 className="text-[16px] font-black text-white tracking-widest uppercase border-b border-neutral-900 pb-2">
              SOCIAL
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                { name: "LinkedIn", icon: Linkedin02Icon, url: "#" },
                { name: "Instagram", icon: InstagramIcon, url: "#" },
                { name: "Twitter", icon: TwitterIcon, url: "#" },
                { name: "Facebook", icon: Facebook02Icon, url: "#" },
                { name: "Tiktok", icon: TiktokIcon, url: "#" },
              ].map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    className="flex items-center gap-3 text-neutral-400 hover:text-white text-[15px] font-light transition-colors duration-200"
                  >
                    <HugeiconsIcon
                      icon={social.icon}
                      className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors"
                      strokeWidth={1.5}
                    />
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default memo(Footer);
