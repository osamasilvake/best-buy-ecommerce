import React from "react";

interface Props {
  totalPages: number;
  currentPage: number;
  onDotClick: (index: number) => void;
}

const SliderDots = ({ totalPages, currentPage, onDotClick }: Props) => (
  <div className="flex justify-center mt-6 space-x-2">
    {Array.from({ length: totalPages }).map((_, idx) => (
      <button
        key={idx}
        onClick={() => onDotClick(idx)}
        className={`w-3 h-3 rounded-full transition-colors duration-200 ${
          currentPage === idx ? "bg-white" : "bg-gray-400"
        }`}
      />
    ))}
  </div>
);

export default SliderDots;
