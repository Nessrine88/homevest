/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef, useState } from "react";

const Slider = ({ children, className, scrollSpeed = 2 }) => {
  const slider = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    const handleAutoScroll = () => {
      if (slider.current && isScrolling) {
        slider.current.scrollLeft += scrollSpeed;
        if (
          slider.current.scrollLeft + slider.current.clientWidth >=
          slider.current.scrollWidth
        ) {
          slider.current.scrollLeft = 0;
        }
      }
    };

    const scrollInterval = setInterval(handleAutoScroll, 50);

    return () => {
      clearInterval(scrollInterval);
    };
  }, [scrollSpeed, isScrolling]);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsScrolling(false);
    };

    const handleMouseLeave = () => {
      setIsScrolling(true);
    };

    const sliderElement = slider.current;
    if (sliderElement) {
      sliderElement.addEventListener("mouseenter", handleMouseEnter);
      sliderElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener("mouseenter", handleMouseEnter);
        sliderElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className={`flex flex-row gap-10 ${className}`}>
      <div
        className="w-[90%] mx-auto overflow-x-auto whitespace-nowrap slider"
        ref={slider}
      >
        {children}
      </div>
    </div>
  );
};

export default Slider;
