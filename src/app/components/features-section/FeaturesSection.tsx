import { FaStore, FaShippingFast, FaTags, FaLaptop } from "react-icons/fa";

export const features = [
  {
    icon: FaStore,
    text: "Quick and Easy Store Pickup",
  },
  {
    icon: FaShippingFast,
    text: "Free shipping over $40",
  },
  {
    icon: FaTags,
    text: "Low Price Guarantee",
  },
  {
    icon: FaLaptop,
    text: "Latest and Greatest Tech",
  },
];

const FeaturesSection = () => {
  return (
    <div
      className="max-w-4xl gap-x-32 py-12 mx-auto grid grid-cols-2
     md:grid-cols-4 gap-6 px-3 md:px-0"
    >
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 lg:w-48 md:items-center"
        >
          <feature.icon className="text-5xl text-blue-500 mb-2" />
          <p className="text-[16px] text-[#0046be] font-bold leading-5.5">
            {feature.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;
