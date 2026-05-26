import { memo } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  DeliveryTruck01Icon,
  CreditCardIcon,
  InboxIcon,
  HelpCircleIcon,
} from "@hugeicons/core-free-icons";
import { motion } from "framer-motion";

const WhyShop = () => {
  const items = [
    {
      icon: DeliveryTruck01Icon,
      title: "FREE DELIVERY",
      description:
        "Get your streetwear fast and free, with no extra shipping costs on all orders.",
    },
    {
      icon: CreditCardIcon,
      title: "100% SECURE PAYMENT",
      description:
        "Shop with confidence using encrypted, safe, and trusted payment methods.",
    },
    {
      icon: InboxIcon,
      title: "30 DAYS RETURN",
      description:
        "Not the perfect fit? No worries. Return or exchange hassle-free within 30 days.",
    },
    {
      icon: HelpCircleIcon,
      title: "24/7 SUPPORT",
      description:
        "Got questions? Our team is here for you anytime, anywhere.",
    },
  ];

  return (
    <div className="w-full border-t border-neutral-100 py-20 mt-12 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading and Description */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <h2 className="text-[52px] md:text-[60px] font-black leading-[1.05] uppercase tracking-tight text-text-base relative">
            <span className="relative inline-block">
              WHY SHOP
              <span className="absolute bottom-2 left-0 right-0 h-4 bg-sky-100/90 -z-10 rounded-sm" />
            </span>{" "}
            WITH US?
          </h2>
          <p className="text-[18px] text-text-secondary leading-relaxed font-normal max-w-md">
            We've got you covered with hassle-free shopping, top-tier service,
            and guarantees that keep you confident in every purchase.
          </p>
        </div>

        {/* Right Column: Features Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Circular Icon Container */}
              <motion.div
                className="w-14 h-14 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-800 shadow-xs transition-colors duration-300 group-hover:border-neutral-400"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <HugeiconsIcon
                  icon={item.icon}
                  className="w-6 h-6 text-neutral-700"
                  strokeWidth={2}
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-[22px] md:text-[24px] font-black text-text-base uppercase tracking-wide mt-5 mb-2 transition-colors duration-300 group-hover:text-black">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] text-text-secondary leading-relaxed font-normal max-w-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(WhyShop);
