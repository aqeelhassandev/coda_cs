import { Button } from "@base-ui/react/button";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { memo, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const OurStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Apply smooth spring physics to scroll progress
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="flex flex-col lg:flex-row items-start lg:items-end gap-8 lg:gap-[100px] w-full h-full mt-24 mb-24 md:mt-[156px] md:mb-[156px]"
    >
      <motion.div
        variants={fadeInUp}
        className="flex flex-col gap-[20px] w-full lg:w-1/2"
      >
        <h3 className="text-[20px] sm:text-[26px] text-text-base uppercase">
          Streetwear with a Story
        </h3>
        <h1 className="text-[44px] sm:text-[72px] md:text-[92px] font-bold text-text-base leading-[1.05] uppercase">
          Wear the Movement, Break the Mold.
        </h1>

        {/* Dynamic Scroll-Drawing SVG Underline */}
        <div className="w-full max-w-[520px] mt-2 sm:mt-4">
          <svg
            viewBox="0 0 300 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full text-black dark:text-white"
          >
            <motion.path
              d="M 5,10 C 70,2 220,18 295,8"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ pathLength }}
            />
          </svg>
        </div>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        className="flex flex-col gap-[20px] w-full lg:w-1/2"
      >
        <p className="text-[18px] font-normal leading-[150%] text-text-secondary ">
          Born from the pulse of the streets, our brand is a tribute to the
          rebels, the dreamers, and the rule-breakers who shape the culture.
          Inspired by the raw energy of city life—graffiti-covered alleys,
          underground music scenes, and late-night skate sessions—we craft
          streetwear that speaks to individuality and self-expression.
        </p>
        <p className="text-[18px] font-normal leading-[150%] text-text-secondary ">
          Every stitch, every design, and every drop is a reflection of the
          movement, blending bold graphics, oversized silhouettes, and urban
          edge. More than just clothing, we’re a statement—wear your story,
          break the mold, and define your own path.
        </p>
        <Button
          className={` bg-black text-white relative border-0 outline-none overflow-hidden  rounded-full px-5 py-2 mt-3 w-fit flex items-center gap-3 text-base font-medium group cursor-pointer`}
        >
          {/* Animated Background */}
          <span
            className={` bg-white absolute inset-0  scale-x-0 origin-left transition-transform duration-700 ease-out group-hover:scale-x-100 rounded-full`}
          />

          {/* Content */}
          <span
            className={` text-white group-hover:text-black  relative z-10 transition-colors duration-500 `}
          >
            Get it now
          </span>

          {/* Arrow */}
          <div
            className={` bg-white relative z-10  rounded-full p-2 transition-all duration-500   `}
          >
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              className={`text-black group-hover:text-black  w-4 h-4 transition-colors duration-500`}
              strokeWidth={2}
            />
          </div>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default memo(OurStory);
