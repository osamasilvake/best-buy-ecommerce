import React from "react";

interface SliderProgressbarProps {
  currentPage: number;
  totalPages: number;
}

const SliderProgressbar = ({
  currentPage,
  totalPages,
}: SliderProgressbarProps) => {
  const progress = ((currentPage + 1) / totalPages) * 100;

  return (
    <div className="relative w-full h-1 bg-gray-300 rounded-full mt-4">
      <div
        className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-500 ease-in-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default SliderProgressbar;
