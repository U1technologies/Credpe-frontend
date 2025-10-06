"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

export default function AutoScrollLogos({ 
  logos = [], 
  speed = 1, 
  interval = 20,
  gap = "gap-10",
  imageWidth = 120,
  imageHeight = 60,
  containerClassName = "overflow-hidden my-8 max-md:my-6",
  imageClassName = "object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
}) {
  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || logos.length === 0) return;

    const startScrolling = () => {
      scrollIntervalRef.current = setInterval(() => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += speed;
        }
      }, interval);
    };

    startScrolling();

    const handleMouseEnter = () => clearInterval(scrollIntervalRef.current);
    const handleMouseLeave = () => startScrolling();

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(scrollIntervalRef.current);
      scrollContainer?.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [logos, speed, interval]);

  if (!logos || logos.length === 0) {
    return null;
  }

  return (
    <div className={containerClassName} ref={scrollContainerRef}>
      <div className={`flex ${gap} items-center`}>
        {[...logos, ...logos].map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={item.logo}
              alt={item.bank || item.name || `Logo ${index + 1}`}
              width={imageWidth}
              height={imageHeight}
              className={imageClassName}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
