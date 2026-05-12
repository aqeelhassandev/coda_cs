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

const slides = [
  {
    id: "01",
    title: "LIMITED DROPS, MAXIMUM IMPACT",
    description: "We release exclusive, small-batch collections to keep your style fresh and unique—once it's gone, it's gone.",
    subtitle: "Limited Drops, Maximum Impact",
    image: "C:/Users/jtdev/.gemini/antigravity/brain/63c4a3a6-b24a-4271-a167-7ccf743eb142/hero_fashion_slide_1778568531441.png"
  },
  {
    id: "02",
    title: "BUILT FOR THE STREETS",
    description: "High-performance streetwear designed for the urban jungle. Durability meets high-end aesthetics.",
    subtitle: "Built for the Streets",
    image: "C:/Users/jtdev/.gemini/antigravity/brain/63c4a3a6-b24a-4271-a167-7ccf743eb142/hero_fashion_slide_1778568531441.png"
  },
  {
    id: "03",
    title: "ART MEETS ATTITUDE",
    description: "Express your identity through unique patterns and bold silhouettes. Fashion is your canvas.",
    subtitle: "Art Meets Attitude",
    image: "C:/Users/jtdev/.gemini/antigravity/brain/63c4a3a6-b24a-4271-a167-7ccf743eb142/hero_fashion_slide_1778568531441.png"
  },
  {
    id: "04",
    title: "FUTURE-READY FASHION",
    description: "Sustainable materials and cutting-edge design. Step into the future of conscious apparel.",
    subtitle: "Future-Ready Fashion",
    image: "C:/Users/jtdev/.gemini/antigravity/brain/63c4a3a6-b24a-4271-a167-7ccf743eb142/hero_fashion_slide_1778568531441.png"
  },
  {
    id: "05",
    title: "COMMUNITY-DRIVEN CULTURE",
    description: "A movement born from the people. Join a global community of style innovators.",
    subtitle: "Community-Driven Culture",
    image: "C:/Users/jtdev/.gemini/antigravity/brain/63c4a3a6-b24a-4271-a167-7ccf743eb142/hero_fashion_slide_1778568531441.png"
  }
];

export function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  return (
    <div className="mx-auto w-[1200px] h-[800px] overflow-hidden rounded-[40px] relative bg-neutral-900">
      <Carousel setApi={setApi} className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full pl-0 relative">
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-center px-16 pb-32">
                <div className="max-w-2xl space-y-6">
                  <h1 className="text-white text-7xl font-bold leading-[1.1] tracking-tight">
                    {slide.title.split(', ').map((part, i) => (
                      <span key={i} className="block">{part}{i === 0 && ','}</span>
                    ))}
                  </h1>
                  <p className="text-gray-300 text-lg max-w-md font-light leading-relaxed">
                    {slide.description}
                  </p>
                  <Button 
                    className="bg-white hover:bg-gray-100 text-black rounded-full px-8 py-7 flex items-center gap-3 text-base font-medium group transition-all"
                  >
                    Shop now
                    <div className="bg-black rounded-full p-2 group-hover:translate-x-1 transition-transform">
                      <HugeiconsIcon icon={ArrowRight01Icon} className="text-white w-4 h-4" strokeWidth={2} />
                    </div>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Navigation Indicators */}
      <div className="absolute bottom-10 left-0 right-0 px-16">
        <div className="flex gap-4 w-full border-t border-white/20 pt-6">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className="flex-1 group text-left transition-all relative"
            >
              {/* Progress Bar */}
              <div 
                className={cn(
                  "absolute -top-[25px] left-0 h-[2px] transition-all duration-500",
                  current === index ? "w-full bg-white" : "w-0 bg-white/50 group-hover:w-full"
                )}
              />
              
              <div className="space-y-1">
                <span className={cn(
                  "block text-lg font-bold transition-colors",
                  current === index ? "text-white" : "text-white/60"
                )}>
                  {slide.id}
                </span>
                <span className={cn(
                  "block text-xs font-medium uppercase tracking-wider transition-colors",
                  current === index ? "text-white" : "text-white/40"
                )}>
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
