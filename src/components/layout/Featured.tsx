import { memo } from "react";
import { Carousel, CarouselContent, useCarousel } from "../ui/carousel";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { motion } from "framer-motion";

interface ProductCardProps {
  productName: string;
  productDesc: string;
  productImage: string;
}

const product: ProductCardProps[] = [
  {
    productName: "Summer Cap",
    productDesc:
      "Stay cool and protected with the SunShade Summer Cap, featuring breathable fabric and UV protection for sunny days.",
    productImage: "/features/1.avif",
  },
  {
    productName: "White Summer Tee",
    productDesc:
      "Lightweight and breathable, the BreezeFit White Summer Tee keeps you cool and fresh all summer long.",
    productImage: "/features/2.avif",
  },
  {
    productName: "Black Summer Tee",
    productDesc:
      "Stay stylish and comfortable in the CoolCore Black Summer Tee, crafted from breathable fabric perfect for warm days.",
    productImage: "/features/3.avif",
  },
  {
    productName: "Sleek iPhone Case",
    productDesc:
      "Durable and slim, the SleekGuard iPhone Case offers stylish protection against drops and scratches.",
    productImage: "/features/4.avif",
  },
  {
    productName: "Spring Jacket",
    productDesc:
      "Lightweight and versatile, the BreezeLite Spring Jacket combines comfort and style to keep you cozy on breezy days.",
    productImage: "/features/1.avif",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const ProductCard = memo((productData: ProductCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-[30px] cursor-pointer group  h-[720px] w-[450px] shrink-0  snap-center flex flex-col justify-end">
      <img
        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out z-0"
        loading="lazy"
        src={productData.productImage}
        alt={productData.productName}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>

      <div className="relative z-20 p-8 flex flex-col justify-between min-h-[180px] gap-3">
        <h3 className="text-[30px] text-white font-black uppercase tracking-wide leading-none drop-shadow-md">
          {productData.productName}
        </h3>
        <p className="text-[16px] text-gray-200/90 font-medium leading-[160%] max-w-[95%] drop-shadow-sm">
          {productData.productDesc}
        </p>
      </div>
    </div>
  );
});

ProductCard.displayName = "ProductCard";

const CarouselControls = () => {
  const { scrollPrev, scrollNext } = useCarousel();

  return (
    <div className="mx-auto w-full max-w-[1200px] flex gap-3 mt-6 px-4 sm:px-6 pl-2">
      <button
        onClick={scrollPrev}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white hover:bg-black/85 active:scale-95 transition-all duration-200 cursor-pointer shadow-md"
        aria-label="Previous slide"
      >
        <HugeiconsIcon
          icon={ArrowLeft01Icon}
          strokeWidth={2.5}
          className="w-6 h-6"
        />
      </button>
      <button
        onClick={scrollNext}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white hover:bg-black/85 active:scale-95 transition-all duration-200 cursor-pointer shadow-md"
        aria-label="Next slide"
      >
        <HugeiconsIcon
          icon={ArrowRight01Icon}
          strokeWidth={2.5}
          className="w-6 h-6"
        />
      </button>
    </div>
  );
};

const Featured = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
      }}
      className="w-full h-full mt-[106px] mb-[36px]"
    >
      <motion.div
        variants={fadeInUp}
        className="mx-auto w-full max-w-[1200px] flex gap-[20px] flex-col px-4 sm:px-6"
      >
        <h3 className="text-[28px] sm:text-[40px] font-bold text-text-base uppercase w-full md:w-[70%]">
          Featured Drops: Stand Out, Stay Ahead
        </h3>
        <p className="text-[18px] sm:text-[21px] font-normal leading-[150%] text-text-secondary w-full md:w-2/3">
          Exclusive designs, premium materials, and street-ready vibes—these
          must-have pieces are setting the trend. Get yours before they’re gone!
        </p>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <Carousel
          opts={{
            loop: true,
          }}
          className=" mt-7 pl-2"
        >
          <CarouselContent className="gap-5 p-4">
            {product.map((productData) => (
              <ProductCard key={productData.productName} {...productData} />
            ))}
          </CarouselContent>
          <CarouselControls />
        </Carousel>
      </motion.div>
    </motion.div>
  );
};

export default memo(Featured);
