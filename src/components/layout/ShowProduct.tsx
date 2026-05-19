import { Button } from "@base-ui/react/button";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const productImages = [
  "/features/1.avif",
  "/features/2.avif",
  "/features/3.avif",
  "/features/4.avif",
];

export const ShowProduct = () => {
  const [activeImage, setActiveImage] = useState(productImages[0]);

  return (
    <div className="bg-black w-full">
      <div className="mx-auto w-[1200px] py-[100px] grid grid-cols-2 gap-20 items-center">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-white text-[80px] lg:text-[88px] font-black uppercase tracking-tight leading-[0.95] mb-6">
            Nightfall
            <br />
            Oversized
            <br />
            Hoodie
          </h2>
          <p className="text-neutral-400 text-[18px] font-medium leading-[1.6] max-w-[90%] mb-8">
            A heavyweight, ultra-soft hoodie designed for comfort and style.
            Featuring a relaxed fit, subtle embroidered detailing, and a faded
            wash for that perfect worn-in look. Street-ready and built to stand
            out.
          </p>
          <div className="flex items-baseline gap-3 mb-8">
            <span className="text-[28px] text-white font-bold">$89</span>
            <span className="text-[18px] text-neutral-500 line-through font-light">
              $120
            </span>
          </div>

          <Button className="bg-white text-black relative border-0 outline-none overflow-hidden rounded-full pl-6 pr-2 py-2 w-fit flex items-center gap-4 text-base font-semibold group cursor-pointer shadow-lg">
            {/* Animated Background */}
            <span className="absolute inset-0 bg-text-secondary scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 rounded-full" />

            {/* Content */}
            <span className="text-black group-hover:text-white relative z-10 transition-colors duration-300">
              Shop now
            </span>

            {/* Arrow */}
            <div className="relative z-10 rounded-full p-2.5 transition-all duration-300 bg-text-secondary flex items-center justify-center">
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                className="text-white  w-4 h-4 transition-all duration-300 group-hover:translate-x-0.5"
                strokeWidth={2.5}
              />
            </div>
          </Button>
        </div>

        {/* Right Column: Gallery */}
        <div className="flex flex-col">
          {/* Main Image */}
          <div className="relative aspect-[4/5] h-160 w-full overflow-hidden rounded-[32px] bg-neutral-950 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={activeImage}
                alt="Nightfall Oversized Hoodie"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-fill"
              />
            </AnimatePresence>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            {productImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`aspect-[4/5] overflow-hidden rounded-[20px] cursor-pointer transition-all duration-300 bg-neutral-950 border-[3px] focus:outline-none ${
                  activeImage === img
                    ? "border-white scale-[1.02] shadow-md"
                    : "border-transparent opacity-60 hover:opacity-100 hover:scale-[1.01]"
                }`}
                aria-label={`View product image ${idx + 1}`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover pointer-events-none"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ShowProduct);
