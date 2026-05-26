import { memo } from "react";
import { motion } from "framer-motion";

interface CategoryCardProps {
  title: string;
  image: string;
  link?: string;
}

const CategoryCard = memo(({ title, image }: CategoryCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-[32px] cursor-pointer group h-[450px] sm:h-[600px] md:h-[850px] w-full flex flex-col justify-end">
      {/* Background Image */}
      <img
        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out z-0"
        loading="lazy"
        src={image}
        alt={title}
      />

      {/* Dark Overlay Gradient for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

      {/* Category Title */}
      <div className="relative z-20 p-6 md:p-10 select-none">
        <motion.h2
          className="text-white text-[56px] sm:text-[72px] md:text-[80px] lg:text-[96px] font-black uppercase tracking-tight leading-none drop-shadow-lg"
          initial={{ y: 10, opacity: 0.9 }}
          whileHover={{ y: -5, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {title}
        </motion.h2>
      </div>
    </div>
  );
});

CategoryCard.displayName = "CategoryCard";

const Categories = () => {
  const categoriesList = [
    {
      title: "WOMAN",
      image: "/features/4.avif",
    },
    {
      title: "MAN",
      image: "/features/3.avif",
    },
  ];

  return (
    <div className="w-full h-full mt-[36px] mb-[36px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {categoriesList.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(Categories);
