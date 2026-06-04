import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { motion } from "framer-motion";
const product = [
    {
        productName: "Shadow Drip",
        productDesc: "A sleek, minimalist hoodie with dark tones and subtle reflective accents for an effortless street vibe.",
        productPrice: 89,
        productOldPrice: 120,
        productImage: "/products/1.avif",
        tag: "New",
    },
    {
        productName: "Urban Phantom",
        productDesc: "Urban Phantom – A bold, oversized hoodie with edgy graphics and a stealthy aesthetic inspired by city nights.",
        productPrice: 89,
        productOldPrice: 120,
        productImage: "/products/2.avif",
        tag: "New",
    },
    {
        productName: "Neon Rebellion",
        productDesc: "A statement piece with vibrant neon details and rebellious street art influences for a standout look.",
        productPrice: 89,
        productOldPrice: 120,
        productImage: "/products/3.avif",
        tag: "New",
    },
];
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
};
const ProductCard = memo((productData) => {
    return (_jsxs(motion.div, { variants: fadeInUp, className: "relative flex gap-[20px] flex-col cursor-pointer group", children: [productData.tag && (_jsx("div", { className: "absolute top-[20px] left-[20px] z-10 px-[18px] py-[7px] bg-black rounded-[25px] text-[16px] sm:text-[18px] font-bold text-white", children: productData.tag })), _jsx("div", { className: "overflow-hidden rounded-[30px]", children: _jsx("img", { className: "h-[350px] sm:h-[420px] md:h-[500px] w-full object-cover group-hover:scale-105 transition-all duration-700 ease-in-out", loading: "lazy", src: productData.productImage, alt: productData.productImage }) }), _jsxs("div", { className: "flex flex-col gap-[7px] justify-between", children: [_jsx("h3", { className: "text-[28px] sm:text-[32px] text-text-base font-bold", children: productData.productName }), _jsx("p", { className: "text-[16px] sm:text-[18px] leading-[150%] text-text-secondary font-normal w-[95%]", children: productData.productDesc }), _jsxs("h3", { className: "text-[20px] sm:text-[22px] text-text-base font-bold flex gap-4 items-center ", children: ["$", productData.productPrice, " ", _jsxs("span", { className: "line-through text-text-secondary/50", children: ["$", productData.productOldPrice] })] })] })] }));
});
ProductCard.displayName = "ProductCard";
const OurProduct = () => {
    return (_jsxs(motion.div, { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-100px" }, variants: staggerContainer, className: "w-full h-full mt-10 mb-10 md:mt-[36px] md:mb-[36px]", children: [_jsxs(motion.div, { variants: fadeInUp, children: [_jsx("h3", { className: "text-[32px] sm:text-[45px] font-bold text-text-base uppercase", children: "new drops" }), _jsx("p", { className: "text-[18px] sm:text-[22px] font-normal leading-[150%] text-text-secondary w-full md:w-2/3", children: "Stand out with our latest collection\u2014bold designs, premium fabrics, and street-ready fits. Once they\u2019re gone, they\u2019re gone. Don\u2019t miss out!" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-10", children: product.map((productData) => (_jsx(ProductCard, { ...productData }, productData.productName))) })] }));
};
export default memo(OurProduct);
