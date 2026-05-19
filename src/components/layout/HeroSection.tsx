import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  id: string;
  title: string;
  description: string;
  subtitle: string;
  image: string;
}

const SLIDE_DURATION: number = 5000;

const slides: Slide[] = [
  {
    id: "01",
    title: "LIMITED DROPS, MAXIMUM IMPACT",
    description:
      "We release exclusive, small-batch collections to keep your style fresh and unique—once it's gone, it's gone.",
    subtitle: "Limited Drops, Maximum Impact",
    image: "/hero/1.avif",
  },
  {
    id: "02",
    title: "Future-Ready Fashion",
    description:
      "From oversized silhouettes to innovative materials, we push the boundaries of modern streetwear while staying true to the culture.",
    subtitle: "Built for the Streets",
    image: "/hero/2.avif",
  },
  {
    id: "03",
    title: "ART MEETS ATTITUDE",
    description:
      "Express your identity through unique patterns and bold silhouettes. Fashion is your canvas.",
    subtitle: "Art Meets Attitude",
    image: "/hero/3.avif",
  },
  {
    id: "04",
    title: "FUTURE-READY FASHION",
    description:
      "Sustainable materials and cutting-edge design. Step into the future of conscious apparel.",
    subtitle: "Future-Ready Fashion",
    image: "/hero/4.avif",
  },
  {
    id: "05",
    title: "LIMITED DROPS, MAXIMUM IMPACT",
    description:
      "We release exclusive, small-batch collections to keep your style fresh and unique—once it's gone, it's gone.",
    subtitle: "Community-Driven Culture",
    image: "/hero/5.avif",
  },
];

export function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [tick, setTick] = useState<number>(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      setTick((t) => t + 1);
    });

    const interval = setInterval(() => {
      api.scrollNext();
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  return (
    <div className=" h-[800px] overflow-hidden rounded-[40px] relative bg-neutral-900">
      <Carousel setApi={setApi} className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full pl-0 relative">
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  key={`img-${index}-${tick}`}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  initial={{ scale: 1.08 }}
                  animate={current === index ? { scale: 1.2 } : { scale: 1.08 }}
                  transition={{
                    duration: SLIDE_DURATION / 1000,
                    ease: "linear",
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="relative h-full flex flex-col justify-end px-16 pb-50">
                <AnimatePresence mode="wait">
                  {current === index && (
                    <motion.div
                      key={`slide-${index}-${tick}`}
                      initial={{ opacity: 0, y: 60 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.65, ease: "easeOut" }}
                      className="max-w-2xl space-y-6"
                    >
                      <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                        className="text-white text-5xl font-bold leading-[1.1] tracking-tight"
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-gray-300 text-lg max-w-md font-light leading-relaxed"
                      >
                        {slide.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.6 }}
                      >
                        <Button className="relative overflow-hidden bg-white text-black rounded-full px-5 py-6 flex items-center gap-3 text-base font-medium group cursor-pointer">
                          {/* Animated Background */}
                          <span className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-700 ease-out group-hover:scale-x-100 rounded-full" />

                          {/* Content */}
                          <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                            Shop now
                          </span>

                          {/* Arrow */}
                          <div className="relative z-10 bg-black rounded-full p-2 transition-all duration-500   ">
                            <HugeiconsIcon
                              icon={ArrowRight01Icon}
                              className="text-white w-4 h-4 transition-colors duration-500"
                              strokeWidth={2}
                            />
                          </div>
                        </Button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-10 left-0 right-0 px-16">
        <div className="flex gap-4 w-full border-t border-white/20 pt-6">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className="flex-1 group text-left transition-all relative"
            >
              <div className="absolute top-[-25px] left-0 h-[2px] w-full overflow-hidden">
                {current === index ? (
                  <motion.div
                    key={`progress-${index}-${tick}`}
                    className="h-full bg-white origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: SLIDE_DURATION / 1000,
                      ease: "linear",
                    }}
                    style={{ transformOrigin: "left" }}
                  />
                ) : (
                  <div className="h-full bg-white/0 group-hover:bg-white/40 transition-colors duration-300 w-full" />
                )}
              </div>

              <div className="space-y-1">
                <span
                  className={cn(
                    "block text-lg font-bold transition-colors",
                    current === index ? "text-white" : "text-white/60",
                  )}
                >
                  {slide.id}
                </span>
                <span
                  className={cn(
                    "block text-xs font-medium uppercase tracking-wider transition-colors",
                    current === index ? "text-white" : "text-white/40",
                  )}
                >
                  {slide.subtitle}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
