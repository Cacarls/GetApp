"use client";

import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import { useRef, useEffect, useState } from "react";

const AUTO_SCROLL_SPEED = 3; // Speed of auto-scroll in pixels
const LONG_PRESS_DURATION = 100; // Duration in ms for long press to be detected

const Brands = () => {
  const scrollContainerRef = useRef(null);
  const autoScrollInterval = useRef(null);
  const longPressTimerRef = useRef(null);
  const [isManualScrollEnabled, setIsManualScrollEnabled] = useState(false);
  const [startX, setStartX] = useState(0); // Initial mouse X position
  const [scrollLeftStart, setScrollLeftStart] = useState(0); // Initial scroll left position

  // Start the continuous auto-scroll on component mount
  useEffect(() => {
    startAutoScroll();

    // Cleanup on unmount
    return () => stopAutoScroll();
  }, []);

  // Start auto-scroll with seamless looping
  const startAutoScroll = () => {
    stopAutoScroll(); // Ensure no existing interval

    autoScrollInterval.current = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        container.scrollLeft += AUTO_SCROLL_SPEED;

        // If scrolled past the first set of logos, reset to start
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
    }, 20); // Adjust interval for smoothness
  };

  // Stop auto-scroll
  const stopAutoScroll = () => {
    if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
  };

  // Handle pointer down to initiate long-press detection
  const handlePointerDown = (event) => {
    stopAutoScroll(); // Stop auto-scroll immediately on pointer down
    setStartX(event.pageX); // Track initial X position
    setScrollLeftStart(scrollContainerRef.current.scrollLeft); // Track initial scroll position

    // Start long press timer to enable manual scrolling
    longPressTimerRef.current = setTimeout(() => {
      setIsManualScrollEnabled(true); // Enable manual scrolling after long press
    }, LONG_PRESS_DURATION);
  };

  // Handle manual scrolling
  const handlePointerMove = (event) => {
    if (!isManualScrollEnabled || !scrollContainerRef.current) return;

    const x = event.pageX;
    const walk = (x - startX) * 1.5; // Adjust scrolling speed for smoothness
    scrollContainerRef.current.scrollLeft = scrollLeftStart - walk;
  };

  // Handle pointer release to disable manual scrolling and resume auto-scroll
  const handlePointerUp = () => {
    clearTimeout(longPressTimerRef.current);
    setIsManualScrollEnabled(false); // Disable manual scroll mode
    startAutoScroll(); // Resume auto-scroll
  };

  return (
    <section className="py-16 bg-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-center text-4xl font-bold mb-10 text-white">
        Our Trusted Brands
      </h2>

        {/* Scrollable Grid for Logos with hidden scrollbar */}
        <div
          ref={scrollContainerRef}
          className={`flex gap-8 overflow-x-hidden no-scrollbar ${isManualScrollEnabled ? "cursor-grabbing" : "cursor-pointer"}`}
          style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
          onPointerDown={handlePointerDown} // Start long press for manual scroll
          onPointerUp={handlePointerUp} // Resume auto-scroll on pointer release
          onPointerMove={handlePointerMove} // Enable manual scrolling on move
        >
          {/* Duplicate logos to create seamless effect */}
          {[...brandsData, ...brandsData].map((brand, index) => (
            <SingleBrand key={`${brand.id}-${index}`} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }) => {
  const { image, imageLight, name } = brand;

  return (
    <div className="min-w-[150px] flex items-center justify-center">
      <a
        target="_blank"
        rel="nofollow noreferrer"
        className="relative opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        {/* Dark mode brand logo (if available) */}
        {imageLight ? (
          <>
            <Image
              src={imageLight}
              alt={name}
              width={115}
              height={70}
              className="hidden dark:block"
              loading="lazy"
              draggable="false" // Disable dragging
            />
            <Image
              src={image}
              alt={name}
              width={115}
              height={70}
              className="block dark:hidden"
              loading="lazy"
              draggable="false" // Disable dragging
            />
          </>
        ) : (
          <Image
            src={image}
            alt={name}
            width={115}
            height={70}
            className="block"
            loading="lazy"
            draggable="false" // Disable dragging
          />
        )}
      </a>
    </div>
  );
};
