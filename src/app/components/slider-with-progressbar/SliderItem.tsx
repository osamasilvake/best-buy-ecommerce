import React from "react";
import { SliderItemData } from "../slider/types";

const SliderItem = ({
  image,
  title,
  description,
  price,
  save,
}: SliderItemData) => (
  <div className="bg-white rounded-sm border-1 border-gray-300 min-w-40 px-4 py-6 flex flex-col">
    <img src={image} alt={title} className="w-full h-32 object-cover" />
    <p className="text-xs mt-10">{description}</p>
    <h3 className="text-xs font-semibold mt-2">{title}</h3>
    <div>
      {/* <span>start</span> */}
      <span className="text-sm text-[#55555a]">(207 Reviews)</span>
    </div>
    <div className="flex flex-col pt-2">
      <button className="bg-slider-para text-white text-sm rounded-sm px-1 py-1 w-24">
        Ends Sunday
      </button>
      <span className="text-[12px] text-slider-para font-[600]">{save}</span>
      <p className="text-[18px] font-[600] text-slider-para">{price}</p>
    </div>
  </div>
);

export default SliderItem;
