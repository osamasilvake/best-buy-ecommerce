"use client";

import React, { useState, useEffect } from "react";
import { SliderProps } from "./types";
import SliderItem from "./SliderItem";
import SliderDots from "./SliderDots";
import SliderControls from "./SliderControls";

const Slider = ({ items }: SliderProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // Handle responsive items per page
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerPage(2); 
      } else if (width >= 640 && width < 768) {
        setItemsPerPage(3); // Medium screens
      }
       else if (width >= 768 && width < 1024) {
        setItemsPerPage(4); // Medium screens
      } else if (width >= 1024 && width < 1280) {
        setItemsPerPage(5); // Large screens (laptop)
      } else {
        setItemsPerPage(6); // Extra Large screens (desktop)
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(items.length / itemsPerPage);
 
  const handleNext = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const handlePrev = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  const handleDotClick = (index: number) => setCurrentPage(index);

  return (
    <div className="w-full py-8 min-h-[400px] mx-auto max-w-[82%]">
      <div className="px-4 relative">
        <SliderControls
          onPrev={handlePrev}
          onNext={handleNext}
          disablePrev={currentPage === 0}
          disableNext={currentPage === totalPages - 1}
        />

        <div   className={`relative overflow-hidden min-h-[384px]
    ${currentPage !== 0 ? "border-l-3 border-white" : ""} 
    ${currentPage !== totalPages - 1 ? "border-r-3 border-white" : ""}
  `}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentPage * (100 / totalPages)}%)`,
              width: `${100 * totalPages}%`,
            }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => {
              const pageItems = items.slice(
                pageIndex * itemsPerPage,
                (pageIndex + 1) * itemsPerPage
              );
              return (
                <div
                  key={pageIndex}
                  className={`w-full w-[${100 / totalPages}%]`}
                >
                  <div
                    className={`grid gap-4 h-full ${
                      itemsPerPage === 2 ?
                      "grid-cols-2":
                      itemsPerPage === 3
                        ? "grid-cols-3"
                        : itemsPerPage === 4
                        ? "grid-cols-4"
                        : itemsPerPage === 5
                        ? "grid-cols-5"
                        : "grid-cols-6"
                    }`}
                  >
                    {pageItems.map((item) => (
                      <SliderItem key={item.id} {...item} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <SliderDots
          totalPages={totalPages}
          currentPage={currentPage}
          onDotClick={handleDotClick}
        />
      </div>
    </div>
  );
};

export default Slider;
