"use client"

import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';
import { DropdownProps } from './Dropdown.interface';

const Dropdown = ({ title, submenu }: DropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <div
        className="cursor-pointer text-white flex items-start gap-1 px-4 py-1 list-none"
        onClick={handleToggle}
      >
        <p className="font-[600] text-[16px]">{title}</p>
        <span className={`transition-transform duration-300 transform ${open ? 'rotate-180' : ''}`}>
          <IoIosArrowDown />
        </span>
      </div>

      {open && (
         <div className="relative">
         {/* Arrow */}
         <span className="absolute z-10 top-4 left-4 w-0 h-0 border-l-14 border-r-14 border-b-14 border-l-transparent border-r-transparent border-b-white translate-y-[-100%]" />
     
         {/* Dropdown Box */}
         <div className="absolute w-96 mt-[.8rem] h-fit bg-white text-black rounded shadow-lg z-10">
           <ul>
             {submenu.map((item, index) => (
               <li key={index}>
                 <Link href="#" className="block px-4 py-2 hover:bg-gray-200">
                   {item}
                 </Link>
               </li>
             ))}
           </ul>
         </div>
       </div>
      )}
    </div>
  );
};

export default Dropdown;
