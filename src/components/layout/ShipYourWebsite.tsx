import { Button } from "@base-ui/react/button";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { memo } from "react";

interface ServiceCardProps {
  image?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  bgColor?: string;
  classNameContainer?: string;
  classNameContent?: string;
}

const services: ServiceCardProps[] = [
  {
    image: "/hero/3.avif",
    classNameContainer: "col-span-2",
  },
  {
    title: "Built by the Streets, Made for You",
    description:
      "From the streets to your style—our journey is all about self-expression and rebellion. Join the movement.",
    buttonText: "Read our story ",
    bgColor: "rgb(18, 18, 18)",
    classNameContainer: "p-[30px]",
    classNameContent: "text-white",
  },
  {
    title: "Elevate Your Street Game",
    description:
      "From bold graphics to everyday essentials, explore our latest drops and signature pieces designed for the culture.",
    buttonText: "Shop collections ",
    bgColor: "rgb(232, 232, 232)",
    classNameContainer: "p-[30px]",
    classNameContent: "text-black",
  },
  {
    image: "/services/1.avif",
    classNameContainer: "col-span-2",
  },
];

const ServiceCard = memo((serviceData: ServiceCardProps) => {
  return (
    <div
      style={{ backgroundColor: serviceData?.bgColor }}
      className={`${serviceData.classNameContainer} rounded-2xl  flex gap-[20px] flex-col cursor-pointer group`}
    >
      {serviceData.image && (
        <div className="overflow-hidden rounded-[30px]">
          <img
            className="h-[500px] w-full object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
            loading="lazy"
            src={serviceData.image}
            alt={serviceData.image}
          />
        </div>
      )}

      {serviceData.title && (
        <div
          style={{ justifyContent: "end" }}
          className={`flex flex-col gap-[7px] w-full h-full ${serviceData.classNameContent}`}
        >
          <h3 className="text-[30px]  font-bold">{serviceData.title}</h3>
          <p className="text-[18px]  leading-[150%]  font-normal w-[95%]">
            {serviceData.description}
          </p>

          <Button
            className={`${serviceData.classNameContent == "text-white" ? "bg-white text-black" : "text-white bg-black"} relative border-0 outline-none overflow-hidden  rounded-full px-5 py-2 mt-3 w-fit flex items-center gap-3 text-base font-medium group cursor-pointer`}
          >
            {/* Animated Background */}
            <span
              className={`${serviceData.classNameContent == "text-white" ? "bg-[#292929]" : "bg-white"} absolute inset-0  scale-x-0 origin-left transition-transform duration-700 ease-out group-hover:scale-x-100 rounded-full`}
            />

            {/* Content */}
            <span
              className={`${serviceData.classNameContent == "text-white" ? "text-black group-hover:text-white" : "text-white group-hover:text-black"} relative z-10 transition-colors duration-500 `}
            >
              {serviceData.buttonText}
            </span>

            {/* Arrow */}
            <div
              className={`${serviceData.classNameContent == "text-white" ? "bg-[#292929]" : "bg-white"} relative z-10  rounded-full p-2 transition-all duration-500   `}
            >
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                className={`${serviceData.classNameContent == "text-white" ? "text-white group-hover:text-white" : "text-black group-hover:text-black"}  w-4 h-4 transition-colors duration-500`}
                strokeWidth={2}
              />
            </div>
          </Button>
        </div>
      )}
    </div>
  );
});

ServiceCard.displayName = "ServiceCard";

const ShipYourWebsite = () => {
  return (
    <div className="w-full h-full mt-[86px] mb-[36px]">
      <div className="w-[60%]">
        <h3 className="text-[45px] font-bold text-text-base uppercase">
          Ship Your Website Quickly with Frameblox
        </h3>
        <p className="text-[18px] font-normal leading-[150%] text-text-secondary w-full mt-4">
          Use prebuilt templates and components for a professional, stunning
          look. Save time and focus on content with our user-friendly,
          customizable design solutions.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 sm:gap-5 gap-3 mt-10">
        {services.map((service, index) => (
          <ServiceCard key={`${service.title}-${index}`} {...service} />
        ))}
      </div>
    </div>
  );
};

export default memo(ShipYourWebsite);
