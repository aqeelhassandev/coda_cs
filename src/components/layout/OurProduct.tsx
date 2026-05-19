import { memo } from "react";

interface ProductCardProps {
  productName: string;
  productDesc: string;
  productPrice: number;
  productOldPrice?: number;
  productImage: string;
  tag?: string;
}

const product: ProductCardProps[] = [
  {
    productName: "Shadow Drip",
    productDesc:
      "A sleek, minimalist hoodie with dark tones and subtle reflective accents for an effortless street vibe.",
    productPrice: 89,
    productOldPrice: 120,
    productImage: "/products/1.avif",
    tag: "New",
  },
  {
    productName: "Urban Phantom",
    productDesc:
      "Urban Phantom – A bold, oversized hoodie with edgy graphics and a stealthy aesthetic inspired by city nights.",
    productPrice: 89,
    productOldPrice: 120,
    productImage: "/products/2.avif",
    tag: "New",
  },
  {
    productName: "Neon Rebellion",
    productDesc:
      "A statement piece with vibrant neon details and rebellious street art influences for a standout look.",
    productPrice: 89,
    productOldPrice: 120,
    productImage: "/products/3.avif",
    tag: "New",
  },
];

const ProductCard = memo((productData: ProductCardProps) => {
  return (
    <div className="relative flex gap-[20px] flex-col cursor-pointer group">
      <div className="absolute top-[20px] left-[20px] z-10 px-[18px] py-[7px] bg-black rounded-[25px] text-[18px] font-bold text-white">
        {productData.tag}
      </div>
      <div className="overflow-hidden rounded-[30px]">
        <img
          className="h-[500px] w-full object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
          loading="lazy"
          src={productData.productImage}
          alt={productData.productImage}
        />
      </div>
      <div className="flex flex-col gap-[7px] justify-between">
        <h3 className="text-[32px] text-text-base font-bold">
          {productData.productName}
        </h3>
        <p className="text-[18px]  leading-[150%] text-text-secondary font-normal w-[95%]">
          {" "}
          {productData.productDesc}
        </p>
        <h3 className="text-[22px] text-text-base font-bold flex gap-4 items-center ">
          ${productData.productPrice}{" "}
          <span className="line-through text-text-secondary/50">${productData.productOldPrice}</span>
        </h3>
      </div>
    </div>
  );
});

ProductCard.displayName = "ProductCard";

const OurProduct = () => {
  return (
    <div className="w-full h-full mt-[36px] mb-[36px]">
      <div>
        <h3 className="text-[45px] font-bold text-text-base uppercase">
          new drops
        </h3>
        <p className="text-[22px] font-normal leading-[150%] text-text-secondary w-2/3">
          Stand out with our latest collection—bold designs, premium fabrics,
          and street-ready fits. Once they’re gone, they’re gone. Don’t miss
          out!
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 sm:gap-5 gap-3 mt-10">
        {product.map((productData) => (
          <ProductCard key={productData.productName} {...productData} />
        ))}
      </div>
    </div>
  );
};

export default memo(OurProduct);
