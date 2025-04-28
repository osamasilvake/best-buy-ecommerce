import React from "react";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

interface Props {
  onPrev: () => void;
  onNext: () => void;
  disablePrev: boolean;
  disableNext: boolean;
}

const SliderControls = ({
  onPrev,
  onNext,
  disablePrev,
  disableNext,
}: Props) => (
  <>
    <button
      onClick={onPrev}
      disabled={disablePrev}
      className={`absolute -left-10 top-1/2 rounded-4xl -translate-y-1/2  z-10
        ${disablePrev ? "cursor-not-allowed" : " hover:bg-gray-200"}`}
    >
      <MdKeyboardArrowLeft className="text-[35px]" />
    </button>

    <button
      onClick={onNext}
      disabled={disableNext}
      className={`absolute -right-10 top-1/2 rounded-4xl
        ${disableNext ? "cursor-not-allowed" : " hover:bg-gray-200"}`}
    >
      <MdOutlineKeyboardArrowRight className="text-[36px]" />
    </button>
  </>
);

export default SliderControls;
