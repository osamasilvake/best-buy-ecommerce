import React from "react";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

interface Props {
  onPrev: () => void;
  onNext: () => void;
  disablePrev: boolean;
  disableNext: boolean;
}

const SliderControls = ({ onPrev, onNext, disablePrev, disableNext }: Props) => (
  <>
    <button
      onClick={onPrev}
      disabled={disablePrev}
      className={`absolute -left-10 top-1/2 -translate-y-1/2 rounded-full shadow-md z-10 transition-colors duration-200
        ${disablePrev ? "bg-gray-100/50 cursor-not-allowed" : "bg-gray-100 hover:bg-gray-200"}`}
    >
      <MdKeyboardArrowLeft className="text-[35px]" />
    </button>

    <button
      onClick={onNext}
      disabled={disableNext}
      className={`absolute -right-10 top-1/2 -translate-y-1/2 rounded-full shadow-md z-10 transition-colors duration-200
        ${disableNext ? "bg-gray-100/50 cursor-not-allowed" : "bg-gray-100 hover:bg-gray-200"}`}
    >
      <MdOutlineKeyboardArrowRight className="text-[36px]" />
    </button>
  </>
);

export default SliderControls;